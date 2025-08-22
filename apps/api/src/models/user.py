"""
User and Organization models for authentication and user management.

Defines the core user entities including organizations, users, roles,
and authentication-related fields.
"""

from datetime import datetime
from typing import Optional
from sqlalchemy import Column, String, Boolean, DateTime, ForeignKey, Text
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID
from .base import BaseModel

class Organization(BaseModel):
    """Organization model representing a company or business entity."""
    
    __tablename__ = 'organizations'
    
    # Basic info
    name = Column(String(255), nullable=False, index=True)
    industry = Column(String(100), nullable=True)
    timezone = Column(String(50), default='UTC', nullable=False)
    currency = Column(String(3), default='USD', nullable=False)
    
    # Contact info
    email = Column(String(255), nullable=True)
    phone = Column(String(20), nullable=True)
    website = Column(String(255), nullable=True)
    
    # Address
    address_street = Column(String(255), nullable=True)
    address_city = Column(String(100), nullable=True)
    address_state = Column(String(100), nullable=True)
    address_zip_code = Column(String(20), nullable=True)
    address_country = Column(String(100), nullable=True)
    
    # Settings
    settings = Column(Text, nullable=True)  # JSON string for org-specific settings
    
    # Relationships
    users = relationship("User", back_populates="organization")
    
    def __repr__(self) -> str:
        return f"<Organization(name='{self.name}')>"

class User(BaseModel):
    """User model for authentication and user management."""
    
    __tablename__ = 'users'
    
    # Basic info
    email = Column(String(255), unique=True, nullable=False, index=True)
    first_name = Column(String(100), nullable=False)
    last_name = Column(String(100), nullable=False)
    
    # Authentication
    hashed_password = Column(String(255), nullable=False)
    salt = Column(String(255), nullable=False)
    
    # Role and permissions
    role = Column(String(50), default='viewer', nullable=False)  # admin, manager, analyst, operator, viewer
    permissions = Column(Text, nullable=True)  # JSON string for granular permissions
    
    # Organization
    organization_id = Column(UUID(as_uuid=True), ForeignKey('organizations.id'), nullable=False)
    
    # Status
    is_active = Column(Boolean, default=True, nullable=False)
    is_verified = Column(Boolean, default=False, nullable=False)
    last_login_at = Column(DateTime, nullable=True)
    
    # Preferences
    preferences = Column(Text, nullable=True)  # JSON string for user preferences
    timezone = Column(String(50), nullable=True)
    language = Column(String(10), default='en', nullable=False)
    
    # Relationships
    organization = relationship("Organization", back_populates="users")
    
    @property
    def full_name(self) -> str:
        """Get user's full name."""
        return f"{self.first_name} {self.last_name}"
    
    @property
    def is_admin(self) -> bool:
        """Check if user has admin role."""
        return self.role == 'admin'
    
    @property
    def is_manager(self) -> bool:
        """Check if user has manager role."""
        return self.role in ['admin', 'manager']
    
    def has_permission(self, permission: str) -> bool:
        """Check if user has specific permission."""
        if self.is_admin:
            return True
        # TODO: Implement granular permission checking
        return True
    
    def __repr__(self) -> str:
        return f"<User(email='{self.email}', role='{self.role}')>"
