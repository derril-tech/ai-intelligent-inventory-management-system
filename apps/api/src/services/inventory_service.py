"""
Inventory service for StockSense AI.

Provides business logic for inventory management operations including
CRUD operations, movement tracking, and inventory analytics.
"""

from typing import List, Optional, Dict, Any
from datetime import datetime, timedelta
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func, and_, or_
from sqlalchemy.orm import selectinload
import structlog

from ..models.inventory import Item, Location, Inventory, InventoryMovement
from ..models.user import User
from ..schemas.inventory import (
    ItemCreate, ItemUpdate, ItemResponse,
    LocationCreate, LocationUpdate, LocationResponse,
    InventoryCreate, InventoryUpdate, InventoryResponse,
    MovementCreate, MovementResponse,
    InventorySummary, LowStockAlert, ExcessStockAlert
)

logger = structlog.get_logger()

class InventoryService:
    """Service for inventory management operations."""
    
    def __init__(self, db: AsyncSession):
        self.db = db
    
    async def create_item(self, item_data: ItemCreate, user: User) -> ItemResponse:
        """Create a new inventory item."""
        try:
            item = Item(
                **item_data.dict(),
                organization_id=user.organization_id,
                created_by=user.id
            )
            self.db.add(item)
            await self.db.commit()
            await self.db.refresh(item)
            
            logger.info("Item created", item_id=str(item.id), name=item.name)
            return ItemResponse.from_model(item)
            
        except Exception as e:
            await self.db.rollback()
            logger.error("Failed to create item", error=str(e))
            raise
    
    async def get_items(
        self, 
        user: User,
        skip: int = 0,
        limit: int = 100,
        category_id: Optional[str] = None,
        search: Optional[str] = None
    ) -> List[ItemResponse]:
        """Get inventory items with filtering and pagination."""
        try:
            query = select(Item).where(Item.organization_id == user.organization_id)
            
            if category_id:
                query = query.where(Item.category_id == category_id)
            
            if search:
                query = query.where(
                    or_(
                        Item.name.ilike(f"%{search}%"),
                        Item.sku.ilike(f"%{search}%"),
                        Item.description.ilike(f"%{search}%")
                    )
                )
            
            query = query.offset(skip).limit(limit)
            result = await self.db.execute(query)
            items = result.scalars().all()
            
            return [ItemResponse.from_model(item) for item in items]
            
        except Exception as e:
            logger.error("Failed to get items", error=str(e))
            raise
    
    async def get_item(self, item_id: str, user: User) -> Optional[ItemResponse]:
        """Get a specific inventory item."""
        try:
            result = await self.db.execute(
                select(Item).where(
                    and_(
                        Item.id == item_id,
                        Item.organization_id == user.organization_id
                    )
                )
            )
            item = result.scalar_one_or_none()
            
            return ItemResponse.from_model(item) if item else None
            
        except Exception as e:
            logger.error("Failed to get item", error=str(e), item_id=item_id)
            raise
    
    async def update_item(self, item_id: str, item_data: ItemUpdate, user: User) -> Optional[ItemResponse]:
        """Update an inventory item."""
        try:
            result = await self.db.execute(
                select(Item).where(
                    and_(
                        Item.id == item_id,
                        Item.organization_id == user.organization_id
                    )
                )
            )
            item = result.scalar_one_or_none()
            
            if not item:
                return None
            
            for field, value in item_data.dict(exclude_unset=True).items():
                setattr(item, field, value)
            
            item.updated_at = datetime.utcnow()
            await self.db.commit()
            await self.db.refresh(item)
            
            logger.info("Item updated", item_id=str(item.id))
            return ItemResponse.from_model(item)
            
        except Exception as e:
            await self.db.rollback()
            logger.error("Failed to update item", error=str(e), item_id=item_id)
            raise
    
    async def create_location(self, location_data: LocationCreate, user: User) -> LocationResponse:
        """Create a new location."""
        try:
            location = Location(
                **location_data.dict(),
                organization_id=user.organization_id,
                created_by=user.id
            )
            self.db.add(location)
            await self.db.commit()
            await self.db.refresh(location)
            
            logger.info("Location created", location_id=str(location.id), name=location.name)
            return LocationResponse.from_model(location)
            
        except Exception as e:
            await self.db.rollback()
            logger.error("Failed to create location", error=str(e))
            raise
    
    async def get_locations(self, user: User) -> List[LocationResponse]:
        """Get all locations for the organization."""
        try:
            result = await self.db.execute(
                select(Location).where(Location.organization_id == user.organization_id)
            )
            locations = result.scalars().all()
            
            return [LocationResponse.from_model(location) for location in locations]
            
        except Exception as e:
            logger.error("Failed to get locations", error=str(e))
            raise
    
    async def get_inventory_summary(self, user: User) -> InventorySummary:
        """Get inventory summary statistics."""
        try:
            # Total items
            total_items_result = await self.db.execute(
                select(func.count(Item.id)).where(Item.organization_id == user.organization_id)
            )
            total_items = total_items_result.scalar()
            
            # Total locations
            total_locations_result = await self.db.execute(
                select(func.count(Location.id)).where(Location.organization_id == user.organization_id)
            )
            total_locations = total_locations_result.scalar()
            
            # Low stock items (below reorder point)
            low_stock_result = await self.db.execute(
                select(func.count(Inventory.id)).join(Item).where(
                    and_(
                        Item.organization_id == user.organization_id,
                        Inventory.quantity <= Inventory.reorder_point
                    )
                )
            )
            low_stock_count = low_stock_result.scalar()
            
            # Excess stock items (above max level)
            excess_stock_result = await self.db.execute(
                select(func.count(Inventory.id)).join(Item).where(
                    and_(
                        Item.organization_id == user.organization_id,
                        Inventory.quantity > Inventory.max_level
                    )
                )
            )
            excess_stock_count = excess_stock_result.scalar()
            
            # Total inventory value
            total_value_result = await self.db.execute(
                select(func.sum(Inventory.quantity * Item.unit_cost)).join(Item).where(
                    Item.organization_id == user.organization_id
                )
            )
            total_value = total_value_result.scalar() or 0
            
            return InventorySummary(
                total_items=total_items,
                total_locations=total_locations,
                low_stock_count=low_stock_count,
                excess_stock_count=excess_stock_count,
                total_value=total_value
            )
            
        except Exception as e:
            logger.error("Failed to get inventory summary", error=str(e))
            raise
    
    async def get_low_stock_alerts(self, user: User) -> List[LowStockAlert]:
        """Get low stock alerts."""
        try:
            result = await self.db.execute(
                select(Inventory, Item, Location)
                .join(Item)
                .join(Location)
                .where(
                    and_(
                        Item.organization_id == user.organization_id,
                        Inventory.quantity <= Inventory.reorder_point
                    )
                )
            )
            
            alerts = []
            for inventory, item, location in result:
                alerts.append(LowStockAlert(
                    item_id=str(item.id),
                    item_name=item.name,
                    item_sku=item.sku,
                    location_id=str(location.id),
                    location_name=location.name,
                    current_quantity=inventory.quantity,
                    reorder_point=inventory.reorder_point,
                    days_of_stock=inventory.quantity / (item.daily_demand or 1) if item.daily_demand else 0
                ))
            
            return alerts
            
        except Exception as e:
            logger.error("Failed to get low stock alerts", error=str(e))
            raise
    
    async def record_movement(
        self, 
        movement_data: MovementCreate, 
        user: User
    ) -> MovementResponse:
        """Record inventory movement."""
        try:
            # Create movement record
            movement = InventoryMovement(
                **movement_data.dict(),
                organization_id=user.organization_id,
                created_by=user.id
            )
            self.db.add(movement)
            
            # Update inventory levels
            inventory_result = await self.db.execute(
                select(Inventory).where(
                    and_(
                        Inventory.item_id == movement_data.item_id,
                        Inventory.location_id == movement_data.location_id
                    )
                )
            )
            inventory = inventory_result.scalar_one_or_none()
            
            if not inventory:
                # Create new inventory record
                inventory = Inventory(
                    item_id=movement_data.item_id,
                    location_id=movement_data.location_id,
                    organization_id=user.organization_id,
                    quantity=movement_data.quantity,
                    created_by=user.id
                )
                self.db.add(inventory)
            else:
                # Update existing inventory
                if movement_data.movement_type == "in":
                    inventory.quantity += movement_data.quantity
                elif movement_data.movement_type == "out":
                    inventory.quantity -= movement_data.quantity
                elif movement_data.movement_type == "adjustment":
                    inventory.quantity = movement_data.quantity
                
                inventory.updated_at = datetime.utcnow()
            
            await self.db.commit()
            await self.db.refresh(movement)
            
            logger.info(
                "Movement recorded", 
                movement_id=str(movement.id),
                item_id=str(movement.item_id),
                quantity=movement.quantity,
                type=movement.movement_type
            )
            
            return MovementResponse.from_model(movement)
            
        except Exception as e:
            await self.db.rollback()
            logger.error("Failed to record movement", error=str(e))
            raise
