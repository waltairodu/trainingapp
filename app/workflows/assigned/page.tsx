import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { WorkflowList } from "@/components/workflow-list"

export default function WorkflowsAssignedPage() {
  return (
    <div className="flex-1 container py-6 space-y-6">
      <DashboardHeader heading="Assigned Workflows" text="Workflow items that require your attention." />
      <Tabs defaultValue="pending" className="space-y-4">
        <TabsList>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pending Workflows</CardTitle>
              <CardDescription>Items waiting for your action.</CardDescription>
            </CardHeader>
            <CardContent>
              <WorkflowList />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="in-progress" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>In Progress Workflows</CardTitle>
              <CardDescription>Items you're currently working on.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>In progress workflows will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="completed" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Completed Workflows</CardTitle>
              <CardDescription>Items you've already actioned.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Completed workflows will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
