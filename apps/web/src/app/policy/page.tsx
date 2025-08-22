import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Policy Lab
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Optimize inventory policies and safety stock levels
              </p>
            </div>
            <Button asChild>
              <Link href="/dashboard">
                Back to Dashboard
              </Link>
            </Button>
          </div>
        </div>

        {/* Policy Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                (s,S) Policy
              </CardTitle>
              <CardDescription>
                Reorder point and order-up-to level optimization
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                <p>• Reorder point (s): 150 units</p>
                <p>• Order-up-to (S): 500 units</p>
                <p>• Service level: 95%</p>
              </div>
              <Button variant="outline" className="w-full">
                Optimize
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Min-Max Policy
              </CardTitle>
              <CardDescription>
                Minimum and maximum inventory level management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                <p>• Minimum level: 100 units</p>
                <p>• Maximum level: 800 units</p>
                <p>• Review cycle: Weekly</p>
              </div>
              <Button variant="outline" className="w-full">
                Optimize
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                EOQ Policy
              </CardTitle>
              <CardDescription>
                Economic Order Quantity optimization
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                <p>• EOQ: 250 units</p>
                <p>• Order cost: $50</p>
                <p>• Holding cost: $2/unit</p>
              </div>
              <Button variant="outline" className="w-full">
                Optimize
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                Base-Stock Policy
              </CardTitle>
              <CardDescription>
                Target inventory level maintenance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                <p>• Target level: 400 units</p>
                <p>• Safety stock: 50 units</p>
                <p>• Lead time: 7 days</p>
              </div>
              <Button variant="outline" className="w-full">
                Optimize
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Service Level Optimization */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Service Level Optimization</CardTitle>
            <CardDescription>
              Balance service levels with inventory costs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-4">Service Level vs Cost Trade-off</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Service Level</span>
                    <span className="text-sm font-medium">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Safety Stock Cost</span>
                    <span className="text-sm font-medium">$12,500</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Stockout Risk</span>
                    <span className="text-sm font-medium">5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: '5%' }}></div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-4">Policy Recommendations</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h4 className="font-medium text-blue-800 dark:text-blue-200">High-Value Items (A)</h4>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      Service level: 98% • Safety stock: 2 weeks
                    </p>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <h4 className="font-medium text-green-800 dark:text-green-200">Medium-Value Items (B)</h4>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Service level: 95% • Safety stock: 1 week
                    </p>
                  </div>
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <h4 className="font-medium text-yellow-800 dark:text-yellow-200">Low-Value Items (C)</h4>
                    <p className="text-sm text-yellow-600 dark:text-yellow-400">
                      Service level: 90% • Safety stock: 3 days
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lead Time Analysis */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Lead Time Analysis</CardTitle>
            <CardDescription>
              Impact of lead time variability on safety stock
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">7 days</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Average Lead Time</div>
                <div className="text-xs text-gray-500 mt-1">±2 days variance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">150 units</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Safety Stock</div>
                <div className="text-xs text-gray-500 mt-1">95% service level</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">$3,000</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Safety Stock Cost</div>
                <div className="text-xs text-gray-500 mt-1">Annual holding cost</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Optimizations */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Policy Optimizations</CardTitle>
            <CardDescription>
              Latest policy updates and their impact
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <h3 className="font-medium text-green-800 dark:text-green-200">
                      Electronics Category - (s,S) Policy
                    </h3>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Optimized 1 hour ago • 15% cost reduction
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-green-800 dark:text-green-200">
                    s: 120 → 100
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-400">
                    S: 450 → 400
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div>
                    <h3 className="font-medium text-blue-800 dark:text-blue-200">
                      Clothing SKUs - Min-Max Policy
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      Optimized 3 hours ago • 8% service improvement
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                    Min: 80 → 100
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-400">
                    Max: 600 → 700
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div>
                    <h3 className="font-medium text-yellow-800 dark:text-yellow-200">
                      Home Goods - EOQ Policy
                    </h3>
                    <p className="text-sm text-yellow-600 dark:text-yellow-400">
                      Optimized 6 hours ago • 12% efficiency gain
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                    EOQ: 200 → 180
                  </p>
                  <p className="text-xs text-yellow-600 dark:text-yellow-400">
                    Order cost: $60 → $50
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
