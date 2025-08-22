"""
Pydantic schemas for inventory policies.

Defines request/response models for inventory policy optimization.
"""

from datetime import datetime
from typing import Optional, Dict, Any
from pydantic import BaseModel, Field
from decimal import Decimal

class PolicyBase(BaseModel):
    """Base policy model."""
    item_id: str
    location_id: str
    policy_type: str = Field(..., regex="^(s_s|min_max|eoq|base_stock)$")
    parameters: Dict[str, Any]
    service_level: float = Field(..., ge=0.5, le=0.99)

class PolicyCreate(PolicyBase):
    """Policy creation model."""
    pass

class PolicyUpdate(BaseModel):
    """Policy update model."""
    policy_type: Optional[str] = Field(None, regex="^(s_s|min_max|eoq|base_stock)$")
    parameters: Optional[Dict[str, Any]] = None
    service_level: Optional[float] = Field(None, ge=0.5, le=0.99)
    status: Optional[str] = Field(None, regex="^(active|inactive|draft)$")

class PolicyResponse(PolicyBase):
    """Policy response model."""
    id: str
    status: str
    created_by: str
    created_at: datetime

class PolicyOptimization(BaseModel):
    """Policy optimization request model."""
    item_id: str
    location_id: str
    policy_type: str = Field(..., regex="^(s_s|min_max|eoq|base_stock)$")
    demand_mean: float = Field(..., gt=0)
    demand_std: float = Field(..., ge=0)
    lead_time_days: int = Field(..., gt=0)
    holding_cost_rate: float = Field(..., gt=0)
    ordering_cost: float = Field(..., gt=0)
    service_level: float = Field(..., ge=0.5, le=0.99)

class PolicyRecommendation(BaseModel):
    """Policy optimization recommendation."""
    policy_type: str
    optimal_parameters: Dict[str, Any]
    expected_cost: float
    service_level: float
    safety_stock: float
    reorder_point: float
    order_quantity: float
    annual_orders: float
    total_cost: float
