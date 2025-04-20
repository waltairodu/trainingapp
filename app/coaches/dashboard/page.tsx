import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { WorkflowTasks } from "@/components/workflow-tasks"
import { CoachAthletesList } from "@/components/coach-athletes-list"
import { CoachTrainingPlans } from "@/components/coach-training-plans"
import { CoachAnalytics } from "@/components/coach-analytics"

export default function CoachDashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Coach Dashboard" text="Manage your athletes, training plans, and team performance.">
        <Button>Add Athlete</Button>
      </DashboardHeader>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="athletes">Athletes</TabsTrigger>
          <TabsTrigger value="training-plans">Training Plans</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Athletes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+2 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Plans</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">3 need updates</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Upcoming Races</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-muted-foreground">Next: City Marathon (3 days)</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <p className="text-xs text-muted-foreground">3 high priority</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Athlete Overview</CardTitle>
                <CardDescription>Quick status of your athletes</CardDescription>
              </CardHeader>
              <CardContent>
                <CoachAthletesList />
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
        </TabsContent>
        <TabsContent value="athletes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>My Athletes</CardTitle>
              <CardDescription>Manage your team members and individual athletes</CardDescription>
            </CardHeader>
            <CardContent>
              <CoachAthletesList detailed />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="training-plans" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Training Plans</CardTitle>
                  <CardDescription>Create and manage training plans for your athletes</CardDescription>
                </div>
                <Button>Create Plan</Button>
              </div>
            </CardHeader>
            <CardContent>
              <CoachTrainingPlans />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Team Analytics</CardTitle>
              <CardDescription>Performance metrics and insights for your athletes</CardDescription>
            </CardHeader>
            <CardContent>
              <CoachAnalytics />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
