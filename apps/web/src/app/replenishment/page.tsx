import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

export default function ReplenishmentPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                MEO Planner
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Multi-echelon optimization and replenishment planning
              </p>
            </div>
            <Button asChild>
              <Link href="/dashboard">
                Back to Dashboard
              </Link>
            </Button>
          </div>
        </div>

        {/* Network Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Network Overview</CardTitle>
            <CardDescription>
              Multi-echelon network structure and flow optimization
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">3</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Distribution Centers</div>
                <div className="text-xs text-gray-500 mt-1">Primary hubs</div>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">25</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Retail Stores</div>
                <div className="text-xs text-gray-500 mt-1">End locations</div>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-2">12</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Suppliers</div>
                <div className="text-xs text-gray-500 mt-1">Source locations</div>
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
                New Plan
              </CardTitle>
              <CardDescription>
                Create a new replenishment plan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                Start Planning
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Allocations
              </CardTitle>
              <CardDescription>
                Optimize inventory allocations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Optimize
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Truck Loading
              </CardTitle>
              <CardDescription>
                Optimize truck and case pack loading
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Optimize
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Execute
              </CardTitle>
              <CardDescription>
                Execute replenishment orders
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Execute
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Current Plans */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Active Replenishment Plans</CardTitle>
            <CardDescription>
              Current multi-echelon replenishment plans and their status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <h3 className="font-medium text-green-800 dark:text-green-200">
                      Electronics Network Plan
                    </h3>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Active • 85% complete • 3 DCs, 15 stores
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-green-800 dark:text-green-200">
                    $45,000 savings
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-400">
                    vs. current plan
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div>
                    <h3 className="font-medium text-blue-800 dark:text-blue-200">
                      Clothing Distribution Plan
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      In progress • 60% complete • 2 DCs, 10 stores
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                    $28,000 savings
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-400">
                    projected
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div>
                    <h3 className="font-medium text-yellow-800 dark:text-yellow-200">
                      Home Goods Network
                    </h3>
                    <p className="text-sm text-yellow-600 dark:text-yellow-400">
                      Pending approval • 100% complete • 1 DC, 8 stores
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                    $15,000 savings
                  </p>
                  <p className="text-xs text-yellow-600 dark:text-yellow-400">
                    awaiting approval
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Network Flow Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Network Flow</CardTitle>
              <CardDescription>
                Current inventory flow across the network
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Supplier → DC</span>
                  <span className="text-sm text-gray-600">$125,000/week</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">DC → Store</span>
                  <span className="text-sm text-gray-600">$89,000/week</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Cross-DC Transfer</span>
                  <span className="text-sm text-gray-600">$12,000/week</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '15%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Optimization Metrics</CardTitle>
              <CardDescription>
                Key performance indicators for network optimization
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Fill Rate</span>
                  <span className="text-sm font-medium text-green-600">94.2%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '94%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Inventory Turns</span>
                  <span className="text-sm font-medium text-blue-600">8.5</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Transportation Cost</span>
                  <span className="text-sm font-medium text-purple-600">$2.15/unit</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '72%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Lead Time</span>
                  <span className="text-sm font-medium text-orange-600">4.2 days</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: '68%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
