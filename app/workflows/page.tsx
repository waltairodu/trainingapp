import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { WorkflowList } from "@/components/workflow-list"
import { WorkflowKanban } from "@/components/workflow-kanban"

export default function WorkflowsPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Workflow Management"
        text="Manage tasks, approvals, and processes with ServiceNow-inspired workflows."
      >
        <Button>Create Workflow</Button>
      </DashboardHeader>
      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="assigned">Assigned to Me</TabsTrigger>
          <TabsTrigger value="created">Created by Me</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Workflows</CardTitle>
              <CardDescription>All currently active workflow items in the system.</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="list">
                <TabsList className="mb-4">
                  <TabsTrigger value="list">List View</TabsTrigger>
                  <TabsTrigger value="kanban">Kanban View</TabsTrigger>
                </TabsList>
                <TabsContent value="list">
                  <WorkflowList />
                </TabsContent>
                <TabsContent value="kanban">
                  <WorkflowKanban />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="assigned" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Assigned to Me</CardTitle>
              <CardDescription>Workflow items that require your attention.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Workflows assigned to you will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="created" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Created by Me</CardTitle>
              <CardDescription>Workflow items you have initiated.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Workflows you created will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="completed" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Completed Workflows</CardTitle>
              <CardDescription>Historical record of completed workflow items.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Completed workflows will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
