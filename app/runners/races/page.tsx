import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Medal, Trophy } from "lucide-react"

export default function RunnerRacesPage() {
  return (
    <div className="flex-1 container py-6 space-y-6">
      <DashboardHeader heading="My Races" text="Manage your race registrations and results.">
        <Button>Find Races</Button>
      </DashboardHeader>
      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past Results</TabsTrigger>
          <TabsTrigger value="calendar">Race Calendar</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Races</CardTitle>
              <CardDescription>Races you've registered for.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">City Marathon</h3>
                        <Badge variant="default" className="mt-1">
                          Marathon
                        </Badge>
                      </div>
                      <Badge variant="outline">Registered</Badge>
                    </div>
                    <div className="grid gap-1 text-sm mt-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>May 15, 2025</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>Downtown, City Center</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Trophy className="h-4 w-4 text-muted-foreground" />
                        <span>Bib #: M-1234</span>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">Trail Half Marathon</h3>
                        <Badge variant="default" className="mt-1">
                          Half Marathon
                        </Badge>
                      </div>
                      <Badge variant="outline">Registered</Badge>
                    </div>
                    <div className="grid gap-1 text-sm mt-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>June 20, 2025</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>Mountain National Park</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Trophy className="h-4 w-4 text-muted-foreground" />
                        <span>Bib #: H-5678</span>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="past" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Past Race Results</CardTitle>
              <CardDescription>Your race history and performance.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">Weekend 10K</h3>
                        <Badge variant="secondary" className="mt-1">
                          10K
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1">
                        <Medal className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-medium">3rd in Age Group</span>
                      </div>
                    </div>
                    <div className="grid gap-1 text-sm mt-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>April 10, 2025</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>City Park</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Trophy className="h-4 w-4 text-muted-foreground" />
                        <span>Time: 47:32 (4:45/km)</span>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                      <Button size="sm" variant="outline">
                        View Certificate
                      </Button>
                      <Button size="sm">Full Results</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="calendar" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Race Calendar</CardTitle>
              <CardDescription>Your upcoming race schedule.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center border rounded-lg">
                <p className="text-muted-foreground">Race calendar view would go here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
