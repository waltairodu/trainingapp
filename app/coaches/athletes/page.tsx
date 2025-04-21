import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { CoachAthletesList } from "@/components/coach-athletes-list"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function CoachAthletesPage() {
  return (
    <div className="flex-1 container py-6 space-y-6">
      <DashboardHeader heading="Athletes" text="Manage your team members and individual athletes.">
        <Button>Add Athlete</Button>
      </DashboardHeader>
      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search athletes..." className="pl-8" />
        </div>
        <Button variant="outline">Filter</Button>
      </div>
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Athletes</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="injured">Injured</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Athletes</CardTitle>
              <CardDescription>Manage all athletes under your coaching.</CardDescription>
            </CardHeader>
            <CardContent>
              <CoachAthletesList detailed />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Athletes</CardTitle>
              <CardDescription>Athletes currently in active training.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Active athletes will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="injured" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Injured Athletes</CardTitle>
              <CardDescription>Athletes currently recovering from injury.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Injured athletes will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="teams" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Teams</CardTitle>
              <CardDescription>Manage your training groups and teams.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">Marathon Group</h3>
                        <p className="text-sm text-muted-foreground mt-1">5 athletes</p>
                      </div>
                      <Button size="sm" variant="outline">
                        View Team
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">5K/10K Group</h3>
                        <p className="text-sm text-muted-foreground mt-1">8 athletes</p>
                      </div>
                      <Button size="sm" variant="outline">
                        View Team
                      </Button>
                    </div>
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
