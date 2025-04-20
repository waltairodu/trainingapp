import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { StravaConnect } from "@/components/strava-connect"
import { StravaActivities } from "@/components/strava-activities"
import { RecentActivities } from "@/components/recent-activities"
import { UpcomingEvents } from "@/components/upcoming-events"
import { WorkflowTasks } from "@/components/workflow-tasks"
import { StatsCards } from "@/components/stats-cards"
import { RunnerTrainingPlan } from "@/components/runner-training-plan"

export default function RunnerDashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Runner Dashboard" text="Track your training, races, and performance metrics." />
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="training">Training</TabsTrigger>
          <TabsTrigger value="races">Races</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <StatsCards />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Your latest training sessions and race results.</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentActivities />
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Workflow Tasks</CardTitle>
                <CardDescription>Your pending tasks and approvals.</CardDescription>
              </CardHeader>
              <CardContent>
                <WorkflowTasks />
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Races and training events on your calendar.</CardDescription>
            </CardHeader>
            <CardContent>
              <UpcomingEvents />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="training" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <RunnerTrainingPlan />
            </div>
            <div>
              <StravaActivities />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="races" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>My Races</CardTitle>
              <CardDescription>Races you've registered for or completed.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Your races will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="integrations" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <StravaConnect />
            <Card>
              <CardHeader>
                <CardTitle>Garmin Connect</CardTitle>
                <CardDescription>Connect your Garmin device</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Connect your Garmin device to sync activities and health data.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
