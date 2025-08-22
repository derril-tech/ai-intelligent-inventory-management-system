"""
Core configuration and utilities for StockSense AI.

This package contains database configuration, authentication,
and other core functionality.
"""

from .database import get_db, init_db, close_db, check_db_health
from .auth import (
    get_current_user,
    get_current_active_user,
    require_permission,
    require_role,
    require_admin,
    require_manager,
    require_analyst,
    require_read_inventory,
    require_write_inventory,
    require_read_forecasts,
    require_write_forecasts,
    require_read_policies,
    require_write_policies,
    require_read_orders,
    require_write_orders,
    require_read_analytics,
    require_write_analytics,
)

__all__ = [
    # Database
    "get_db",
    "init_db",
    "close_db",
    "check_db_health",
    
    # Authentication
    "get_current_user",
    "get_current_active_user",
    "require_permission",
    "require_role",
    "require_admin",
    "require_manager",
    "require_analyst",
    "require_read_inventory",
    "require_write_inventory",
    "require_read_forecasts",
    "require_write_forecasts",
    "require_read_policies",
    "require_write_policies",
    "require_read_orders",
    "require_write_orders",
    "require_read_analytics",
    "require_write_analytics",
]
