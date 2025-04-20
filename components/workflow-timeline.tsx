import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function WorkflowTimeline() {
  const timelineEvents = [
    {
      id: 1,
      type: "created",
      description: "Workflow created",
      user: {
        name: "Coach Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "CJ",
      },
      timestamp: "May 2, 2025 at 10:23 AM",
    },
    {
      id: 2,
      type: "assigned",
      description: "Assigned to John Doe",
      user: {
        name: "System",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "SYS",
      },
      timestamp: "May 2, 2025 at 10:24 AM",
    },
    {
      id: 3,
      type: "comment",
      description: "Added comment: 'Please review this training plan for Sarah's upcoming marathon.'",
      user: {
        name: "Coach Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "CJ",
      },
      timestamp: "May 2, 2025 at 10:30 AM",
    },
    {
      id: 4,
      type: "viewed",
      description: "Workflow viewed",
      user: {
        name: "John Doe",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "JD",
      },
      timestamp: "May 3, 2025 at 9:15 AM",
    },
  ]

  const getEventBadge = (type) => {
    switch (type) {
      case "created":
        return <Badge variant="outline">Created</Badge>
      case "assigned":
        return <Badge variant="outline">Assigned</Badge>
      case "comment":
        return <Badge variant="outline">Comment</Badge>
      case "viewed":
        return <Badge variant="outline">Viewed</Badge>
      case "updated":
        return <Badge variant="outline">Updated</Badge>
      case "completed":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Completed
          </Badge>
        )
      default:
        return <Badge variant="outline">{type}</Badge>
    }
  }

  return (
    <div className="space-y-4">
      {timelineEvents.map((event) => (
        <div key={event.id} className="flex gap-4">
          <div className="flex flex-col items-center">
            <Avatar className="h-8 w-8">
              <AvatarImage src={event.user.avatar || "/placeholder.svg"} alt={event.user.name} />
              <AvatarFallback>{event.user.initials}</AvatarFallback>
            </Avatar>
            <div className="w-0.5 h-full bg-border mt-2"></div>
          </div>
          <div className="flex-1 pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">{event.user.name}</span>
                {getEventBadge(event.type)}
              </div>
              <span className="text-xs text-muted-foreground">{event.timestamp}</span>
            </div>
            <p className="text-sm mt-1">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
