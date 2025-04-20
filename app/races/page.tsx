import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { RacesList } from "@/components/races-list"
import { RaceCalendar } from "@/components/race-calendar"

export default function RacesPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Race Management" text="Create, manage, and organize running events and races.">
        <Button>Create Race Event</Button>
      </DashboardHeader>
      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="my-races">My Races</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
          <TabsTrigger value="results">Results</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Races</CardTitle>
              <CardDescription>Browse and register for upcoming race events.</CardDescription>
            </CardHeader>
            <CardContent>
              <RacesList />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="my-races" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>My Races</CardTitle>
              <CardDescription>Races you've registered for or organized.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Your registered races will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="calendar" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Race Calendar</CardTitle>
              <CardDescription>View all races on a calendar.</CardDescription>
            </CardHeader>
            <CardContent>
              <RaceCalendar />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="results" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Race Results</CardTitle>
              <CardDescription>View and publish race results.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Race results will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
