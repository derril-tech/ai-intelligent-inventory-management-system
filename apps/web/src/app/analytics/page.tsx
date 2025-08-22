import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Analytics
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Deep dive into performance metrics and insights
              </p>
            </div>
            <Button asChild>
              <Link href="/dashboard">
                Back to Dashboard
              </Link>
            </Button>
          </div>
        </div>

        {/* KPI Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Fill Rate</CardTitle>
              <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">94.2%</div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                +2.1% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Inventory Turns</CardTitle>
              <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">8.5</div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                +0.3 from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Days of Supply</CardTitle>
              <svg className="h-4 w-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">43</div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                -2 days from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">OTIF</CardTitle>
              <svg className="h-4 w-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">87.3%</div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                -1.2% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* ABC Analysis */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>ABC Analysis</CardTitle>
            <CardDescription>
              Inventory classification by value and volume
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-2">A Items</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">High Value</div>
                <div className="text-xs text-gray-500 mt-1">15% of SKUs • 80% of value</div>
                <div className="mt-2 text-sm font-medium text-red-600">$2.4M inventory</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600 mb-2">B Items</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Medium Value</div>
                <div className="text-xs text-gray-500 mt-1">25% of SKUs • 15% of value</div>
                <div className="mt-2 text-sm font-medium text-yellow-600">$450K inventory</div>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">C Items</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Low Value</div>
                <div className="text-xs text-gray-500 mt-1">60% of SKUs • 5% of value</div>
                <div className="mt-2 text-sm font-medium text-green-600">$150K inventory</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Forecast Accuracy</CardTitle>
              <CardDescription>
                MAPE trends over the last 12 months
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Electronics</span>
                  <span className="text-sm font-medium text-green-600">12.3%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '82%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm">Clothing</span>
                  <span className="text-sm font-medium text-blue-600">15.7%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm">Home Goods</span>
                  <span className="text-sm font-medium text-yellow-600">18.2%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cost Analysis</CardTitle>
              <CardDescription>
                Inventory carrying costs breakdown
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Storage Cost</span>
                  <span className="text-sm font-medium text-blue-600">$45,000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm">Insurance</span>
                  <span className="text-sm font-medium text-green-600">$12,000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '12%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm">Obsolescence</span>
                  <span className="text-sm font-medium text-red-600">$8,500</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-600 h-2 rounded-full" style={{ width: '8.5%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm">Opportunity Cost</span>
                  <span className="text-sm font-medium text-purple-600">$34,500</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '34.5%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Performers */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Items</CardTitle>
            <CardDescription>
              Best performing SKUs by revenue and turns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <h3 className="font-medium text-green-800 dark:text-green-200">
                      SKU-12345 - iPhone 15 Pro
                    </h3>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Revenue: $125,000 • Turns: 12.5
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-green-800 dark:text-green-200">
                    +15% vs last month
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div>
                    <h3 className="font-medium text-blue-800 dark:text-blue-200">
                      SKU-67890 - Samsung TV 65"
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      Revenue: $89,000 • Turns: 8.2
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                    +8% vs last month
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <div>
                    <h3 className="font-medium text-purple-800 dark:text-purple-200">
                      SKU-11111 - Nike Air Max
                    </h3>
                    <p className="text-sm text-purple-600 dark:text-purple-400">
                      Revenue: $67,000 • Turns: 15.3
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-purple-800 dark:text-purple-200">
                    +22% vs last month
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
