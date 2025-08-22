import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

export default function ExecutionPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Execution
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Manage POs, transfers, and vendor collaboration
              </p>
            </div>
            <Button asChild>
              <Link href="/dashboard">
                Back to Dashboard
              </Link>
            </Button>
          </div>
        </div>

        {/* Order Queue */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Order Queue</CardTitle>
            <CardDescription>
              Purchase orders and transfer orders awaiting approval
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div>
                    <h3 className="font-medium text-yellow-800 dark:text-yellow-200">
                      PO-2024-001 - Electronics Supplier
                    </h3>
                    <p className="text-sm text-yellow-600 dark:text-yellow-400">
                      Pending approval • $45,000 • 15 items
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Review</Button>
                  <Button size="sm">Approve</Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div>
                    <h3 className="font-medium text-blue-800 dark:text-blue-200">
                      TO-2024-002 - DC Transfer
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      Approved • In transit • $12,000 • 8 items
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Track</Button>
                  <Button size="sm" variant="outline">Details</Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <h3 className="font-medium text-green-800 dark:text-green-200">
                      PO-2024-003 - Clothing Vendor
                    </h3>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Confirmed • ETA: 3 days • $28,000 • 22 items
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Track</Button>
                  <Button size="sm" variant="outline">Details</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                New PO
              </CardTitle>
              <CardDescription>
                Create a new purchase order
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                Create PO
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                New Transfer
              </CardTitle>
              <CardDescription>
                Create a transfer order
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Create TO
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Vendor Portal
              </CardTitle>
              <CardDescription>
                Access vendor collaboration portal
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Access Portal
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Approve All
              </CardTitle>
              <CardDescription>
                Approve all pending orders
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Approve All
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Vendor Performance */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Vendor Performance</CardTitle>
            <CardDescription>
              Key performance indicators for suppliers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">98.5%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">On-Time Delivery</div>
                <div className="text-xs text-gray-500 mt-1">Target: 95%</div>
              </div>
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">99.2%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Fill Rate</div>
                <div className="text-xs text-gray-500 mt-1">Target: 98%</div>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-2">4.2 days</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Avg Lead Time</div>
                <div className="text-xs text-gray-500 mt-1">Target: 5 days</div>
              </div>
              <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 mb-2">0.8%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Quality Issues</div>
                <div className="text-xs text-gray-500 mt-1">Target: &lt;1%</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>
                Latest purchase and transfer orders
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">PO-2024-004</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Electronics Supplier • $32,000</p>
                  </div>
                  <span className="text-sm text-green-600 font-medium">Confirmed</span>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">TO-2024-003</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">DC-1 → Store-5 • $8,500</p>
                  </div>
                  <span className="text-sm text-blue-600 font-medium">In Transit</span>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">PO-2024-005</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Clothing Vendor • $18,000</p>
                  </div>
                  <span className="text-sm text-yellow-600 font-medium">Pending</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vendor Alerts</CardTitle>
              <CardDescription>
                Important notifications from suppliers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                      Electronics Supplier - Lead Time Update
                    </p>
                    <p className="text-xs text-blue-600 dark:text-blue-400">
                      Lead time reduced from 7 to 5 days
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                      Clothing Vendor - Price Increase
                    </p>
                    <p className="text-xs text-yellow-600 dark:text-yellow-400">
                      5% price increase effective next month
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium text-green-800 dark:text-green-200">
                      Home Goods Supplier - New Products
                    </p>
                    <p className="text-xs text-green-600 dark:text-green-400">
                      15 new SKUs available for ordering
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
