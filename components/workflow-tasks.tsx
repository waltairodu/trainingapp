import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, CheckCircle2, AlertCircle } from "lucide-react"

export function WorkflowTasks() {
  const tasks = [
    {
      id: 1,
      title: "Training Plan Approval",
      description: "Coach Johnson has submitted a training plan for your approval",
      priority: "High",
      dueDate: "Today",
      status: "Pending",
    },
    {
      id: 2,
      title: "Race Registration",
      description: "Complete your registration for City Marathon",
      priority: "Medium",
      dueDate: "Tomorrow",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Team Meeting",
      description: "Weekly team sync with Coach and teammates",
      priority: "Low",
      dueDate: "In 2 days",
      status: "Not Started",
    },
  ]

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "High":
        return (
          <Badge variant="destructive" className="ml-2">
            {priority}
          </Badge>
        )
      case "Medium":
        return (
          <Badge variant="default" className="ml-2">
            {priority}
          </Badge>
        )
      case "Low":
        return (
          <Badge variant="secondary" className="ml-2">
            {priority}
          </Badge>
        )
      default:
        return null
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "Pending":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "In Progress":
        return <Clock className="h-4 w-4 text-blue-500" />
      case "Not Started":
        return <AlertCircle className="h-4 w-4 text-gray-500" />
      case "Completed":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div key={task.id} className="flex flex-col gap-2 rounded-lg border p-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center">
              {getStatusIcon(task.status)}
              <h4 className="ml-2 font-semibold">{task.title}</h4>
              {getPriorityBadge(task.priority)}
            </div>
            <Badge variant="outline">{task.status}</Badge>
          </div>
          <p className="text-sm text-muted-foreground">{task.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Due: {task.dueDate}</span>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                View
              </Button>
              <Button size="sm">Action</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
