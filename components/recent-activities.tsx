import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function RecentActivities() {
  const activities = [
    {
      id: 1,
      type: "Training",
      title: "Morning Run",
      date: "Today, 6:30 AM",
      distance: "8.2 km",
      duration: "42:15",
      pace: "5:09 min/km",
      status: "Completed",
    },
    {
      id: 2,
      type: "Race",
      title: "Weekend 10K",
      date: "Yesterday",
      distance: "10 km",
      duration: "47:32",
      pace: "4:45 min/km",
      status: "Completed",
    },
    {
      id: 3,
      type: "Training",
      title: "Interval Training",
      date: "2 days ago",
      distance: "5.5 km",
      duration: "32:10",
      pace: "5:51 min/km",
      status: "Completed",
    },
    {
      id: 4,
      type: "Training",
      title: "Long Run",
      date: "4 days ago",
      distance: "18 km",
      duration: "1:42:30",
      pace: "5:41 min/km",
      status: "Completed",
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-4 rounded-lg border p-3">
          <Avatar>
            <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={activity.title} />
            <AvatarFallback>{activity.type.substring(0, 1)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-2">
              <h4 className="font-semibold">{activity.title}</h4>
              <Badge variant={activity.type === "Race" ? "default" : "secondary"}>{activity.type}</Badge>
            </div>
            <p className="text-sm text-muted-foreground">{activity.date}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
              <span>{activity.distance}</span>
              <span>{activity.duration}</span>
              <span>{activity.pace}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
