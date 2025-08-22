"""
API routes for StockSense AI.

This package contains all API endpoints organized by functionality.
"""

from .auth import router as auth_router
from .inventory import router as inventory_router

# Import other routers as they are created
# from .forecasts import router as forecasts_router
# from .policies import router as policies_router
# from .orders import router as orders_router
# from .analytics import router as analytics_router

__all__ = [
    "auth_router",
    "inventory_router",
    # "forecasts_router",
    # "policies_router",
    # "orders_router",
    # "analytics_router",
]
