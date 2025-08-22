import { 
  Item, 
  Location, 
  Inventory, 
  Forecast, 
  InventoryPolicy, 
  PurchaseOrder, 
  TransferOrder, 
  Supplier, 
  KPIMetrics, 
  Exception,
  User,
  Organization
} from '@/types'

// ============================================================================
// MOCK ORGANIZATIONS & USERS
// ============================================================================

export const mockOrganization: Organization = {
  id: 'org-001',
  name: 'TechCorp Industries',
  industry: 'Electronics',
  timezone: 'America/New_York',
  currency: 'USD',
  isActive: true,
  createdAt: '2024-01-01T00:00:00Z',
  updatedAt: '2024-01-01T00:00:00Z'
}

export const mockUsers: User[] = [
  {
    id: 'user-001',
    email: 'john.doe@techcorp.com',
    firstName: 'John',
    lastName: 'Doe',
    role: 'admin',
    organizationId: 'org-001',
    isActive: true,
    lastLoginAt: '2024-01-15T10:30:00Z',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T10:30:00Z'
  },
  {
    id: 'user-002',
    email: 'jane.smith@techcorp.com',
    firstName: 'Jane',
    lastName: 'Smith',
    role: 'manager',
    organizationId: 'org-001',
    isActive: true,
    lastLoginAt: '2024-01-15T09:15:00Z',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T09:15:00Z'
  },
  {
    id: 'user-003',
    email: 'mike.wilson@techcorp.com',
    firstName: 'Mike',
    lastName: 'Wilson',
    role: 'analyst',
    organizationId: 'org-001',
    isActive: true,
    lastLoginAt: '2024-01-15T08:45:00Z',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T08:45:00Z'
  }
]

// ============================================================================
// MOCK ITEMS
// ============================================================================

export const mockItems: Item[] = [
  {
    id: 'item-001',
    sku: 'LAPTOP-001',
    name: 'Premium Laptop Pro',
    description: 'High-performance laptop for professionals',
    category: 'Electronics',
    subcategory: 'Computers',
    brand: 'TechCorp',
    unitOfMeasure: 'EA',
    dimensions: {
      length: 35.5,
      width: 24.5,
      height: 2.1,
      weight: 2.1
    },
    cost: 850.00,
    price: 1299.99,
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'item-002',
    sku: 'MOUSE-001',
    name: 'Wireless Gaming Mouse',
    description: 'High-precision wireless gaming mouse',
    category: 'Electronics',
    subcategory: 'Accessories',
    brand: 'TechCorp',
    unitOfMeasure: 'EA',
    dimensions: {
      length: 12.5,
      width: 6.8,
      height: 3.9,
      weight: 0.12
    },
    cost: 25.00,
    price: 49.99,
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'item-003',
    sku: 'KEYBOARD-001',
    name: 'Mechanical Keyboard',
    description: 'Premium mechanical keyboard with RGB lighting',
    category: 'Electronics',
    subcategory: 'Accessories',
    brand: 'TechCorp',
    unitOfMeasure: 'EA',
    dimensions: {
      length: 44.0,
      width: 13.5,
      height: 3.0,
      weight: 0.95
    },
    cost: 45.00,
    price: 89.99,
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'item-004',
    sku: 'MONITOR-001',
    name: '27" 4K Monitor',
    description: 'Ultra-high definition monitor for professionals',
    category: 'Electronics',
    subcategory: 'Displays',
    brand: 'TechCorp',
    unitOfMeasure: 'EA',
    dimensions: {
      length: 61.0,
      width: 36.5,
      height: 5.2,
      weight: 8.5
    },
    cost: 320.00,
    price: 599.99,
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'item-005',
    sku: 'HEADPHONES-001',
    name: 'Noise-Canceling Headphones',
    description: 'Premium wireless noise-canceling headphones',
    category: 'Electronics',
    subcategory: 'Audio',
    brand: 'TechCorp',
    unitOfMeasure: 'EA',
    dimensions: {
      length: 18.5,
      width: 16.8,
      height: 8.5,
      weight: 0.28
    },
    cost: 120.00,
    price: 249.99,
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  }
]

// ============================================================================
// MOCK LOCATIONS
// ============================================================================

export const mockLocations: Location[] = [
  {
    id: 'loc-001',
    code: 'DC-NY',
    name: 'New York Distribution Center',
    type: 'distribution_center',
    address: {
      street: '123 Industrial Blvd',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'USA'
    },
    coordinates: {
      latitude: 40.7128,
      longitude: -74.0060
    },
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'loc-002',
    code: 'STORE-NY-01',
    name: 'New York Store - Downtown',
    type: 'store',
    parentId: 'loc-001',
    address: {
      street: '456 Main Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10002',
      country: 'USA'
    },
    coordinates: {
      latitude: 40.7589,
      longitude: -73.9851
    },
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'loc-003',
    code: 'STORE-NY-02',
    name: 'New York Store - Midtown',
    type: 'store',
    parentId: 'loc-001',
    address: {
      street: '789 Broadway',
      city: 'New York',
      state: 'NY',
      zipCode: '10003',
      country: 'USA'
    },
    coordinates: {
      latitude: 40.7505,
      longitude: -73.9934
    },
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'loc-004',
    code: 'DC-LA',
    name: 'Los Angeles Distribution Center',
    type: 'distribution_center',
    address: {
      street: '321 Warehouse Ave',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90210',
      country: 'USA'
    },
    coordinates: {
      latitude: 34.0522,
      longitude: -118.2437
    },
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'loc-005',
    code: 'STORE-LA-01',
    name: 'Los Angeles Store - Hollywood',
    type: 'store',
    parentId: 'loc-004',
    address: {
      street: '654 Sunset Blvd',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90211',
      country: 'USA'
    },
    coordinates: {
      latitude: 34.0928,
      longitude: -118.3287
    },
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  }
]

// ============================================================================
// MOCK INVENTORY
// ============================================================================

export const mockInventory: Inventory[] = [
  {
    id: 'inv-001',
    itemId: 'item-001',
    locationId: 'loc-001',
    quantity: 150,
    reservedQuantity: 25,
    availableQuantity: 125,
    safetyStock: 50,
    reorderPoint: 75,
    maxStock: 200,
    lastUpdated: '2024-01-15T10:00:00Z'
  },
  {
    id: 'inv-002',
    itemId: 'item-001',
    locationId: 'loc-002',
    quantity: 45,
    reservedQuantity: 8,
    availableQuantity: 37,
    safetyStock: 20,
    reorderPoint: 30,
    maxStock: 80,
    lastUpdated: '2024-01-15T10:00:00Z'
  },
  {
    id: 'inv-003',
    itemId: 'item-002',
    locationId: 'loc-001',
    quantity: 300,
    reservedQuantity: 45,
    availableQuantity: 255,
    safetyStock: 100,
    reorderPoint: 150,
    maxStock: 500,
    lastUpdated: '2024-01-15T10:00:00Z'
  },
  {
    id: 'inv-004',
    itemId: 'item-002',
    locationId: 'loc-002',
    quantity: 85,
    reservedQuantity: 12,
    availableQuantity: 73,
    safetyStock: 40,
    reorderPoint: 60,
    maxStock: 150,
    lastUpdated: '2024-01-15T10:00:00Z'
  },
  {
    id: 'inv-005',
    itemId: 'item-003',
    locationId: 'loc-001',
    quantity: 200,
    reservedQuantity: 30,
    availableQuantity: 170,
    safetyStock: 80,
    reorderPoint: 120,
    maxStock: 300,
    lastUpdated: '2024-01-15T10:00:00Z'
  }
]

// ============================================================================
// MOCK FORECASTS
// ============================================================================

export const mockForecasts: Forecast[] = [
  {
    id: 'forecast-001',
    itemId: 'item-001',
    locationId: 'loc-001',
    modelType: 'ensemble',
    horizon: 30,
    frequency: 'daily',
    startDate: '2024-01-16',
    endDate: '2024-02-15',
    status: 'completed',
    accuracy: {
      mape: 8.5,
      wape: 7.2,
      mae: 12.3,
      rmse: 15.7
    },
    createdAt: '2024-01-15T09:00:00Z',
    updatedAt: '2024-01-15T10:30:00Z'
  },
  {
    id: 'forecast-002',
    itemId: 'item-002',
    locationId: 'loc-001',
    modelType: 'prophet',
    horizon: 30,
    frequency: 'daily',
    startDate: '2024-01-16',
    endDate: '2024-02-15',
    status: 'completed',
    accuracy: {
      mape: 12.1,
      wape: 10.8,
      mae: 18.5,
      rmse: 22.3
    },
    createdAt: '2024-01-15T09:00:00Z',
    updatedAt: '2024-01-15T10:30:00Z'
  },
  {
    id: 'forecast-003',
    itemId: 'item-003',
    locationId: 'loc-001',
    modelType: 'xgboost',
    horizon: 30,
    frequency: 'daily',
    startDate: '2024-01-16',
    endDate: '2024-02-15',
    status: 'running',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  }
]

// ============================================================================
// MOCK POLICIES
// ============================================================================

export const mockPolicies: InventoryPolicy[] = [
  {
    id: 'policy-001',
    itemId: 'item-001',
    locationId: 'loc-001',
    policyType: 'ss',
    parameters: {
      s: 75,
      S: 200
    },
    serviceLevel: 0.95,
    leadTime: 7,
    leadTimeVariability: 2,
    carryingCost: 0.25,
    stockoutCost: 50.00,
    orderingCost: 25.00,
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    id: 'policy-002',
    itemId: 'item-002',
    locationId: 'loc-001',
    policyType: 'min_max',
    parameters: {
      min: 100,
      max: 500
    },
    serviceLevel: 0.90,
    leadTime: 5,
    leadTimeVariability: 1.5,
    carryingCost: 0.20,
    stockoutCost: 30.00,
    orderingCost: 15.00,
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    id: 'policy-003',
    itemId: 'item-003',
    locationId: 'loc-001',
    policyType: 'eoq',
    parameters: {
      eoq: 150
    },
    serviceLevel: 0.92,
    leadTime: 6,
    leadTimeVariability: 2,
    carryingCost: 0.22,
    stockoutCost: 40.00,
    orderingCost: 20.00,
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  }
]

// ============================================================================
// MOCK SUPPLIERS
// ============================================================================

export const mockSuppliers: Supplier[] = [
  {
    id: 'supplier-001',
    code: 'SUP-001',
    name: 'Global Electronics Inc.',
    contactPerson: 'Sarah Johnson',
    email: 'sarah.johnson@globalelectronics.com',
    phone: '+1-555-0123',
    address: {
      street: '789 Supplier Street',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60601',
      country: 'USA'
    },
    paymentTerms: 30,
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'supplier-002',
    code: 'SUP-002',
    name: 'Tech Components Ltd.',
    contactPerson: 'Michael Chen',
    email: 'michael.chen@techcomponents.com',
    phone: '+1-555-0456',
    address: {
      street: '456 Component Ave',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94102',
      country: 'USA'
    },
    paymentTerms: 45,
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  }
]

// ============================================================================
// MOCK PURCHASE ORDERS
// ============================================================================

export const mockPurchaseOrders: PurchaseOrder[] = [
  {
    id: 'po-001',
    poNumber: 'PO-2024-001',
    supplierId: 'supplier-001',
    status: 'approved',
    items: [
      {
        id: 'po-item-001',
        poId: 'po-001',
        itemId: 'item-001',
        quantity: 100,
        unitCost: 850.00,
        totalCost: 85000.00,
        receivedQuantity: 0,
        status: 'pending'
      },
      {
        id: 'po-item-002',
        poId: 'po-001',
        itemId: 'item-002',
        quantity: 200,
        unitCost: 25.00,
        totalCost: 5000.00,
        receivedQuantity: 0,
        status: 'pending'
      }
    ],
    totalAmount: 90000.00,
    currency: 'USD',
    expectedDeliveryDate: '2024-01-25',
    notes: 'Priority order for Q1 inventory',
    createdBy: 'user-001',
    approvedBy: 'user-002',
    createdAt: '2024-01-15T08:00:00Z',
    updatedAt: '2024-01-15T09:30:00Z'
  },
  {
    id: 'po-002',
    poNumber: 'PO-2024-002',
    supplierId: 'supplier-002',
    status: 'draft',
    items: [
      {
        id: 'po-item-003',
        poId: 'po-002',
        itemId: 'item-003',
        quantity: 150,
        unitCost: 45.00,
        totalCost: 6750.00,
        receivedQuantity: 0,
        status: 'pending'
      }
    ],
    totalAmount: 6750.00,
    currency: 'USD',
    expectedDeliveryDate: '2024-02-01',
    createdBy: 'user-003',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  }
]

// ============================================================================
// MOCK TRANSFER ORDERS
// ============================================================================

export const mockTransferOrders: TransferOrder[] = [
  {
    id: 'to-001',
    toNumber: 'TO-2024-001',
    fromLocationId: 'loc-001',
    toLocationId: 'loc-002',
    status: 'shipped',
    items: [
      {
        id: 'to-item-001',
        toId: 'to-001',
        itemId: 'item-001',
        quantity: 25,
        shippedQuantity: 25,
        receivedQuantity: 0,
        status: 'shipped'
      },
      {
        id: 'to-item-002',
        toId: 'to-001',
        itemId: 'item-002',
        quantity: 50,
        shippedQuantity: 50,
        receivedQuantity: 0,
        status: 'shipped'
      }
    ],
    expectedShipDate: '2024-01-15',
    actualShipDate: '2024-01-15',
    expectedDeliveryDate: '2024-01-16',
    notes: 'Weekly replenishment transfer',
    createdBy: 'user-002',
    createdAt: '2024-01-14T14:00:00Z',
    updatedAt: '2024-01-15T08:30:00Z'
  }
]

// ============================================================================
// MOCK KPI METRICS
// ============================================================================

export const mockKPIMetrics: KPIMetrics[] = [
  {
    id: 'kpi-001',
    locationId: 'loc-001',
    period: '2024-01',
    metrics: {
      fillRate: 94.2,
      stockoutRate: 5.8,
      inventoryTurns: 8.5,
      daysOfSupply: 42.9,
      otif: 87.3,
      forecastAccuracy: 91.5,
      carryingCost: 125000.00,
      stockoutCost: 45000.00,
      totalCost: 170000.00
    },
    createdAt: '2024-01-15T00:00:00Z'
  },
  {
    id: 'kpi-002',
    locationId: 'loc-002',
    period: '2024-01',
    metrics: {
      fillRate: 91.8,
      stockoutRate: 8.2,
      inventoryTurns: 7.2,
      daysOfSupply: 50.7,
      otif: 84.1,
      forecastAccuracy: 88.9,
      carryingCost: 45000.00,
      stockoutCost: 18000.00,
      totalCost: 63000.00
    },
    createdAt: '2024-01-15T00:00:00Z'
  }
]

// ============================================================================
// MOCK EXCEPTIONS
// ============================================================================

export const mockExceptions: Exception[] = [
  {
    id: 'exception-001',
    type: 'low_stock',
    severity: 'high',
    itemId: 'item-004',
    locationId: 'loc-002',
    title: 'Low Stock Alert: 27" 4K Monitor',
    description: 'Current stock level (12) is below reorder point (15)',
    currentValue: 12,
    thresholdValue: 15,
    status: 'open',
    assignedTo: 'user-002',
    createdAt: '2024-01-15T09:15:00Z',
    updatedAt: '2024-01-15T09:15:00Z'
  },
  {
    id: 'exception-002',
    type: 'excess_stock',
    severity: 'medium',
    itemId: 'item-005',
    locationId: 'loc-001',
    title: 'Excess Stock: Noise-Canceling Headphones',
    description: 'Current stock level (85) is above max stock (60)',
    currentValue: 85,
    thresholdValue: 60,
    status: 'acknowledged',
    assignedTo: 'user-003',
    createdAt: '2024-01-15T08:30:00Z',
    updatedAt: '2024-01-15T09:00:00Z'
  },
  {
    id: 'exception-003',
    type: 'stockout_risk',
    severity: 'critical',
    itemId: 'item-001',
    locationId: 'loc-003',
    title: 'Stockout Risk: Premium Laptop Pro',
    description: 'Projected stockout within 3 days based on current demand',
    currentValue: 8,
    thresholdValue: 20,
    status: 'in_progress',
    assignedTo: 'user-001',
    createdAt: '2024-01-15T07:45:00Z',
    updatedAt: '2024-01-15T08:15:00Z'
  }
]

// ============================================================================
// MOCK FORECAST DATA POINTS
// ============================================================================

export const mockForecastDataPoints = [
  { date: '2024-01-16', forecast: 12, lowerBound: 8, upperBound: 16, confidence: 0.85 },
  { date: '2024-01-17', forecast: 15, lowerBound: 11, upperBound: 19, confidence: 0.87 },
  { date: '2024-01-18', forecast: 18, lowerBound: 14, upperBound: 22, confidence: 0.89 },
  { date: '2024-01-19', forecast: 14, lowerBound: 10, upperBound: 18, confidence: 0.86 },
  { date: '2024-01-20', forecast: 16, lowerBound: 12, upperBound: 20, confidence: 0.88 },
  { date: '2024-01-21', forecast: 20, lowerBound: 16, upperBound: 24, confidence: 0.90 },
  { date: '2024-01-22', forecast: 22, lowerBound: 18, upperBound: 26, confidence: 0.91 },
  { date: '2024-01-23', forecast: 19, lowerBound: 15, upperBound: 23, confidence: 0.89 },
  { date: '2024-01-24', forecast: 17, lowerBound: 13, upperBound: 21, confidence: 0.87 },
  { date: '2024-01-25', forecast: 21, lowerBound: 17, upperBound: 25, confidence: 0.90 }
]

// ============================================================================
// MOCK HISTORICAL DATA
// ============================================================================

export const mockHistoricalData = [
  { date: '2024-01-01', demand: 10, actual: 12 },
  { date: '2024-01-02', demand: 15, actual: 14 },
  { date: '2024-01-03', demand: 12, actual: 13 },
  { date: '2024-01-04', demand: 18, actual: 17 },
  { date: '2024-01-05', demand: 20, actual: 19 },
  { date: '2024-01-06', demand: 16, actual: 18 },
  { date: '2024-01-07', demand: 14, actual: 15 },
  { date: '2024-01-08', demand: 22, actual: 21 },
  { date: '2024-01-09', demand: 19, actual: 20 },
  { date: '2024-01-10', demand: 17, actual: 16 },
  { date: '2024-01-11', demand: 25, actual: 24 },
  { date: '2024-01-12', demand: 21, actual: 22 },
  { date: '2024-01-13', demand: 18, actual: 19 },
  { date: '2024-01-14', demand: 23, actual: 21 },
  { date: '2024-01-15', demand: 20, actual: 20 }
]

// ============================================================================
// MOCK CATEGORIES
// ============================================================================

export const mockCategories = [
  { id: 'cat-001', name: 'Electronics', parentId: null },
  { id: 'cat-002', name: 'Computers', parentId: 'cat-001' },
  { id: 'cat-003', name: 'Accessories', parentId: 'cat-001' },
  { id: 'cat-004', name: 'Displays', parentId: 'cat-001' },
  { id: 'cat-005', name: 'Audio', parentId: 'cat-001' }
]

// ============================================================================
// MOCK BRANDS
// ============================================================================

export const mockBrands = [
  { id: 'brand-001', name: 'TechCorp' },
  { id: 'brand-002', name: 'Global Electronics' },
  { id: 'brand-003', name: 'Tech Components' },
  { id: 'brand-004', name: 'Premium Tech' }
]

// ============================================================================
// MOCK SEARCH RESULTS
// ============================================================================

export const mockSearchResults = {
  items: mockItems.slice(0, 3),
  locations: mockLocations.slice(0, 2),
  suppliers: mockSuppliers.slice(0, 1),
  total: 6
}

// ============================================================================
// MOCK DASHBOARD DATA
// ============================================================================

export const mockDashboardData = {
  kpis: {
    fillRate: 94.2,
    stockouts: 12,
    inventoryTurns: 8.5,
    otif: 87.3
  },
  recentActivity: [
    {
      id: 'activity-001',
      type: 'forecast_completed',
      message: 'Forecast completed for Electronics category',
      timestamp: '2024-01-15T10:28:00Z',
      severity: 'info'
    },
    {
      id: 'activity-002',
      type: 'low_stock_alert',
      message: 'Low stock alert: SKU-12345 (Qty: 15)',
      timestamp: '2024-01-15T09:15:00Z',
      severity: 'warning'
    },
    {
      id: 'activity-003',
      type: 'po_approved',
      message: 'PO-2024-001 approved and sent to vendor',
      timestamp: '2024-01-15T08:30:00Z',
      severity: 'info'
    }
  ],
  topItems: mockItems.slice(0, 5),
  topLocations: mockLocations.slice(0, 3)
}
