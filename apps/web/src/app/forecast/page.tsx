import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

export default function ForecastPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Forecast Studio
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Build and manage demand forecasts with AI-powered models
              </p>
            </div>
            <Button asChild>
              <Link href="/dashboard">
                Back to Dashboard
              </Link>
            </Button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                New Forecast
              </CardTitle>
              <CardDescription>
                Create a new demand forecast for selected items
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                Start New Forecast
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Model Performance
              </CardTitle>
              <CardDescription>
                View accuracy metrics and model comparisons
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                View Performance
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Backtest
              </CardTitle>
              <CardDescription>
                Run historical backtests to validate models
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Run Backtest
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Forecasts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Recent Forecasts</CardTitle>
            <CardDescription>
              Latest demand forecasts and their status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <h3 className="font-medium text-green-800 dark:text-green-200">
                      Electronics Category Forecast
                    </h3>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Completed 2 minutes ago • MAPE: 12.3%
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-green-800 dark:text-green-200">
                    ETS Model
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-400">
                    30-day horizon
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div>
                    <h3 className="font-medium text-blue-800 dark:text-blue-200">
                      Clothing SKU Forecast
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      In progress • 75% complete
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                    Prophet Model
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-400">
                    90-day horizon
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div>
                    <h3 className="font-medium text-yellow-800 dark:text-yellow-200">
                      Home Goods Forecast
                    </h3>
                    <p className="text-sm text-yellow-600 dark:text-yellow-400">
                      Pending approval • MAPE: 18.7%
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                    Ensemble Model
                  </p>
                  <p className="text-xs text-yellow-600 dark:text-yellow-400">
                    60-day horizon
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Model Selection Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Model Selection Guide</CardTitle>
              <CardDescription>
                Choose the right forecasting model for your data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">ETS (Exponential Smoothing)</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Best for: Trend and seasonality patterns, short to medium horizons
                  </p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">ARIMA</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Best for: Stationary time series, autocorrelation patterns
                  </p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">Prophet</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Best for: Multiple seasonality, holiday effects, trend changes
                  </p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">XGBoost</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Best for: Complex patterns, external features, non-linear relationships
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Forecast Accuracy Metrics</CardTitle>
              <CardDescription>
                Understanding forecast performance indicators
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">MAPE (Mean Absolute Percentage Error)</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Target: &lt;15%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">WAPE (Weighted Absolute Percentage Error)</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Target: &lt;12%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">RMSE (Root Mean Square Error)</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Target: Minimize</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
