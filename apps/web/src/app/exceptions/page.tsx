import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

export default function ExceptionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Exceptions
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Monitor and resolve inventory exceptions and alerts
              </p>
            </div>
            <Button asChild>
              <Link href="/dashboard">
                Back to Dashboard
              </Link>
            </Button>
          </div>
        </div>

        {/* Exception Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Critical</CardTitle>
              <svg className="h-4 w-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">3</div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Requires immediate attention
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">High</CardTitle>
              <svg className="h-4 w-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">8</div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Review within 24 hours
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Medium</CardTitle>
              <svg className="h-4 w-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">15</div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Review within 48 hours
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Resolved</CardTitle>
              <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">42</div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                This week
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Critical Exceptions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              Critical Exceptions
            </CardTitle>
            <CardDescription>
              Exceptions requiring immediate attention
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div>
                    <h3 className="font-medium text-red-800 dark:text-red-200">
                      Stockout Risk - SKU-12345
                    </h3>
                    <p className="text-sm text-red-600 dark:text-red-400">
                      Current stock: 5 units • Reorder point: 50 units • ETA: 7 days
                    </p>
                    <p className="text-xs text-red-500 mt-1">
                      Risk: High probability of stockout within 3 days
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Review</Button>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700">Resolve</Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div>
                    <h3 className="font-medium text-red-800 dark:text-red-200">
                      Excess Inventory - SKU-67890
                    </h3>
                    <p className="text-sm text-red-600 dark:text-red-400">
                      Current stock: 500 units • Max stock: 200 units • 150 days of supply
                    </p>
                    <p className="text-xs text-red-500 mt-1">
                      Risk: High carrying cost and obsolescence risk
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Review</Button>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700">Resolve</Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div>
                    <h3 className="font-medium text-red-800 dark:text-red-200">
                      Quality Issue - SKU-11111
                    </h3>
                    <p className="text-sm text-red-600 dark:text-red-400">
                      Defect rate: 15% • Affected quantity: 150 units • Supplier: ABC Corp
                    </p>
                    <p className="text-xs text-red-500 mt-1">
                      Risk: Customer satisfaction and return costs
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Review</Button>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700">Resolve</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* High Priority Exceptions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              High Priority Exceptions
            </CardTitle>
            <CardDescription>
              Exceptions requiring review within 24 hours
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <div>
                    <h3 className="font-medium text-orange-800 dark:text-orange-200">
                      Low Stock Alert - SKU-22222
                    </h3>
                    <p className="text-sm text-orange-600 dark:text-orange-400">
                      Current stock: 25 units • Reorder point: 30 units • ETA: 5 days
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Review</Button>
                  <Button size="sm" variant="outline">Resolve</Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <div>
                    <h3 className="font-medium text-orange-800 dark:text-orange-200">
                      Lead Time Variance - SKU-33333
                    </h3>
                    <p className="text-sm text-orange-600 dark:text-orange-400">
                      Expected: 7 days • Actual: 12 days • Variance: +5 days
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Review</Button>
                  <Button size="sm" variant="outline">Resolve</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Exception Types */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Exception Categories</CardTitle>
              <CardDescription>
                Breakdown of exceptions by type
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Stockout Risk</span>
                  <span className="text-sm font-medium text-red-600">8</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm">Excess Inventory</span>
                  <span className="text-sm font-medium text-orange-600">6</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: '23%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm">Quality Issues</span>
                  <span className="text-sm font-medium text-yellow-600">5</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '19%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm">Lead Time Variance</span>
                  <span className="text-sm font-medium text-blue-600">4</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '15%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm">Forecast Variance</span>
                  <span className="text-sm font-medium text-purple-600">3</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '12%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resolution Time</CardTitle>
              <CardDescription>
                Average time to resolve exceptions by priority
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Critical</span>
                  <span className="text-sm font-medium text-red-600">2.3 hours</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm">High</span>
                  <span className="text-sm font-medium text-orange-600">8.7 hours</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm">Medium</span>
                  <span className="text-sm font-medium text-yellow-600">24.5 hours</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm">Low</span>
                  <span className="text-sm font-medium text-green-600">72.1 hours</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
