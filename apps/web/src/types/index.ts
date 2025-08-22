// Core domain types for the inventory management system

// ============================================================================
// AUTHENTICATION & USER MANAGEMENT
// ============================================================================

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  role: UserRole
  organizationId: string
  isActive: boolean
  lastLoginAt?: string
  createdAt: string
  updatedAt: string
}

export type UserRole = 'admin' | 'manager' | 'analyst' | 'operator' | 'viewer'

export interface Organization {
  id: string
  name: string
  industry: string
  timezone: string
  currency: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface AuthTokens {
  accessToken: string
  refreshToken: string
  expiresIn: number
}

// ============================================================================
// INVENTORY & ITEMS
// ============================================================================

export interface Item {
  id: string
  sku: string
  name: string
  description?: string
  category: string
  subcategory?: string
  brand?: string
  unitOfMeasure: string
  dimensions?: {
    length: number
    width: number
    height: number
    weight: number
  }
  cost: number
  price: number
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface Location {
  id: string
  code: string
  name: string
  type: LocationType
  parentId?: string
  address?: {
    street: string
    city: string
    state: string
    zipCode: string
    country: string
  }
  coordinates?: {
    latitude: number
    longitude: number
  }
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export type LocationType = 'warehouse' | 'store' | 'distribution_center' | 'supplier' | 'customer'

export interface Inventory {
  id: string
  itemId: string
  locationId: string
  quantity: number
  reservedQuantity: number
  availableQuantity: number
  safetyStock: number
  reorderPoint: number
  maxStock: number
  lastUpdated: string
}

export interface InventoryMovement {
  id: string
  itemId: string
  locationId: string
  type: MovementType
  quantity: number
  reference: string
  referenceType: ReferenceType
  notes?: string
  createdAt: string
}

export type MovementType = 'receipt' | 'shipment' | 'transfer_in' | 'transfer_out' | 'adjustment' | 'cycle_count'
export type ReferenceType = 'po' | 'so' | 'to' | 'adjustment' | 'cycle_count'

// ============================================================================
// FORECASTING
// ============================================================================

export interface Forecast {
  id: string
  itemId: string
  locationId: string
  modelType: ForecastModelType
  horizon: number
  frequency: ForecastFrequency
  startDate: string
  endDate: string
  status: ForecastStatus
  accuracy?: {
    mape: number
    wape: number
    mae: number
    rmse: number
  }
  createdAt: string
  updatedAt: string
}

export type ForecastModelType = 'ets' | 'arima' | 'prophet' | 'xgboost' | 'ensemble' | 'croston' | 'tsb'
export type ForecastFrequency = 'daily' | 'weekly' | 'monthly' | 'quarterly'
export type ForecastStatus = 'pending' | 'running' | 'completed' | 'failed'

export interface ForecastDataPoint {
  date: string
  forecast: number
  lowerBound: number
  upperBound: number
  confidence: number
}

export interface ForecastResult {
  forecastId: string
  dataPoints: ForecastDataPoint[]
  metadata: {
    modelParameters: Record<string, any>
    featureImportance?: Record<string, number>
    seasonality?: {
      period: number
      strength: number
    }
  }
}

// ============================================================================
// POLICY OPTIMIZATION
// ============================================================================

export interface InventoryPolicy {
  id: string
  itemId: string
  locationId: string
  policyType: PolicyType
  parameters: PolicyParameters
  serviceLevel: number
  leadTime: number
  leadTimeVariability: number
  carryingCost: number
  stockoutCost: number
  orderingCost: number
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export type PolicyType = 'ss' | 'min_max' | 'eoq' | 'base_stock' | 'mrp'

export interface PolicyParameters {
  // For (s,S) policy
  s?: number // reorder point
  S?: number // order-up-to level
  
  // For Min-Max policy
  min?: number // minimum stock level
  max?: number // maximum stock level
  
  // For EOQ policy
  eoq?: number // economic order quantity
  
  // For Base-Stock policy
  baseStock?: number // base stock level
}

export interface PolicyOptimizationResult {
  policyId: string
  recommendedParameters: PolicyParameters
  expectedCosts: {
    total: number
    carrying: number
    stockout: number
    ordering: number
  }
  expectedMetrics: {
    fillRate: number
    stockoutRate: number
    inventoryTurns: number
    daysOfSupply: number
  }
  confidence: number
}

// ============================================================================
// REPLENISHMENT & ORDERS
// ============================================================================

export interface PurchaseOrder {
  id: string
  poNumber: string
  supplierId: string
  status: OrderStatus
  items: PurchaseOrderItem[]
  totalAmount: number
  currency: string
  expectedDeliveryDate: string
  actualDeliveryDate?: string
  notes?: string
  createdBy: string
  approvedBy?: string
  createdAt: string
  updatedAt: string
}

export interface PurchaseOrderItem {
  id: string
  poId: string
  itemId: string
  quantity: number
  unitCost: number
  totalCost: number
  receivedQuantity: number
  status: OrderItemStatus
}

export interface TransferOrder {
  id: string
  toNumber: string
  fromLocationId: string
  toLocationId: string
  status: OrderStatus
  items: TransferOrderItem[]
  expectedShipDate: string
  actualShipDate?: string
  expectedDeliveryDate: string
  actualDeliveryDate?: string
  notes?: string
  createdBy: string
  createdAt: string
  updatedAt: string
}

export interface TransferOrderItem {
  id: string
  toId: string
  itemId: string
  quantity: number
  shippedQuantity: number
  receivedQuantity: number
  status: OrderItemStatus
}

export type OrderStatus = 'draft' | 'pending' | 'approved' | 'sent' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled'
export type OrderItemStatus = 'pending' | 'shipped' | 'received' | 'cancelled'

// ============================================================================
// SUPPLIERS & VENDORS
// ============================================================================

export interface Supplier {
  id: string
  code: string
  name: string
  contactPerson?: string
  email?: string
  phone?: string
  address?: {
    street: string
    city: string
    state: string
    zipCode: string
    country: string
  }
  paymentTerms: number
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface SupplierItem {
  id: string
  supplierId: string
  itemId: string
  supplierSku: string
  leadTime: number
  leadTimeVariability: number
  minOrderQuantity: number
  orderMultiple: number
  unitCost: number
  isPreferred: boolean
  isActive: boolean
}

// ============================================================================
// ANALYTICS & KPIs
// ============================================================================

export interface KPIMetrics {
  id: string
  locationId?: string
  itemId?: string
  category?: string
  period: string
  metrics: {
    fillRate: number
    stockoutRate: number
    inventoryTurns: number
    daysOfSupply: number
    otif: number
    forecastAccuracy: number
    carryingCost: number
    stockoutCost: number
    totalCost: number
  }
  createdAt: string
}

export interface ABCAnalysis {
  id: string
  locationId?: string
  category?: string
  period: string
  items: ABCItem[]
  createdAt: string
}

export interface ABCItem {
  itemId: string
  sku: string
  name: string
  category: 'A' | 'B' | 'C'
  annualUsage: number
  annualValue: number
  percentageOfValue: number
  cumulativePercentage: number
}

// ============================================================================
// EXCEPTIONS & ALERTS
// ============================================================================

export interface Exception {
  id: string
  type: ExceptionType
  severity: ExceptionSeverity
  itemId?: string
  locationId?: string
  title: string
  description: string
  currentValue?: number
  thresholdValue?: number
  status: ExceptionStatus
  assignedTo?: string
  resolvedAt?: string
  createdAt: string
  updatedAt: string
}

export type ExceptionType = 'low_stock' | 'excess_stock' | 'stockout_risk' | 'quality_issue' | 'shrinkage' | 'forecast_drift' | 'policy_violation'
export type ExceptionSeverity = 'low' | 'medium' | 'high' | 'critical'
export type ExceptionStatus = 'open' | 'acknowledged' | 'in_progress' | 'resolved' | 'closed'

// ============================================================================
// API RESPONSES
// ============================================================================

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: {
    code: string
    message: string
    details?: any
  }
  meta?: {
    page?: number
    limit?: number
    total?: number
    totalPages?: number
  }
}

export interface PaginatedResponse<T> {
  items: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// ============================================================================
// FORM SCHEMAS
// ============================================================================

export interface ForecastFormData {
  itemIds: string[]
  locationIds: string[]
  modelType: ForecastModelType
  horizon: number
  frequency: ForecastFrequency
  startDate: string
  endDate: string
  includePromotions: boolean
  includeSeasonality: boolean
}

export interface PolicyFormData {
  itemIds: string[]
  locationIds: string[]
  policyType: PolicyType
  serviceLevel: number
  leadTime: number
  leadTimeVariability: number
  carryingCost: number
  stockoutCost: number
  orderingCost: number
}

export interface ReplenishmentFormData {
  fromLocationId: string
  toLocationId: string
  items: {
    itemId: string
    quantity: number
  }[]
  expectedDeliveryDate: string
  priority: 'low' | 'medium' | 'high' | 'urgent'
  notes?: string
}

// ============================================================================
// WEBSOCKET MESSAGES
// ============================================================================

export interface WebSocketMessage {
  type: string
  payload: any
  timestamp: string
}

export interface ForecastProgressMessage {
  type: 'forecast_progress'
  payload: {
    forecastId: string
    progress: number
    status: ForecastStatus
    message?: string
  }
}

export interface ExceptionAlertMessage {
  type: 'exception_alert'
  payload: {
    exception: Exception
  }
}

export interface InventoryUpdateMessage {
  type: 'inventory_update'
  payload: {
    inventory: Inventory
  }
}
