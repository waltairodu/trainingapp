import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, Users } from "lucide-react"

export function CoachTrainingPlans() {
  const plans = [
    {
      id: 1,
      title: "Marathon Training - Advanced",
      description: "16-week plan for experienced runners targeting sub-3:30 marathon",
      duration: "16 weeks",
      workoutsPerWeek: 5,
      athletes: 3,
      status: "Active",
    },
    {
      id: 2,
      title: "10K Improvement",
      description: "8-week plan to improve 10K time with speed work and tempo runs",
      duration: "8 weeks",
      workoutsPerWeek: 4,
      athletes: 2,
      status: "Active",
    },
    {
      id: 3,
      title: "Recovery Program",
      description: "4-week plan for athletes returning from injury",
      duration: "4 weeks",
      workoutsPerWeek: 3,
      athletes: 1,
      status: "Active",
    },
    {
      id: 4,
      title: "Half Marathon - Beginner",
      description: "12-week plan for first-time half marathon runners",
      duration: "12 weeks",
      workoutsPerWeek: 4,
      athletes: 0,
      status: "Draft",
    },
  ]

  const assignments = [
    {
      id: 1,
      planId: 1,
      athleteName: "Sarah Johnson",
      athleteAvatar: "/placeholder.svg?height=32&width=32",
      athleteInitials: "SJ",
      progress: "75%",
      startDate: "March 1, 2025",
      endDate: "June 20, 2025",
      targetRace: "City Marathon",
    },
    {
      id: 2,
      planId: 2,
      athleteName: "Michael Brown",
      athleteAvatar: "/placeholder.svg?height=32&width=32",
      athleteInitials: "MB",
      progress: "50%",
      startDate: "April 10, 2025",
      endDate: "June 5, 2025",
      targetRace: "Charity 10K",
    },
    {
      id: 3,
      planId: 3,
      athleteName: "Emily Chen",
      athleteAvatar: "/placeholder.svg?height=32&width=32",
      athleteInitials: "EC",
      progress: "25%",
      startDate: "April 15, 2025",
      endDate: "May 13, 2025",
      targetRace: "None",
    },
  ]

  return (
    <Tabs defaultValue="plans" className="space-y-4">
      <TabsList>
        <TabsTrigger value="plans">Training Plans</TabsTrigger>
        <TabsTrigger value="assignments">Assignments</TabsTrigger>
      </TabsList>
      <TabsContent value="plans" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          {plans.map((plan) => (
            <Card key={plan.id}>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{plan.title}</h3>
                      <Badge
                        variant="outline"
                        className={
                          plan.status === "Active"
                            ? "mt-1 bg-green-50 text-green-700 border-green-200"
                            : "mt-1 bg-yellow-50 text-yellow-700 border-yellow-200"
                        }
                      >
                        {plan.status}
                      </Badge>
                    </div>
                    <Button size="sm" variant="outline">
                      Edit
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{plan.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{plan.workoutsPerWeek}/week</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{plan.athletes} athletes</span>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 mt-2">
                    <Button size="sm">Assign</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="assignments" className="space-y-4">
        <div className="space-y-4">
          {assignments.map((assignment) => (
            <Card key={assignment.id}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={assignment.athleteAvatar || "/placeholder.svg"} alt={assignment.athleteName} />
                      <AvatarFallback>{assignment.athleteInitials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{assignment.athleteName}</h4>
                      <p className="text-sm text-muted-foreground">
                        {plans.find((plan) => plan.id === assignment.planId)?.title}
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline">Progress: {assignment.progress}</Badge>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Start Date:</span> {assignment.startDate}
                    </div>
                    <div>
                      <span className="text-muted-foreground">End Date:</span> {assignment.endDate}
                    </div>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Target Race:</span> {assignment.targetRace}
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: assignment.progress }}></div>
                  </div>
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                  <Button size="sm">Adjust Plan</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}
