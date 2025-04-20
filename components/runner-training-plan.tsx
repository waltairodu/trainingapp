import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, CheckCircle, Clock, AlertCircle } from "lucide-react"

export function RunnerTrainingPlan() {
  const weeklyPlan = [
    {
      day: "Monday",
      workout: "Easy Run",
      description: "5km at easy pace (6:00-6:30/km)",
      status: "completed",
      date: "May 1, 2025",
    },
    {
      day: "Tuesday",
      workout: "Rest Day",
      description: "Active recovery or cross-training",
      status: "completed",
      date: "May 2, 2025",
    },
    {
      day: "Wednesday",
      workout: "Interval Training",
      description: "8x400m repeats with 200m recovery jog",
      status: "completed",
      date: "May 3, 2025",
    },
    {
      day: "Thursday",
      workout: "Easy Run",
      description: "6km at easy pace (6:00-6:30/km)",
      status: "today",
      date: "May 4, 2025",
    },
    {
      day: "Friday",
      workout: "Rest Day",
      description: "Active recovery or cross-training",
      status: "upcoming",
      date: "May 5, 2025",
    },
    {
      day: "Saturday",
      workout: "Tempo Run",
      description: "2km warm-up, 4km at tempo pace (5:00-5:15/km), 2km cool-down",
      status: "upcoming",
      date: "May 6, 2025",
    },
    {
      day: "Sunday",
      workout: "Long Run",
      description: "12km at easy pace (6:00-6:30/km)",
      status: "upcoming",
      date: "May 7, 2025",
    },
  ]

  const getStatusBadge = (status) => {
    switch (status) {
      case "completed":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <CheckCircle className="mr-1 h-3 w-3" /> Completed
          </Badge>
        )
      case "today":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            <Clock className="mr-1 h-3 w-3" /> Today
          </Badge>
        )
      case "upcoming":
        return (
          <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
            Upcoming
          </Badge>
        )
      case "missed":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            <AlertCircle className="mr-1 h-3 w-3" /> Missed
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Training Plan</CardTitle>
          <Badge variant="outline">City Marathon Prep</Badge>
        </div>
        <CardDescription>Your personalized training schedule</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="weekly" className="space-y-4">
          <TabsList>
            <TabsTrigger value="weekly">Weekly Plan</TabsTrigger>
            <TabsTrigger value="monthly">Monthly View</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
          </TabsList>
          <TabsContent value="weekly" className="space-y-4">
            {weeklyPlan.map((day, index) => (
              <div key={index} className="border rounded-lg p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <h4 className="font-medium">
                      {day.day} - {day.workout}
                    </h4>
                  </div>
                  {getStatusBadge(day.status)}
                </div>
                <p className="text-sm text-muted-foreground">{day.description}</p>
                {day.status === "today" && (
                  <div className="flex gap-2 mt-2">
                    <Button size="sm">Start Workout</Button>
                    <Button size="sm" variant="outline">
                      Log Manually
                    </Button>
                  </div>
                )}
                {day.status === "completed" && (
                  <div className="flex gap-2 mt-2">
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </TabsContent>
          <TabsContent value="monthly">
            <div className="h-[400px] flex items-center justify-center border rounded-lg">
              <p className="text-muted-foreground">Monthly calendar view would go here</p>
            </div>
          </TabsContent>
          <TabsContent value="progress">
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">Training Progress</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Weekly Distance</span>
                      <span>32.2 / 40 km</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Workouts Completed</span>
                      <span>3 / 7</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: "43%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Overall Plan Progress</span>
                      <span>65%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
