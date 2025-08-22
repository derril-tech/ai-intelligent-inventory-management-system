"""
Inventory API routes for StockSense AI.

Provides endpoints for inventory management operations.
"""

from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.ext.asyncio import AsyncSession
import structlog

from ..core.database import get_db
from ..core.auth import get_current_active_user, require_read_inventory, require_write_inventory
from ..models.user import User
from ..services.inventory_service import InventoryService
from ..schemas.inventory import (
    ItemCreate, ItemUpdate, ItemResponse,
    LocationCreate, LocationUpdate, LocationResponse,
    InventoryCreate, InventoryUpdate, InventoryResponse,
    MovementCreate, MovementResponse,
    InventorySummary, LowStockAlert
)

logger = structlog.get_logger()
router = APIRouter(prefix="/inventory", tags=["inventory"])

@router.post("/items", response_model=ItemResponse)
async def create_item(
    item_data: ItemCreate,
    current_user: User = Depends(require_write_inventory),
    db: AsyncSession = Depends(get_db)
):
    """Create a new inventory item."""
    service = InventoryService(db)
    return await service.create_item(item_data, current_user)

@router.get("/items", response_model=List[ItemResponse])
async def get_items(
    skip: int = Query(0, ge=0),
    limit: int = Query(100, ge=1, le=1000),
    category_id: Optional[str] = Query(None),
    search: Optional[str] = Query(None),
    current_user: User = Depends(require_read_inventory),
    db: AsyncSession = Depends(get_db)
):
    """Get inventory items with filtering and pagination."""
    service = InventoryService(db)
    return await service.get_items(current_user, skip, limit, category_id, search)

@router.get("/items/{item_id}", response_model=ItemResponse)
async def get_item(
    item_id: str,
    current_user: User = Depends(require_read_inventory),
    db: AsyncSession = Depends(get_db)
):
    """Get a specific inventory item."""
    service = InventoryService(db)
    item = await service.get_item(item_id, current_user)
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    return item

@router.put("/items/{item_id}", response_model=ItemResponse)
async def update_item(
    item_id: str,
    item_data: ItemUpdate,
    current_user: User = Depends(require_write_inventory),
    db: AsyncSession = Depends(get_db)
):
    """Update an inventory item."""
    service = InventoryService(db)
    item = await service.update_item(item_id, item_data, current_user)
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    return item

@router.post("/locations", response_model=LocationResponse)
async def create_location(
    location_data: LocationCreate,
    current_user: User = Depends(require_write_inventory),
    db: AsyncSession = Depends(get_db)
):
    """Create a new location."""
    service = InventoryService(db)
    return await service.create_location(location_data, current_user)

@router.get("/locations", response_model=List[LocationResponse])
async def get_locations(
    current_user: User = Depends(require_read_inventory),
    db: AsyncSession = Depends(get_db)
):
    """Get all locations for the organization."""
    service = InventoryService(db)
    return await service.get_locations(current_user)

@router.get("/summary", response_model=InventorySummary)
async def get_inventory_summary(
    current_user: User = Depends(require_read_inventory),
    db: AsyncSession = Depends(get_db)
):
    """Get inventory summary statistics."""
    service = InventoryService(db)
    return await service.get_inventory_summary(current_user)

@router.get("/alerts/low-stock", response_model=List[LowStockAlert])
async def get_low_stock_alerts(
    current_user: User = Depends(require_read_inventory),
    db: AsyncSession = Depends(get_db)
):
    """Get low stock alerts."""
    service = InventoryService(db)
    return await service.get_low_stock_alerts(current_user)

@router.post("/movements", response_model=MovementResponse)
async def record_movement(
    movement_data: MovementCreate,
    current_user: User = Depends(require_write_inventory),
    db: AsyncSession = Depends(get_db)
):
    """Record inventory movement."""
    service = InventoryService(db)
    return await service.record_movement(movement_data, current_user)
