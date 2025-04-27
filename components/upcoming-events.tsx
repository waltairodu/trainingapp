import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Trophy } from "lucide-react"

export function UpcomingEvents() {
  const events = [
    {
      id: 1,
      title: "City Marathon",
      type: "Race",
      date: "May 15, 2025",
      location: "Downtown, City Center",
      distance: "42.2 km",
      status: "Registered",
    },
    {
      id: 2,
      title: "Team Training Session",
      type: "Training",
      date: "May 8, 2025",
      location: "City Park Track",
      distance: "10 km",
      status: "Upcoming",
    },
    {
      id: 3,
      title: "Hill Repeats Workshop",
      type: "Training",
      date: "May 10, 2025",
      location: "Highland Park",
      distance: "6 km",
      status: "Open Registration",
    },
  ]

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <div key={event.id} className="flex flex-col gap-2 rounded-lg border p-4">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="font-semibold">{event.title}</h4>
              <Badge variant={event.type === "Race" ? "default" : "secondary"} className="mt-1">
                {event.type}
              </Badge>
            </div>
            <Badge variant="outline">{event.status}</Badge>
          </div>
          <div className="flex flex-col space-y-1">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Trophy className="h-4 w-4 text-muted-foreground" />
              <span>{event.distance}</span>
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-2">
            <Button size="sm" variant="outline">
              Details
            </Button>
            {event.status === "Open Registration" && <Button size="sm">Register</Button>}
          </div>
        </div>
      ))}
    </div>
  )
}
