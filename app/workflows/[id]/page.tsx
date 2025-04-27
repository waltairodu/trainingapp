import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Separator } from "@/components/ui/separator"
import { WorkflowTimeline } from "@/components/workflow-timeline"
import { WorkflowComments } from "@/components/workflow-comments"
import { Clock, AlertCircle, CheckCircle2, ArrowLeft } from "lucide-react"

export default function WorkflowDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the workflow data based on the ID
  const workflow = {
    id: params.id,
    title: "Training Plan Approval",
    type: "Approval",
    description: "Coach Johnson has submitted a training plan for your approval",
    priority: "High",
    status: "Pending",
    createdBy: {
      name: "Coach Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "CJ",
    },
    assignedTo: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "JD",
    },
    createdAt: "2 days ago",
    dueDate: "Today",
    category: "Training",
    relatedItems: [
      {
        type: "Training Plan",
        id: "TP-1001",
        title: "Marathon Training - Advanced",
      },
      {
        type: "Athlete",
        id: "ATH-1002",
        title: "Sarah Johnson",
      },
    ],
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
    <DashboardShell>
      <DashboardHeader
        heading={
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild className="mr-2">
              <a href="/workflows">
                <ArrowLeft className="h-4 w-4" />
              </a>
            </Button>
            <span>Workflow: {workflow.id}</span>
          </div>
        }
        text={workflow.title}
      >
        <div className="flex gap-2">
          <Button variant="outline">Reassign</Button>
          <Button>Take Action</Button>
        </div>
      </DashboardHeader>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 md:flex-[2] space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Workflow Details</CardTitle>
              <CardDescription>{workflow.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="details" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="timeline">Timeline</TabsTrigger>
                  <TabsTrigger value="comments">Comments</TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium mb-2">Description</h3>
                      <p className="text-sm text-muted-foreground">{workflow.description}</p>
                    </div>
                    <Separator />
                    <div>
                      <h3 className="text-sm font-medium mb-2">Related Items</h3>
                      <ul className="space-y-2">
                        {workflow.relatedItems.map((item, index) => (
                          <li key={index} className="text-sm">
                            <span className="text-muted-foreground">{item.type}:</span>{" "}
                            <a href="#" className="text-primary hover:underline">
                              {item.title} ({item.id})
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="timeline">
                  <WorkflowTimeline />
                </TabsContent>
                <TabsContent value="comments">
                  <WorkflowComments />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="flex-1 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Status Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Status</span>
                <Badge
                  variant="outline"
                  className="bg-yellow-50 text-yellow-700 border-yellow-200 flex items-center gap-1"
                >
                  {getStatusIcon(workflow.status)}
                  {workflow.status}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Priority</span>
                {getPriorityBadge(workflow.priority)}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Category</span>
                <Badge variant="outline">{workflow.category}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Due Date</span>
                <span className="text-sm text-red-500 font-medium">{workflow.dueDate}</span>
              </div>
              <Separator />
              <div>
                <h3 className="text-sm font-medium mb-2">Created By</h3>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={workflow.createdBy.avatar || "/placeholder.svg"} alt={workflow.createdBy.name} />
                    <AvatarFallback>{workflow.createdBy.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{workflow.createdBy.name}</p>
                    <p className="text-xs text-muted-foreground">{workflow.createdAt}</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Assigned To</h3>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={workflow.assignedTo.avatar || "/placeholder.svg"}
                      alt={workflow.assignedTo.name}
                    />
                    <AvatarFallback>{workflow.assignedTo.initials}</AvatarFallback>
                  </Avatar>
                  <p className="text-sm font-medium">{workflow.assignedTo.name}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full">Approve</Button>
              <Button variant="outline" className="w-full">
                Request Changes
              </Button>
              <Button variant="destructive" className="w-full">
                Reject
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  )
}
