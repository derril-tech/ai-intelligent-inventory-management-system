"""
Policy service for StockSense AI.

Provides business logic for inventory policy optimization including
(s,S), Min-Max, EOQ, and base-stock policies.
"""

from typing import List, Optional, Dict, Any
from datetime import datetime
from sqlalchemy.ext.asyncio import AsyncSession
import structlog
import math

from ..models.user import User
from ..schemas.policy import (
    PolicyCreate, PolicyUpdate, PolicyResponse,
    PolicyOptimization, PolicyRecommendation
)

logger = structlog.get_logger()

class PolicyService:
    """Service for inventory policy optimization."""
    
    def __init__(self, db: AsyncSession):
        self.db = db
    
    async def create_policy(self, policy_data: PolicyCreate, user: User) -> PolicyResponse:
        """Create a new inventory policy."""
        try:
            policy = {
                "id": "pol_" + str(int(datetime.utcnow().timestamp())),
                "item_id": policy_data.item_id,
                "location_id": policy_data.location_id,
                "policy_type": policy_data.policy_type,
                "parameters": policy_data.parameters,
                "service_level": policy_data.service_level,
                "status": "active",
                "created_by": str(user.id),
                "created_at": datetime.utcnow()
            }
            
            logger.info("Policy created", policy_id=policy["id"])
            return PolicyResponse(**policy)
            
        except Exception as e:
            logger.error("Failed to create policy", error=str(e))
            raise
    
    async def optimize_policy(self, optimization_data: PolicyOptimization, user: User) -> PolicyRecommendation:
        """Optimize inventory policy parameters."""
        try:
            # Calculate optimal parameters based on policy type
            if optimization_data.policy_type == "s_s":
                result = self._optimize_s_s_policy(optimization_data)
            elif optimization_data.policy_type == "min_max":
                result = self._optimize_min_max_policy(optimization_data)
            elif optimization_data.policy_type == "eoq":
                result = self._optimize_eoq_policy(optimization_data)
            elif optimization_data.policy_type == "base_stock":
                result = self._optimize_base_stock_policy(optimization_data)
            else:
                raise ValueError(f"Unsupported policy type: {optimization_data.policy_type}")
            
            recommendation = PolicyRecommendation(
                policy_type=optimization_data.policy_type,
                optimal_parameters=result["parameters"],
                expected_cost=result["expected_cost"],
                service_level=result["service_level"],
                safety_stock=result["safety_stock"],
                reorder_point=result["reorder_point"],
                order_quantity=result["order_quantity"],
                annual_orders=result["annual_orders"],
                total_cost=result["total_cost"]
            )
            
            logger.info("Policy optimization completed", 
                       policy_type=optimization_data.policy_type,
                       item_id=optimization_data.item_id)
            
            return recommendation
            
        except Exception as e:
            logger.error("Failed to optimize policy", error=str(e))
            raise
    
    def _optimize_s_s_policy(self, data: PolicyOptimization) -> Dict[str, Any]:
        """Optimize (s,S) policy parameters."""
        # Simplified (s,S) optimization
        demand_mean = data.demand_mean
        demand_std = data.demand_std
        lead_time = data.lead_time_days
        holding_cost = data.holding_cost_rate
        ordering_cost = data.ordering_cost
        service_level = data.service_level
        
        # Calculate safety stock
        safety_stock = self._calculate_safety_stock(demand_std, lead_time, service_level)
        
        # Calculate reorder point (s)
        reorder_point = demand_mean * lead_time + safety_stock
        
        # Calculate order-up-to level (S)
        # Simplified: S = s + EOQ
        eoq = self._calculate_eoq(demand_mean, ordering_cost, holding_cost)
        order_up_to = reorder_point + eoq
        
        # Calculate expected costs
        expected_cost = self._calculate_expected_cost_s_s(
            demand_mean, demand_std, reorder_point, order_up_to, 
            lead_time, holding_cost, ordering_cost
        )
        
        return {
            "parameters": {
                "reorder_point": round(reorder_point, 2),
                "order_up_to": round(order_up_to, 2)
            },
            "expected_cost": round(expected_cost, 2),
            "service_level": service_level,
            "safety_stock": round(safety_stock, 2),
            "reorder_point": round(reorder_point, 2),
            "order_quantity": round(eoq, 2),
            "annual_orders": round(365 * demand_mean / eoq, 2),
            "total_cost": round(expected_cost, 2)
        }
    
    def _optimize_min_max_policy(self, data: PolicyOptimization) -> Dict[str, Any]:
        """Optimize Min-Max policy parameters."""
        demand_mean = data.demand_mean
        demand_std = data.demand_std
        lead_time = data.lead_time_days
        holding_cost = data.holding_cost_rate
        ordering_cost = data.ordering_cost
        service_level = data.service_level
        
        # Calculate safety stock
        safety_stock = self._calculate_safety_stock(demand_std, lead_time, service_level)
        
        # Calculate reorder point (min)
        reorder_point = demand_mean * lead_time + safety_stock
        
        # Calculate max level
        eoq = self._calculate_eoq(demand_mean, ordering_cost, holding_cost)
        max_level = reorder_point + eoq
        
        # Calculate expected costs
        expected_cost = self._calculate_expected_cost_min_max(
            demand_mean, demand_std, reorder_point, max_level,
            lead_time, holding_cost, ordering_cost
        )
        
        return {
            "parameters": {
                "min_level": round(reorder_point, 2),
                "max_level": round(max_level, 2)
            },
            "expected_cost": round(expected_cost, 2),
            "service_level": service_level,
            "safety_stock": round(safety_stock, 2),
            "reorder_point": round(reorder_point, 2),
            "order_quantity": round(eoq, 2),
            "annual_orders": round(365 * demand_mean / eoq, 2),
            "total_cost": round(expected_cost, 2)
        }
    
    def _optimize_eoq_policy(self, data: PolicyOptimization) -> Dict[str, Any]:
        """Optimize EOQ policy parameters."""
        demand_mean = data.demand_mean
        demand_std = data.demand_std
        lead_time = data.lead_time_days
        holding_cost = data.holding_cost_rate
        ordering_cost = data.ordering_cost
        service_level = data.service_level
        
        # Calculate EOQ
        eoq = self._calculate_eoq(demand_mean, ordering_cost, holding_cost)
        
        # Calculate safety stock
        safety_stock = self._calculate_safety_stock(demand_std, lead_time, service_level)
        
        # Calculate reorder point
        reorder_point = demand_mean * lead_time + safety_stock
        
        # Calculate total cost
        total_cost = self._calculate_total_cost_eoq(
            demand_mean, eoq, safety_stock, holding_cost, ordering_cost
        )
        
        return {
            "parameters": {
                "order_quantity": round(eoq, 2),
                "reorder_point": round(reorder_point, 2)
            },
            "expected_cost": round(total_cost, 2),
            "service_level": service_level,
            "safety_stock": round(safety_stock, 2),
            "reorder_point": round(reorder_point, 2),
            "order_quantity": round(eoq, 2),
            "annual_orders": round(365 * demand_mean / eoq, 2),
            "total_cost": round(total_cost, 2)
        }
    
    def _optimize_base_stock_policy(self, data: PolicyOptimization) -> Dict[str, Any]:
        """Optimize base-stock policy parameters."""
        demand_mean = data.demand_mean
        demand_std = data.demand_std
        lead_time = data.lead_time_days
        holding_cost = data.holding_cost_rate
        service_level = data.service_level
        
        # Calculate safety stock
        safety_stock = self._calculate_safety_stock(demand_std, lead_time, service_level)
        
        # Calculate base stock level
        base_stock = demand_mean * lead_time + safety_stock
        
        # Calculate expected cost
        expected_cost = self._calculate_expected_cost_base_stock(
            demand_mean, demand_std, base_stock, lead_time, holding_cost
        )
        
        return {
            "parameters": {
                "base_stock": round(base_stock, 2)
            },
            "expected_cost": round(expected_cost, 2),
            "service_level": service_level,
            "safety_stock": round(safety_stock, 2),
            "reorder_point": round(base_stock, 2),
            "order_quantity": round(demand_mean, 2),
            "annual_orders": 365,
            "total_cost": round(expected_cost, 2)
        }
    
    def _calculate_safety_stock(self, demand_std: float, lead_time: int, service_level: float) -> float:
        """Calculate safety stock based on service level."""
        # Z-score for service level (simplified)
        z_scores = {0.90: 1.28, 0.95: 1.65, 0.98: 2.05, 0.99: 2.33}
        z_score = z_scores.get(service_level, 1.65)
        
        return z_score * demand_std * math.sqrt(lead_time)
    
    def _calculate_eoq(self, demand: float, ordering_cost: float, holding_cost: float) -> float:
        """Calculate Economic Order Quantity."""
        return math.sqrt((2 * demand * ordering_cost) / holding_cost)
    
    def _calculate_expected_cost_s_s(self, demand_mean: float, demand_std: float, 
                                   reorder_point: float, order_up_to: float,
                                   lead_time: int, holding_cost: float, ordering_cost: float) -> float:
        """Calculate expected cost for (s,S) policy."""
        # Simplified cost calculation
        order_quantity = order_up_to - reorder_point
        annual_orders = 365 * demand_mean / order_quantity
        annual_ordering_cost = annual_orders * ordering_cost
        
        average_inventory = (order_up_to + reorder_point) / 2
        annual_holding_cost = average_inventory * holding_cost
        
        return annual_ordering_cost + annual_holding_cost
    
    def _calculate_expected_cost_min_max(self, demand_mean: float, demand_std: float,
                                       min_level: float, max_level: float,
                                       lead_time: int, holding_cost: float, ordering_cost: float) -> float:
        """Calculate expected cost for Min-Max policy."""
        order_quantity = max_level - min_level
        annual_orders = 365 * demand_mean / order_quantity
        annual_ordering_cost = annual_orders * ordering_cost
        
        average_inventory = (max_level + min_level) / 2
        annual_holding_cost = average_inventory * holding_cost
        
        return annual_ordering_cost + annual_holding_cost
    
    def _calculate_total_cost_eoq(self, demand: float, eoq: float, safety_stock: float,
                                holding_cost: float, ordering_cost: float) -> float:
        """Calculate total cost for EOQ policy."""
        annual_orders = 365 * demand / eoq
        annual_ordering_cost = annual_orders * ordering_cost
        
        average_inventory = eoq / 2 + safety_stock
        annual_holding_cost = average_inventory * holding_cost
        
        return annual_ordering_cost + annual_holding_cost
    
    def _calculate_expected_cost_base_stock(self, demand_mean: float, demand_std: float,
                                          base_stock: float, lead_time: int, holding_cost: float) -> float:
        """Calculate expected cost for base-stock policy."""
        average_inventory = base_stock
        annual_holding_cost = average_inventory * holding_cost
        
        return annual_holding_cost
