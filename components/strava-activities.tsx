"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getStravaActivities, type StravaActivity, formatDistance, formatTime, formatPace } from "@/lib/strava"
import { Clock, TrendingUp, Activity, BarChart } from "lucide-react"

export function StravaActivities() {
  const [activities, setActivities] = useState<StravaActivity[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchActivities() {
      try {
        const data = await getStravaActivities()
        setActivities(data)
      } catch (error) {
        console.error("Failed to fetch Strava activities:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchActivities()
  }, [])

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/strava-logo.svg" alt="Strava" className="h-5 w-5" />
            <CardTitle>Strava Activities</CardTitle>
          </div>
          <Button variant="outline" size="sm">
            Sync Now
          </Button>
        </div>
        <CardDescription>Your recent activities from Strava</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="list" className="space-y-4">
          <TabsList>
            <TabsTrigger value="list">List</TabsTrigger>
            <TabsTrigger value="stats">Stats</TabsTrigger>
          </TabsList>
          <TabsContent value="list" className="space-y-4">
            {loading ? (
              <div className="flex justify-center p-4">
                <p>Loading activities...</p>
              </div>
            ) : activities.length > 0 ? (
              <div className="space-y-4">
                {activities.map((activity) => (
                  <div key={activity.id} className="border rounded-lg p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{activity.name}</h4>
                      <Badge variant="outline">{activity.type}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {new Date(activity.start_date).toLocaleDateString()} at{" "}
                      {new Date(activity.start_date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                      <div className="flex items-center gap-1 text-sm">
                        <Activity className="h-4 w-4 text-muted-foreground" />
                        <span>{formatDistance(activity.distance)}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{formatTime(activity.moving_time)}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <BarChart className="h-4 w-4 text-muted-foreground" />
                        <span>{formatPace(activity.distance, activity.moving_time)}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        <span>{activity.total_elevation_gain}m</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center p-4">
                <p>No activities found</p>
              </div>
            )}
          </TabsContent>
          <TabsContent value="stats">
            <div className="space-y-4">
              <div className="grid gap-4 grid-cols-2">
                <Card>
                  <CardHeader className="p-3">
                    <CardTitle className="text-sm">Weekly Distance</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 pt-0">
                    <div className="text-2xl font-bold">
                      {formatDistance(activities.reduce((sum, activity) => sum + activity.distance, 0))}
                    </div>
                    <p className="text-xs text-muted-foreground">Last 7 days</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-3">
                    <CardTitle className="text-sm">Weekly Time</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 pt-0">
                    <div className="text-2xl font-bold">
                      {formatTime(activities.reduce((sum, activity) => sum + activity.moving_time, 0))}
                    </div>
                    <p className="text-xs text-muted-foreground">Last 7 days</p>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardHeader className="p-3">
                  <CardTitle className="text-sm">Activity Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <div className="h-40 flex items-center justify-center">
                    <p className="text-sm text-muted-foreground">Activity chart would go here</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
