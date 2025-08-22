"""
Inventory models for items, locations, inventory levels, and movements.

Defines the core inventory entities including items, locations, inventory levels,
and inventory movements for tracking stock changes.
"""

from datetime import datetime
from typing import Optional
from sqlalchemy import Column, String, Integer, Float, Boolean, DateTime, ForeignKey, Text, Numeric
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID, JSONB
from .base import BaseModel

class Item(BaseModel):
    """Item model representing products or SKUs in the inventory system."""
    
    __tablename__ = 'items'
    
    # Basic info
    sku = Column(String(100), unique=True, nullable=False, index=True)
    name = Column(String(255), nullable=False, index=True)
    description = Column(Text, nullable=True)
    
    # Classification
    category = Column(String(100), nullable=False, index=True)
    subcategory = Column(String(100), nullable=True, index=True)
    brand = Column(String(100), nullable=True, index=True)
    
    # Physical properties
    unit_of_measure = Column(String(20), nullable=False, default='EA')
    dimensions = Column(JSONB, nullable=True)  # {length, width, height, weight}
    
    # Financial
    cost = Column(Numeric(10, 2), nullable=False, default=0)
    price = Column(Numeric(10, 2), nullable=False, default=0)
    
    # Attributes
    attributes = Column(JSONB, nullable=True)  # Flexible attributes
    tags = Column(JSONB, nullable=True)  # Array of tags
    
    # Status
    is_active = Column(Boolean, default=True, nullable=False)
    
    # Relationships
    inventory_levels = relationship("Inventory", back_populates="item")
    movements = relationship("InventoryMovement", back_populates="item")
    
    def __repr__(self) -> str:
        return f"<Item(sku='{self.sku}', name='{self.name}')>"

class Location(BaseModel):
    """Location model representing warehouses, stores, distribution centers, etc."""
    
    __tablename__ = 'locations'
    
    # Basic info
    code = Column(String(50), unique=True, nullable=False, index=True)
    name = Column(String(255), nullable=False, index=True)
    type = Column(String(50), nullable=False, index=True)  # warehouse, store, dc, supplier, customer
    
    # Hierarchy
    parent_id = Column(UUID(as_uuid=True), ForeignKey('locations.id'), nullable=True)
    
    # Address
    address_street = Column(String(255), nullable=True)
    address_city = Column(String(100), nullable=True)
    address_state = Column(String(100), nullable=True)
    address_zip_code = Column(String(20), nullable=True)
    address_country = Column(String(100), nullable=True)
    
    # Coordinates
    latitude = Column(Float, nullable=True)
    longitude = Column(Float, nullable=True)
    
    # Contact info
    contact_person = Column(String(100), nullable=True)
    contact_email = Column(String(255), nullable=True)
    contact_phone = Column(String(20), nullable=True)
    
    # Settings
    settings = Column(JSONB, nullable=True)  # Location-specific settings
    
    # Status
    is_active = Column(Boolean, default=True, nullable=False)
    
    # Relationships
    parent = relationship("Location", remote_side=[id])
    children = relationship("Location")
    inventory_levels = relationship("Inventory", back_populates="location")
    movements = relationship("InventoryMovement", back_populates="location")
    
    def __repr__(self) -> str:
        return f"<Location(code='{self.code}', name='{self.name}')>"

class Inventory(BaseModel):
    """Inventory model representing stock levels for item-location combinations."""
    
    __tablename__ = 'inventory'
    
    # References
    item_id = Column(UUID(as_uuid=True), ForeignKey('items.id'), nullable=False)
    location_id = Column(UUID(as_uuid=True), ForeignKey('locations.id'), nullable=False)
    
    # Quantities
    quantity = Column(Integer, nullable=False, default=0)
    reserved_quantity = Column(Integer, nullable=False, default=0)
    available_quantity = Column(Integer, nullable=False, default=0)
    
    # Policy parameters
    safety_stock = Column(Integer, nullable=False, default=0)
    reorder_point = Column(Integer, nullable=False, default=0)
    max_stock = Column(Integer, nullable=True)
    
    # Additional info
    last_updated = Column(DateTime, default=datetime.utcnow, nullable=False)
    notes = Column(Text, nullable=True)
    
    # Relationships
    item = relationship("Item", back_populates="inventory_levels")
    location = relationship("Location", back_populates="inventory_levels")
    
    def __repr__(self) -> str:
        return f"<Inventory(item_id={self.item_id}, location_id={self.location_id}, qty={self.quantity})>"

class InventoryMovement(BaseModel):
    """Inventory movement model for tracking stock changes."""
    
    __tablename__ = 'inventory_movements'
    
    # References
    item_id = Column(UUID(as_uuid=True), ForeignKey('items.id'), nullable=False)
    location_id = Column(UUID(as_uuid=True), ForeignKey('locations.id'), nullable=False)
    
    # Movement details
    type = Column(String(50), nullable=False, index=True)  # receipt, shipment, transfer_in, transfer_out, adjustment, cycle_count
    quantity = Column(Integer, nullable=False)
    reference = Column(String(100), nullable=False, index=True)  # PO number, SO number, etc.
    reference_type = Column(String(50), nullable=False)  # po, so, to, adjustment, cycle_count
    
    # Additional info
    notes = Column(Text, nullable=True)
    unit_cost = Column(Numeric(10, 2), nullable=True)
    total_cost = Column(Numeric(10, 2), nullable=True)
    
    # Relationships
    item = relationship("Item", back_populates="movements")
    location = relationship("Location", back_populates="movements")
    
    def __repr__(self) -> str:
        return f"<InventoryMovement(type='{self.type}', qty={self.quantity}, ref='{self.reference}')>"
