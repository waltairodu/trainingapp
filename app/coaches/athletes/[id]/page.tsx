import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { DashboardHeader } from "@/components/dashboard-header"
import { ArrowLeft, Calendar, LineChart, ClipboardList, Activity, TrendingUp, Clock } from "lucide-react"
import Link from "next/link"

export default function AthleteDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the athlete data based on the ID
  const athlete = {
    id: params.id,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=120&width=120",
    initials: "SJ",
    status: "Active",
    plan: "Marathon Training",
    nextRace: "City Marathon (3 days)",
    weeklyDistance: "42.5 km",
    trend: "up",
    compliance: "92%",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 123-4567",
    joinedDate: "January 15, 2025",
    goals: "Sub-3:30 marathon finish",
    notes: "Recovering from minor calf strain. Reduced mileage this week as precaution.",
  }

  return (
    <div className="flex-1 container py-6 space-y-6">
      <DashboardHeader
        heading={
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild className="mr-2">
              <Link href="/coaches/athletes">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <span>Athlete Profile</span>
          </div>
        }
        text={`Manage and track ${athlete.name}'s training`}
      >
        <div className="flex gap-2">
          <Button variant="outline">Message</Button>
          <Button>Assign Plan</Button>
        </div>
      </DashboardHeader>

      <div className="flex flex-col gap-6 md:flex-row">
        <Card className="md:flex-1">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center mb-6">
              <Avatar className="h-32 w-32 mb-4">
                <AvatarImage src={athlete.avatar || "/placeholder.svg"} alt={athlete.name} />
                <AvatarFallback>{athlete.initials}</AvatarFallback>
              </Avatar>
              <h2 className="text-2xl font-bold">{athlete.name}</h2>
              <Badge
                variant="outline"
                className={
                  athlete.status === "Active"
                    ? "mt-2 bg-green-50 text-green-700 border-green-200"
                    : athlete.status === "Injured"
                      ? "mt-2 bg-red-50 text-red-700 border-red-200"
                      : "mt-2 bg-yellow-50 text-yellow-700 border-yellow-200"
                }
              >
                {athlete.status}
              </Badge>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Contact Information</h3>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-medium">Email:</span> {athlete.email}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Phone:</span> {athlete.phone}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Joined:</span> {athlete.joinedDate}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Training Information</h3>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-medium">Current Plan:</span> {athlete.plan}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Next Race:</span> {athlete.nextRace}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Goals:</span> {athlete.goals}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Coach Notes</h3>
                <p className="text-sm">{athlete.notes}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="md:flex-1 space-y-6">
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="training">Training</TabsTrigger>
              <TabsTrigger value="activities">Activities</TabsTrigger>
              <TabsTrigger value="plans">Plans</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4 flex-wrap">
                <Card className="flex-1">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Weekly Distance</CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{athlete.weeklyDistance}</div>
                    <div className="flex items-center">
                      {athlete.trend === "up" ? (
                        <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      ) : (
                        <TrendingUp className="h-4 w-4 text-red-500 mr-1 rotate-180" />
                      )}
                      <p className="text-xs text-muted-foreground">+12.3% from last week</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="flex-1">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Compliance</CardTitle>
                    <ClipboardList className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{athlete.compliance}</div>
                    <p className="text-xs text-muted-foreground">Plan adherence rate</p>
                  </CardContent>
                </Card>
                <Card className="flex-1">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Next Workout</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Today</div>
                    <p className="text-xs text-muted-foreground">8km Easy Run</p>
                  </CardContent>
                </Card>
                <Card className="flex-1">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Training Load</CardTitle>
                    <LineChart className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Optimal</div>
                    <p className="text-xs text-muted-foreground">Well balanced</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                  <CardDescription>Latest training sessions and workouts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-start gap-4 rounded-lg border p-3">
                        <Avatar>
                          <AvatarImage src={`/placeholder-40px-height.png?height=40&width=40`} alt="Activity" />
                          <AvatarFallback>A</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold">
                              {i === 1 ? "Morning Run" : i === 2 ? "Interval Training" : "Long Run"}
                            </h4>
                            <Badge variant="secondary">Training</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {i === 1 ? "Today" : i === 2 ? "Yesterday" : "3 days ago"}
                          </p>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                            <span>{i === 1 ? "8.2 km" : i === 2 ? "5.5 km" : "18 km"}</span>
                            <span>{i === 1 ? "42:15" : i === 2 ? "32:10" : "1:42:30"}</span>
                            <span>{i === 1 ? "5:09 min/km" : i === 2 ? "5:51 min/km" : "5:41 min/km"}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="training" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Current Training Plan</CardTitle>
                  <CardDescription>Marathon Training - Advanced</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-3 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <h4 className="font-medium">Today - Easy Run</h4>
                        </div>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          <Clock className="mr-1 h-3 w-3" /> Today
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">8km at easy pace (6:00-6:30/km)</p>
                    </div>
                    <div className="border rounded-lg p-3 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <h4 className="font-medium">Tomorrow - Rest Day</h4>
                        </div>
                        <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                          Upcoming
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Active recovery or cross-training</p>
                    </div>
                    <div className="border rounded-lg p-3 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <h4 className="font-medium">Friday - Interval Training</h4>
                        </div>
                        <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                          Upcoming
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">8x400m repeats with 200m recovery jog</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="activities" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Activity Log</CardTitle>
                  <CardDescription>Complete training history</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Detailed activity log would go here</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="plans" className="space-y-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Training Plans</CardTitle>
                    <CardDescription>Assign and manage training plans</CardDescription>
                  </div>
                  <Button>Assign Plan</Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold">Marathon Training - Advanced</h3>
                            <Badge variant="default" className="mt-1">
                              Current
                            </Badge>
                            <p className="text-sm text-muted-foreground mt-2">
                              16-week plan for experienced runners targeting sub-3:30 marathon
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              View
                            </Button>
                            <Button size="sm" variant="outline">
                              Edit
                            </Button>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>Week 6 of 16</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-primary h-2.5 rounded-full" style={{ width: "37.5%" }}></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold">10K Improvement</h3>
                            <Badge variant="secondary" className="mt-1">
                              Previous
                            </Badge>
                            <p className="text-sm text-muted-foreground mt-2">
                              8-week plan to improve 10K time with speed work and tempo runs
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              View
                            </Button>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Completed</span>
                            <span>January 10, 2025</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-primary h-2.5 rounded-full w-full"></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
