import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PlusCircle } from "lucide-react"

export function WorkflowKanban() {
  const columns = [
    {
      id: "not-started",
      title: "Not Started",
      items: [
        {
          id: "WF-1004",
          title: "Team Meeting Schedule",
          type: "Task",
          priority: "Medium",
          assignee: {
            name: "Emily Chen",
            avatar: "/placeholder.svg?height=32&width=32",
            initials: "EC",
          },
          dueDate: "In 3 days",
        },
      ],
    },
    {
      id: "in-progress",
      title: "In Progress",
      items: [
        {
          id: "WF-1002",
          title: "Race Registration Confirmation",
          type: "Task",
          priority: "Medium",
          assignee: {
            name: "Sarah Johnson",
            avatar: "/placeholder.svg?height=32&width=32",
            initials: "SJ",
          },
          dueDate: "Tomorrow",
        },
        {
          id: "WF-1005",
          title: "Race Result Verification",
          type: "Approval",
          priority: "High",
          assignee: {
            name: "John Doe",
            avatar: "/placeholder.svg?height=32&width=32",
            initials: "JD",
          },
          dueDate: "Today",
        },
      ],
    },
    {
      id: "pending",
      title: "Pending",
      items: [
        {
          id: "WF-1001",
          title: "Training Plan Approval",
          type: "Approval",
          priority: "High",
          assignee: {
            name: "John Doe",
            avatar: "/placeholder.svg?height=32&width=32",
            initials: "JD",
          },
          dueDate: "Today",
        },
        {
          id: "WF-1003",
          title: "Equipment Request",
          type: "Request",
          priority: "Low",
          assignee: {
            name: "Mike Smith",
            avatar: "/placeholder.svg?height=32&width=32",
            initials: "MS",
          },
          dueDate: "Next week",
        },
      ],
    },
    {
      id: "completed",
      title: "Completed",
      items: [],
    },
  ]

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "High":
        return <Badge variant="destructive">{priority}</Badge>
      case "Medium":
        return <Badge variant="default">{priority}</Badge>
      case "Low":
        return <Badge variant="secondary">{priority}</Badge>
      default:
        return null
    }
  }

  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {columns.map((column) => (
        <div key={column.id} className="flex-shrink-0 w-72">
          <Card>
            <CardHeader className="py-3">
              <CardTitle className="text-sm font-medium flex justify-between items-center">
                {column.title}
                <Badge variant="outline">{column.items.length}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-2 pb-2">
              <Button variant="ghost" className="w-full justify-start text-muted-foreground mb-2">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Item
              </Button>
              <div className="space-y-2">
                {column.items.map((item) => (
                  <Card key={item.id} className="p-3">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{item.type}</Badge>
                        {getPriorityBadge(item.priority)}
                      </div>
                      <h4 className="font-semibold text-sm">{item.title}</h4>
                      <div className="text-xs text-muted-foreground">{item.id}</div>
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={item.assignee.avatar} alt={item.assignee.name} />
                            <AvatarFallback>{item.assignee.initials}</AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="text-xs">Due: {item.dueDate}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}
