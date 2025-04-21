import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard-header"
import { CoachAnalytics } from "@/components/coach-analytics"

export default function CoachAnalyticsPage() {
  return (
    <div className="flex-1 container py-6 space-y-6">
      <DashboardHeader heading="Analytics" text="Performance metrics and insights for your athletes." />
      <Card>
        <CardHeader>
          <CardTitle>Team Analytics</CardTitle>
          <CardDescription>Performance metrics and insights for your athletes</CardDescription>
        </CardHeader>
        <CardContent>
          <CoachAnalytics />
        </CardContent>
      </Card>
    </div>
  )
}
