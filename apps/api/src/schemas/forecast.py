"""
Pydantic schemas for forecasting.

Defines request/response models for demand forecasting,
model training, and accuracy analysis.
"""

from datetime import datetime
from typing import Optional, List, Dict, Any
from pydantic import BaseModel, Field
from decimal import Decimal

class ForecastBase(BaseModel):
    """Base forecast model."""
    item_id: str
    location_id: str
    forecast_period: str = Field(..., regex="^(daily|weekly|monthly)$")
    forecast_horizon: int = Field(..., ge=1, le=365)
    model_type: str = Field(..., regex="^(random_forest|arima|prophet|ets|neural_network)$")

class ForecastCreate(ForecastBase):
    """Forecast creation model."""
    pass

class ForecastUpdate(BaseModel):
    """Forecast update model."""
    forecast_period: Optional[str] = Field(None, regex="^(daily|weekly|monthly)$")
    forecast_horizon: Optional[int] = Field(None, ge=1, le=365)
    model_type: Optional[str] = Field(None, regex="^(random_forest|arima|prophet|ets|neural_network)$")
    status: Optional[str] = Field(None, regex="^(pending|processing|completed|failed)$")

class ForecastResponse(ForecastBase):
    """Forecast response model."""
    id: str
    forecast_values: List[float]
    confidence_intervals: Dict[str, Any]
    accuracy_metrics: Dict[str, float]
    status: str
    created_by: str
    created_at: datetime

class ForecastModel(BaseModel):
    """Forecast model information."""
    model_id: str
    model_type: str
    training_date: datetime
    parameters: Dict[str, Any]
    performance_metrics: Dict[str, float]
    is_active: bool = True

class ForecastAccuracy(BaseModel):
    """Forecast accuracy metrics."""
    overall_mape: float
    overall_mae: float
    overall_rmse: float
    item_level_accuracy: List[Dict[str, Any]]
    model_performance: List[Dict[str, Any]]

class ForecastRequest(BaseModel):
    """Forecast request model."""
    item_id: str
    location_id: str
    forecast_horizon: int = Field(..., ge=1, le=365)
    model_type: str = Field(default="random_forest", regex="^(random_forest|arima|prophet|ets|neural_network)$")
    base_demand: Optional[float] = None
    parameters: Optional[Dict[str, Any]] = None
