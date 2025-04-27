import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { StravaActivities } from "@/components/strava-activities"
import { RecentActivities } from "@/components/recent-activities"

export default function RunnerActivitiesPage() {
  return (
    <div className="flex-1 container py-6 space-y-6">
      <DashboardHeader heading="Activities" text="Track and analyze your running activities.">
        <Button>Log Activity</Button>
      </DashboardHeader>
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Activities</TabsTrigger>
          <TabsTrigger value="strava">Strava</TabsTrigger>
          <TabsTrigger value="manual">Manual Entries</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>Your latest training sessions and race results.</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentActivities />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="strava" className="space-y-4">
          <StravaActivities />
        </TabsContent>
        <TabsContent value="manual" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Manual Entries</CardTitle>
              <CardDescription>Activities you've logged manually.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Your manually logged activities will appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Activity Analytics</CardTitle>
              <CardDescription>Insights and trends from your running data.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4">
                <Card className="flex-1">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Weekly Distance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">32.5 km</div>
                    <p className="text-xs text-muted-foreground">+5.2 km from last week</p>
                  </CardContent>
                </Card>
                <Card className="flex-1">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Average Pace</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">5:24 /km</div>
                    <p className="text-xs text-muted-foreground">-0:08 from last week</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
