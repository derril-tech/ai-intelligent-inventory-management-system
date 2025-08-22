# API Specification - StockSense AI

This document provides comprehensive API documentation for the StockSense AI backend, including endpoints, request/response schemas, authentication, and error handling.

## 🔐 Authentication

### JWT Token Authentication

All API endpoints require authentication via JWT tokens, except for public endpoints like health checks.

**Headers Required:**
```
Authorization: Bearer <jwt_token>
Content-Type: application/json
```

**Token Structure:**
```json
{
  "sub": "user_id",
  "email": "user@example.com",
  "org_id": "organization_id",
  "permissions": ["read:inventory", "write:forecasts"],
  "exp": 1640995200,
  "iat": 1640908800
}
```

## 📊 Base URL

- **Development**: `http://localhost:8000`
- **Staging**: `https://api-staging.stocksense.ai`
- **Production**: `https://api.stocksense.ai`

## 🔗 API Endpoints

### Health & Status

#### GET `/health`
**Description**: Health check endpoint for monitoring

**Response:**
```json
{
  "status": "healthy",
  "service": "StockSense AI API",
  "version": "1.0.0",
  "environment": "production",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

### Authentication

#### POST `/api/v1/auth/login`
**Description**: User login endpoint

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "secure_password"
}
```

**Response:**
```json
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "token_type": "bearer",
  "expires_in": 3600,
  "user": {
    "id": "user_123",
    "email": "user@example.com",
    "name": "John Doe",
    "organization_id": "org_456",
    "permissions": ["read:inventory", "write:forecasts"]
  }
}
```

#### POST `/api/v1/auth/refresh`
**Description**: Refresh access token

**Headers:**
```
Authorization: Bearer <refresh_token>
```

**Response:**
```json
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "token_type": "bearer",
  "expires_in": 3600
}
```

### Organizations & Users

#### GET `/api/v1/organizations`
**Description**: Get user's organization details

**Response:**
```json
{
  "id": "org_456",
  "name": "Acme Corporation",
  "subscription_tier": "enterprise",
  "settings": {
    "timezone": "America/New_York",
    "currency": "USD",
    "units": "imperial"
  },
  "created_at": "2024-01-01T00:00:00Z"
}
```

#### GET `/api/v1/users/me`
**Description**: Get current user profile

**Response:**
```json
{
  "id": "user_123",
  "email": "user@example.com",
  "name": "John Doe",
  "role": "admin",
  "permissions": ["read:inventory", "write:forecasts", "admin:users"],
  "organization_id": "org_456",
  "last_login": "2024-01-01T00:00:00Z"
}
```

### Items & Inventory

#### GET `/api/v1/items`
**Description**: List inventory items with pagination and filtering

**Query Parameters:**
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 50, max: 100)
- `search`: Search term for SKU, name, or description
- `category`: Filter by category
- `location`: Filter by location
- `status`: Filter by status (active, inactive, discontinued)

**Response:**
```json
{
  "items": [
    {
      "id": "item_123",
      "sku": "SKU001",
      "name": "Premium Widget",
      "description": "High-quality widget for industrial use",
      "category": "electronics",
      "unit": "piece",
      "case_pack": 12,
      "shelf_life_days": 365,
      "supplier_id": "supplier_456",
      "created_at": "2024-01-01T00:00:00Z",
      "updated_at": "2024-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 50,
    "total": 1250,
    "pages": 25
  }
}
```

#### GET `/api/v1/items/{item_id}`
**Description**: Get detailed item information

**Response:**
```json
{
  "id": "item_123",
  "sku": "SKU001",
  "name": "Premium Widget",
  "description": "High-quality widget for industrial use",
  "category": "electronics",
  "unit": "piece",
  "case_pack": 12,
  "shelf_life_days": 365,
  "supplier_id": "supplier_456",
  "specifications": {
    "weight": "2.5kg",
    "dimensions": "10x5x3cm",
    "material": "aluminum"
  },
  "pricing": {
    "cost": 15.50,
    "retail_price": 25.00,
    "currency": "USD"
  },
  "created_at": "2024-01-01T00:00:00Z",
  "updated_at": "2024-01-01T00:00:00Z"
}
```

#### POST `/api/v1/items`
**Description**: Create new inventory item

**Request Body:**
```json
{
  "sku": "SKU002",
  "name": "New Product",
  "description": "Product description",
  "category": "electronics",
  "unit": "piece",
  "case_pack": 24,
  "shelf_life_days": 180,
  "supplier_id": "supplier_456",
  "specifications": {
    "weight": "1.5kg",
    "dimensions": "8x4x2cm"
  },
  "pricing": {
    "cost": 12.00,
    "retail_price": 20.00
  }
}
```

### Inventory Balances

#### GET `/api/v1/inventory/balances`
**Description**: Get current inventory balances across locations

**Query Parameters:**
- `item_id`: Filter by specific item
- `location_id`: Filter by specific location
- `low_stock`: Filter items with low stock (boolean)

**Response:**
```json
{
  "balances": [
    {
      "id": "balance_123",
      "item_id": "item_123",
      "location_id": "location_456",
      "on_hand": 150,
      "allocated": 25,
      "in_transit": 50,
      "safety_stock": 30,
      "reorder_point": 40,
      "max_stock": 200,
      "last_updated": "2024-01-01T00:00:00Z"
    }
  ]
}
```

#### GET `/api/v1/inventory/balances/{item_id}/history`
**Description**: Get inventory balance history for an item

**Query Parameters:**
- `start_date`: Start date for history (ISO format)
- `end_date`: End date for history (ISO format)
- `location_id`: Filter by location

**Response:**
```json
{
  "history": [
    {
      "date": "2024-01-01",
      "on_hand": 150,
      "allocated": 25,
      "in_transit": 50,
      "transactions": 5
    }
  ]
}
```

### Forecasting

#### POST `/api/v1/forecast/run`
**Description**: Run demand forecasting for items

**Request Body:**
```json
{
  "item_ids": ["item_123", "item_456"],
  "location_ids": ["location_789"],
  "horizon_days": 90,
  "forecast_method": "ensemble",
  "include_seasonality": true,
  "include_promotions": true
}
```

**Response:**
```json
{
  "job_id": "forecast_job_123",
  "status": "running",
  "estimated_completion": "2024-01-01T01:00:00Z",
  "progress": 0.25
}
```

#### GET `/api/v1/forecast/{item_id}/{location_id}`
**Description**: Get forecast results for specific item-location

**Query Parameters:**
- `horizon_days`: Forecast horizon (default: 90)
- `version`: Forecast version (default: latest)

**Response:**
```json
{
  "item_id": "item_123",
  "location_id": "location_456",
  "forecast": [
    {
      "date": "2024-01-01",
      "demand": 45.2,
      "lower_bound": 38.1,
      "upper_bound": 52.3,
      "confidence": 0.95
    }
  ],
  "metrics": {
    "mape": 0.12,
    "wape": 0.15,
    "rmse": 8.5
  },
  "model_info": {
    "method": "ensemble",
    "features": ["historical_demand", "seasonality", "promotions"],
    "last_trained": "2024-01-01T00:00:00Z"
  }
}
```

### Policy Optimization

#### POST `/api/v1/policy/optimize`
**Description**: Optimize inventory policies (s,S, Min-Max, EOQ)

**Request Body:**
```json
{
  "item_ids": ["item_123"],
  "location_ids": ["location_456"],
  "service_level": 0.95,
  "policy_type": "sS",
  "costs": {
    "holding_cost_rate": 0.25,
    "ordering_cost": 50.00,
    "stockout_cost": 100.00
  }
}
```

**Response:**
```json
{
  "policies": [
    {
      "item_id": "item_123",
      "location_id": "location_456",
      "policy_type": "sS",
      "s": 40,
      "S": 200,
      "service_level": 0.95,
      "expected_annual_cost": 1250.00,
      "expected_annual_orders": 12,
      "safety_stock": 30
    }
  ]
}
```

### Replenishment Planning

#### POST `/api/v1/plan/replenishment`
**Description**: Generate multi-echelon replenishment plan

**Request Body:**
```json
{
  "plan_date": "2024-01-01",
  "horizon_days": 30,
  "include_transfers": true,
  "include_purchase_orders": true,
  "constraints": {
    "max_budget": 50000.00,
    "supplier_capacity": true,
    "transportation_capacity": true
  }
}
```

**Response:**
```json
{
  "plan_id": "plan_123",
  "summary": {
    "total_orders": 45,
    "total_transfers": 12,
    "total_cost": 45000.00,
    "expected_fill_rate": 0.97
  },
  "orders": [
    {
      "type": "purchase_order",
      "supplier_id": "supplier_456",
      "items": [
        {
          "item_id": "item_123",
          "quantity": 500,
          "unit_cost": 15.50,
          "eta": "2024-01-15"
        }
      ]
    }
  ],
  "transfers": [
    {
      "from_location": "location_456",
      "to_location": "location_789",
      "items": [
        {
          "item_id": "item_123",
          "quantity": 100,
          "eta": "2024-01-10"
        }
      ]
    }
  ]
}
```

### Orders & Execution

#### GET `/api/v1/orders`
**Description**: List orders with filtering and pagination

**Query Parameters:**
- `type`: Order type (PO, TO, SO)
- `status`: Order status (draft, approved, shipped, received)
- `supplier_id`: Filter by supplier
- `date_from`: Start date
- `date_to`: End date

**Response:**
```json
{
  "orders": [
    {
      "id": "order_123",
      "type": "purchase_order",
      "status": "approved",
      "supplier_id": "supplier_456",
      "total_amount": 7750.00,
      "created_at": "2024-01-01T00:00:00Z",
      "eta": "2024-01-15T00:00:00Z",
      "items": [
        {
          "item_id": "item_123",
          "quantity": 500,
          "unit_cost": 15.50,
          "total_cost": 7750.00
        }
      ]
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 50,
    "total": 125,
    "pages": 3
  }
}
```

#### POST `/api/v1/orders/{order_id}/approve`
**Description**: Approve an order for execution

**Response:**
```json
{
  "order_id": "order_123",
  "status": "approved",
  "approved_at": "2024-01-01T00:00:00Z",
  "approved_by": "user_123"
}
```

### Analytics & KPIs

#### GET `/api/v1/analytics/dashboard`
**Description**: Get dashboard KPIs and metrics

**Query Parameters:**
- `date_from`: Start date for metrics
- `date_to`: End date for metrics
- `location_ids`: Filter by locations

**Response:**
```json
{
  "kpis": {
    "fill_rate": 0.97,
    "inventory_turns": 8.5,
    "days_of_supply": 43,
    "otif_rate": 0.95,
    "stockout_rate": 0.03,
    "carrying_cost": 125000.00
  },
  "trends": {
    "fill_rate_trend": [0.95, 0.96, 0.97],
    "inventory_turns_trend": [8.2, 8.3, 8.5],
    "stockout_rate_trend": [0.05, 0.04, 0.03]
  },
  "alerts": [
    {
      "type": "low_stock",
      "severity": "high",
      "message": "Item SKU001 is below safety stock",
      "item_id": "item_123",
      "location_id": "location_456"
    }
  ]
}
```

#### GET `/api/v1/analytics/abc-xyz`
**Description**: Get ABC/XYZ classification analysis

**Response:**
```json
{
  "classifications": [
    {
      "item_id": "item_123",
      "sku": "SKU001",
      "abc_class": "A",
      "xyz_class": "X",
      "annual_demand": 5000,
      "annual_value": 77500.00,
      "demand_variability": 0.15
    }
  ],
  "summary": {
    "a_items": 150,
    "b_items": 300,
    "c_items": 800,
    "x_items": 200,
    "y_items": 400,
    "z_items": 650
  }
}
```

### WebSocket Endpoints

#### `/ws/jobs/{job_id}`
**Description**: Real-time job status updates

**Message Format:**
```json
{
  "type": "job_update",
  "job_id": "forecast_job_123",
  "status": "running",
  "progress": 0.75,
  "message": "Processing item forecasts..."
}
```

#### `/ws/plan/{plan_id}`
**Description**: Real-time plan updates and notifications

**Message Format:**
```json
{
  "type": "plan_update",
  "plan_id": "plan_123",
  "status": "completed",
  "summary": {
    "total_orders": 45,
    "total_cost": 45000.00
  }
}
```

## 📋 Data Models

### Item Model
```json
{
  "id": "string",
  "sku": "string",
  "name": "string",
  "description": "string",
  "category": "string",
  "unit": "string",
  "case_pack": "integer",
  "shelf_life_days": "integer",
  "supplier_id": "string",
  "specifications": "object",
  "pricing": "object",
  "created_at": "datetime",
  "updated_at": "datetime"
}
```

### Inventory Balance Model
```json
{
  "id": "string",
  "item_id": "string",
  "location_id": "string",
  "on_hand": "integer",
  "allocated": "integer",
  "in_transit": "integer",
  "safety_stock": "integer",
  "reorder_point": "integer",
  "max_stock": "integer",
  "last_updated": "datetime"
}
```

### Forecast Model
```json
{
  "id": "string",
  "item_id": "string",
  "location_id": "string",
  "horizon_days": "integer",
  "version": "string",
  "forecast_data": "array",
  "metrics": "object",
  "model_info": "object",
  "created_at": "datetime"
}
```

## ⚠️ Error Handling

### Standard Error Response Format
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format"
      }
    ],
    "timestamp": "2024-01-01T00:00:00Z",
    "request_id": "req_123"
  }
}
```

### Common Error Codes
- `AUTHENTICATION_ERROR`: Invalid or missing authentication
- `AUTHORIZATION_ERROR`: Insufficient permissions
- `VALIDATION_ERROR`: Invalid request data
- `NOT_FOUND`: Resource not found
- `CONFLICT`: Resource conflict
- `RATE_LIMIT_EXCEEDED`: Too many requests
- `INTERNAL_ERROR`: Server error

### Rate Limiting
- **Standard**: 1000 requests per hour
- **Premium**: 5000 requests per hour
- **Enterprise**: 20000 requests per hour

## 🔒 Security

### CORS Configuration
```json
{
  "allowed_origins": [
    "https://stocksense.ai",
    "https://app.stocksense.ai"
  ],
  "allowed_methods": ["GET", "POST", "PUT", "DELETE", "PATCH"],
  "allowed_headers": ["*"],
  "allow_credentials": true
}
```

### Data Validation
- All inputs validated with Pydantic schemas
- SQL injection prevention with parameterized queries
- XSS protection with input sanitization
- CSRF protection with token validation

This API specification provides a comprehensive foundation for building the StockSense AI frontend and integrating with external systems.
