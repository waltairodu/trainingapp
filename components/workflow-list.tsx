import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function WorkflowList() {
  const workflows = [
    {
      id: "WF-1001",
      title: "Training Plan Approval",
      type: "Approval",
      priority: "High",
      status: "Pending",
      assignee: {
        name: "John Doe",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "JD",
      },
      created: "2 days ago",
      dueDate: "Today",
    },
    {
      id: "WF-1002",
      title: "Race Registration Confirmation",
      type: "Task",
      priority: "Medium",
      status: "In Progress",
      assignee: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "SJ",
      },
      created: "3 days ago",
      dueDate: "Tomorrow",
    },
    {
      id: "WF-1003",
      title: "Equipment Request",
      type: "Request",
      priority: "Low",
      status: "Pending",
      assignee: {
        name: "Mike Smith",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "MS",
      },
      created: "1 week ago",
      dueDate: "Next week",
    },
    {
      id: "WF-1004",
      title: "Team Meeting Schedule",
      type: "Task",
      priority: "Medium",
      status: "Not Started",
      assignee: {
        name: "Emily Chen",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "EC",
      },
      created: "2 days ago",
      dueDate: "In 3 days",
    },
    {
      id: "WF-1005",
      title: "Race Result Verification",
      type: "Approval",
      priority: "High",
      status: "In Progress",
      assignee: {
        name: "John Doe",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "JD",
      },
      created: "Yesterday",
      dueDate: "Today",
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

  const getStatusBadge = (status) => {
    switch (status) {
      case "Pending":
        return (
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
            Pending
          </Badge>
        )
      case "In Progress":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            In Progress
          </Badge>
        )
      case "Not Started":
        return (
          <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
            Not Started
          </Badge>
        )
      case "Completed":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Completed
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[40px]">
            <Checkbox />
          </TableHead>
          <TableHead>Workflow</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Priority</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Assignee</TableHead>
          <TableHead>Due Date</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {workflows.map((workflow) => (
          <TableRow key={workflow.id}>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>
              <div className="font-medium">{workflow.title}</div>
              <div className="text-sm text-muted-foreground">{workflow.id}</div>
            </TableCell>
            <TableCell>{workflow.type}</TableCell>
            <TableCell>{getPriorityBadge(workflow.priority)}</TableCell>
            <TableCell>{getStatusBadge(workflow.status)}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={workflow.assignee.avatar} alt={workflow.assignee.name} />
                  <AvatarFallback>{workflow.assignee.initials}</AvatarFallback>
                </Avatar>
                <span className="text-sm">{workflow.assignee.name}</span>
              </div>
            </TableCell>
            <TableCell>{workflow.dueDate}</TableCell>
            <TableCell className="text-right">
              <Button size="sm" variant="ghost">
                View
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
