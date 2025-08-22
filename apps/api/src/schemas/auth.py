"""
Pydantic schemas for authentication and user management.

Defines request/response models for login, registration, and user data.
"""

from datetime import datetime
from typing import Optional, List
from pydantic import BaseModel, EmailStr, Field

class TokenData(BaseModel):
    """Token data model."""
    user_id: Optional[str] = None

class Token(BaseModel):
    """JWT token response model."""
    access_token: str
    token_type: str = "bearer"
    expires_in: int
    refresh_token: Optional[str] = None

class UserBase(BaseModel):
    """Base user model."""
    email: EmailStr
    first_name: str = Field(..., min_length=1, max_length=100)
    last_name: str = Field(..., min_length=1, max_length=100)
    role: str = Field(default="viewer", regex="^(admin|manager|analyst|operator|viewer)$")

class UserCreate(UserBase):
    """User creation model."""
    password: str = Field(..., min_length=8, max_length=128)
    organization_id: str

class UserUpdate(BaseModel):
    """User update model."""
    first_name: Optional[str] = Field(None, min_length=1, max_length=100)
    last_name: Optional[str] = Field(None, min_length=1, max_length=100)
    role: Optional[str] = Field(None, regex="^(admin|manager|analyst|operator|viewer)$")
    is_active: Optional[bool] = None
    preferences: Optional[dict] = None
    timezone: Optional[str] = None
    language: Optional[str] = Field(None, regex="^[a-z]{2}$")

class UserResponse(UserBase):
    """User response model."""
    id: str
    organization_id: str
    is_active: bool
    is_verified: bool
    last_login_at: Optional[datetime] = None
    preferences: Optional[dict] = None
    timezone: Optional[str] = None
    language: str = "en"
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True

class LoginRequest(BaseModel):
    """Login request model."""
    email: EmailStr
    password: str

class LoginResponse(BaseModel):
    """Login response model."""
    access_token: str
    token_type: str = "bearer"
    expires_in: int
    refresh_token: str
    user: UserResponse

class RefreshTokenRequest(BaseModel):
    """Refresh token request model."""
    refresh_token: str

class RefreshTokenResponse(BaseModel):
    """Refresh token response model."""
    access_token: str
    token_type: str = "bearer"
    expires_in: int

class ChangePasswordRequest(BaseModel):
    """Change password request model."""
    current_password: str
    new_password: str = Field(..., min_length=8, max_length=128)

class ResetPasswordRequest(BaseModel):
    """Reset password request model."""
    email: EmailStr

class ResetPasswordConfirm(BaseModel):
    """Reset password confirmation model."""
    token: str
    new_password: str = Field(..., min_length=8, max_length=128)

class OrganizationBase(BaseModel):
    """Base organization model."""
    name: str = Field(..., min_length=1, max_length=255)
    industry: Optional[str] = Field(None, max_length=100)
    timezone: str = Field(default="UTC", max_length=50)
    currency: str = Field(default="USD", max_length=3)

class OrganizationCreate(OrganizationBase):
    """Organization creation model."""
    email: Optional[EmailStr] = None
    phone: Optional[str] = Field(None, max_length=20)
    website: Optional[str] = Field(None, max_length=255)
    address_street: Optional[str] = Field(None, max_length=255)
    address_city: Optional[str] = Field(None, max_length=100)
    address_state: Optional[str] = Field(None, max_length=100)
    address_zip_code: Optional[str] = Field(None, max_length=20)
    address_country: Optional[str] = Field(None, max_length=100)

class OrganizationUpdate(BaseModel):
    """Organization update model."""
    name: Optional[str] = Field(None, min_length=1, max_length=255)
    industry: Optional[str] = Field(None, max_length=100)
    timezone: Optional[str] = Field(None, max_length=50)
    currency: Optional[str] = Field(None, max_length=3)
    email: Optional[EmailStr] = None
    phone: Optional[str] = Field(None, max_length=20)
    website: Optional[str] = Field(None, max_length=255)
    address_street: Optional[str] = Field(None, max_length=255)
    address_city: Optional[str] = Field(None, max_length=100)
    address_state: Optional[str] = Field(None, max_length=100)
    address_zip_code: Optional[str] = Field(None, max_length=20)
    address_country: Optional[str] = Field(None, max_length=100)
    settings: Optional[dict] = None

class OrganizationResponse(OrganizationBase):
    """Organization response model."""
    id: str
    email: Optional[str] = None
    phone: Optional[str] = None
    website: Optional[str] = None
    address_street: Optional[str] = None
    address_city: Optional[str] = None
    address_state: Optional[str] = None
    address_zip_code: Optional[str] = None
    address_country: Optional[str] = None
    settings: Optional[dict] = None
    is_active: bool
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
