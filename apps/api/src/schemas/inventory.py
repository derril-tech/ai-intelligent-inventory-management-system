"""
Pydantic schemas for inventory management.

Defines request/response models for items, locations, inventory,
and movement tracking.
"""

from datetime import datetime
from typing import Optional, List
from pydantic import BaseModel, Field, validator
from decimal import Decimal

# Item Schemas
class ItemBase(BaseModel):
    """Base item model."""
    name: str = Field(..., min_length=1, max_length=255)
    sku: str = Field(..., min_length=1, max_length=100)
    description: Optional[str] = Field(None, max_length=1000)
    category_id: Optional[str] = None
    unit_cost: Optional[Decimal] = Field(None, ge=0)
    unit_price: Optional[Decimal] = Field(None, ge=0)
    weight: Optional[Decimal] = Field(None, ge=0)
    dimensions: Optional[str] = Field(None, max_length=100)
    shelf_life_days: Optional[int] = Field(None, ge=0)
    daily_demand: Optional[Decimal] = Field(None, ge=0)
    lead_time_days: Optional[int] = Field(None, ge=0)
    supplier_id: Optional[str] = None
    is_active: bool = True

class ItemCreate(ItemBase):
    """Item creation model."""
    pass

class ItemUpdate(BaseModel):
    """Item update model."""
    name: Optional[str] = Field(None, min_length=1, max_length=255)
    sku: Optional[str] = Field(None, min_length=1, max_length=100)
    description: Optional[str] = Field(None, max_length=1000)
    category_id: Optional[str] = None
    unit_cost: Optional[Decimal] = Field(None, ge=0)
    unit_price: Optional[Decimal] = Field(None, ge=0)
    weight: Optional[Decimal] = Field(None, ge=0)
    dimensions: Optional[str] = Field(None, max_length=100)
    shelf_life_days: Optional[int] = Field(None, ge=0)
    daily_demand: Optional[Decimal] = Field(None, ge=0)
    lead_time_days: Optional[int] = Field(None, ge=0)
    supplier_id: Optional[str] = None
    is_active: Optional[bool] = None

class ItemResponse(ItemBase):
    """Item response model."""
    id: str
    organization_id: str
    created_by: str
    created_at: datetime
    updated_at: datetime

    @classmethod
    def from_model(cls, item):
        """Create response from SQLAlchemy model."""
        return cls(
            id=str(item.id),
            name=item.name,
            sku=item.sku,
            description=item.description,
            category_id=item.category_id,
            unit_cost=item.unit_cost,
            unit_price=item.unit_price,
            weight=item.weight,
            dimensions=item.dimensions,
            shelf_life_days=item.shelf_life_days,
            daily_demand=item.daily_demand,
            lead_time_days=item.lead_time_days,
            supplier_id=item.supplier_id,
            is_active=item.is_active,
            organization_id=str(item.organization_id),
            created_by=str(item.created_by),
            created_at=item.created_at,
            updated_at=item.updated_at
        )

# Location Schemas
class LocationBase(BaseModel):
    """Base location model."""
    name: str = Field(..., min_length=1, max_length=255)
    location_type: str = Field(..., regex="^(warehouse|store|dc|supplier|transit)$")
    address_street: Optional[str] = Field(None, max_length=255)
    address_city: Optional[str] = Field(None, max_length=100)
    address_state: Optional[str] = Field(None, max_length=100)
    address_zip_code: Optional[str] = Field(None, max_length=20)
    address_country: Optional[str] = Field(None, max_length=100)
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    contact_name: Optional[str] = Field(None, max_length=100)
    contact_email: Optional[str] = Field(None, max_length=255)
    contact_phone: Optional[str] = Field(None, max_length=20)
    is_active: bool = True

class LocationCreate(LocationBase):
    """Location creation model."""
    pass

class LocationUpdate(BaseModel):
    """Location update model."""
    name: Optional[str] = Field(None, min_length=1, max_length=255)
    location_type: Optional[str] = Field(None, regex="^(warehouse|store|dc|supplier|transit)$")
    address_street: Optional[str] = Field(None, max_length=255)
    address_city: Optional[str] = Field(None, max_length=100)
    address_state: Optional[str] = Field(None, max_length=100)
    address_zip_code: Optional[str] = Field(None, max_length=20)
    address_country: Optional[str] = Field(None, max_length=100)
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    contact_name: Optional[str] = Field(None, max_length=100)
    contact_email: Optional[str] = Field(None, max_length=255)
    contact_phone: Optional[str] = Field(None, max_length=20)
    is_active: Optional[bool] = None

class LocationResponse(LocationBase):
    """Location response model."""
    id: str
    organization_id: str
    created_by: str
    created_at: datetime
    updated_at: datetime

    @classmethod
    def from_model(cls, location):
        """Create response from SQLAlchemy model."""
        return cls(
            id=str(location.id),
            name=location.name,
            location_type=location.location_type,
            address_street=location.address_street,
            address_city=location.address_city,
            address_state=location.address_state,
            address_zip_code=location.address_zip_code,
            address_country=location.address_country,
            latitude=location.latitude,
            longitude=location.longitude,
            contact_name=location.contact_name,
            contact_email=location.contact_email,
            contact_phone=location.contact_phone,
            is_active=location.is_active,
            organization_id=str(location.organization_id),
            created_by=str(location.created_by),
            created_at=location.created_at,
            updated_at=location.updated_at
        )

# Inventory Schemas
class InventoryBase(BaseModel):
    """Base inventory model."""
    item_id: str
    location_id: str
    quantity: Decimal = Field(..., ge=0)
    reorder_point: Optional[Decimal] = Field(None, ge=0)
    max_level: Optional[Decimal] = Field(None, ge=0)
    safety_stock: Optional[Decimal] = Field(None, ge=0)
    lot_number: Optional[str] = Field(None, max_length=100)
    expiry_date: Optional[datetime] = None

class InventoryCreate(InventoryBase):
    """Inventory creation model."""
    pass

class InventoryUpdate(BaseModel):
    """Inventory update model."""
    quantity: Optional[Decimal] = Field(None, ge=0)
    reorder_point: Optional[Decimal] = Field(None, ge=0)
    max_level: Optional[Decimal] = Field(None, ge=0)
    safety_stock: Optional[Decimal] = Field(None, ge=0)
    lot_number: Optional[str] = Field(None, max_length=100)
    expiry_date: Optional[datetime] = None

class InventoryResponse(InventoryBase):
    """Inventory response model."""
    id: str
    organization_id: str
    created_by: str
    created_at: datetime
    updated_at: datetime

    @classmethod
    def from_model(cls, inventory):
        """Create response from SQLAlchemy model."""
        return cls(
            id=str(inventory.id),
            item_id=str(inventory.item_id),
            location_id=str(inventory.location_id),
            quantity=inventory.quantity,
            reorder_point=inventory.reorder_point,
            max_level=inventory.max_level,
            safety_stock=inventory.safety_stock,
            lot_number=inventory.lot_number,
            expiry_date=inventory.expiry_date,
            organization_id=str(inventory.organization_id),
            created_by=str(inventory.created_by),
            created_at=inventory.created_at,
            updated_at=inventory.updated_at
        )

# Movement Schemas
class MovementBase(BaseModel):
    """Base movement model."""
    item_id: str
    location_id: str
    movement_type: str = Field(..., regex="^(in|out|transfer|adjustment|return)$")
    quantity: Decimal = Field(..., gt=0)
    reference_number: Optional[str] = Field(None, max_length=100)
    reference_type: Optional[str] = Field(None, regex="^(po|so|transfer|adjustment|return)$")
    notes: Optional[str] = Field(None, max_length=500)
    movement_date: datetime = Field(default_factory=datetime.utcnow)

class MovementCreate(MovementBase):
    """Movement creation model."""
    pass

class MovementResponse(MovementBase):
    """Movement response model."""
    id: str
    organization_id: str
    created_by: str
    created_at: datetime

    @classmethod
    def from_model(cls, movement):
        """Create response from SQLAlchemy model."""
        return cls(
            id=str(movement.id),
            item_id=str(movement.item_id),
            location_id=str(movement.location_id),
            movement_type=movement.movement_type,
            quantity=movement.quantity,
            reference_number=movement.reference_number,
            reference_type=movement.reference_type,
            notes=movement.notes,
            movement_date=movement.movement_date,
            organization_id=str(movement.organization_id),
            created_by=str(movement.created_by),
            created_at=movement.created_at
        )

# Analytics Schemas
class InventorySummary(BaseModel):
    """Inventory summary statistics."""
    total_items: int
    total_locations: int
    low_stock_count: int
    excess_stock_count: int
    total_value: Decimal

class LowStockAlert(BaseModel):
    """Low stock alert."""
    item_id: str
    item_name: str
    item_sku: str
    location_id: str
    location_name: str
    current_quantity: Decimal
    reorder_point: Decimal
    days_of_stock: float

class ExcessStockAlert(BaseModel):
    """Excess stock alert."""
    item_id: str
    item_name: str
    item_sku: str
    location_id: str
    location_name: str
    current_quantity: Decimal
    max_level: Decimal
    excess_quantity: Decimal
    excess_value: Decimal
