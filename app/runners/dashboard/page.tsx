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
          <div className="flex flex-col md:flex-row gap-4">
            <Card className="flex-1 md:flex-[4]">
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Your latest training sessions and race results.</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentActivities />
              </CardContent>
            </Card>
            <Card className="flex-1 md:flex-[3]">
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
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 md:flex-[2]">
              <RunnerTrainingPlan />
            </div>
            <div className="flex-1">
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
          <div className="flex flex-col md:flex-row gap-4">
            <StravaConnect />
            <Card className="flex-1">
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
