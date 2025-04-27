import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { RacesList } from "@/components/races-list"
import { RaceCalendar } from "@/components/race-calendar"
import { RaceRegistrations } from "@/components/race-registrations"
import { RaceAnalytics } from "@/components/race-analytics"

export default function RaceOrganizerDashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Race Organizer Dashboard" text="Manage your races, registrations, and event logistics.">
        <Button>Create Race</Button>
      </DashboardHeader>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="races">Races</TabsTrigger>
          <TabsTrigger value="registrations">Registrations</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Card className="flex-1 min-w-[240px]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Races</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-muted-foreground">Next: City Marathon (3 days)</p>
              </CardContent>
            </Card>
            <Card className="flex-1 min-w-[240px]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Registrations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3,850</div>
                <p className="text-xs text-muted-foreground">+250 this week</p>
              </CardContent>
            </Card>
            <Card className="flex-1 min-w-[240px]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$42,500</div>
                <p className="text-xs text-muted-foreground">+$3,200 this week</p>
              </CardContent>
            </Card>
            <Card className="flex-1 min-w-[240px]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">5 high priority</p>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <Card className="flex-1 md:flex-[4]">
              <CardHeader>
                <CardTitle>Upcoming Races</CardTitle>
                <CardDescription>Your scheduled race events</CardDescription>
              </CardHeader>
              <CardContent>
                <RacesList />
              </CardContent>
            </Card>
            <Card className="flex-1 md:flex-[3]">
              <CardHeader>
                <CardTitle>Recent Registrations</CardTitle>
                <CardDescription>Latest participant sign-ups</CardDescription>
              </CardHeader>
              <CardContent>
                <RaceRegistrations />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="races" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Race Management</CardTitle>
                  <CardDescription>Create and manage your race events</CardDescription>
                </div>
                <Button>Create Race</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="upcoming">
                <TabsList className="mb-4">
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  <TabsTrigger value="past">Past</TabsTrigger>
                  <TabsTrigger value="drafts">Drafts</TabsTrigger>
                </TabsList>
                <TabsContent value="upcoming">
                  <RacesList />
                </TabsContent>
                <TabsContent value="past">
                  <div className="flex items-center justify-center h-40">
                    <p className="text-muted-foreground">Past races will be displayed here</p>
                  </div>
                </TabsContent>
                <TabsContent value="drafts">
                  <div className="flex items-center justify-center h-40">
                    <p className="text-muted-foreground">Draft races will be displayed here</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Race Calendar</CardTitle>
              <CardDescription>View your race schedule</CardDescription>
            </CardHeader>
            <CardContent>
              <RaceCalendar />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="registrations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Registration Management</CardTitle>
              <CardDescription>Manage participant registrations for your races</CardDescription>
            </CardHeader>
            <CardContent>
              <RaceRegistrations detailed />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Race Analytics</CardTitle>
              <CardDescription>Performance metrics and insights for your races</CardDescription>
            </CardHeader>
            <CardContent>
              <RaceAnalytics />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
