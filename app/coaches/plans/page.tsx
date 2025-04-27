import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { CoachTrainingPlans } from "@/components/coach-training-plans"

export default function CoachPlansPage() {
  return (
    <div className="flex-1 container py-6 space-y-6">
      <DashboardHeader heading="Training Plans" text="Create and manage training plans for your athletes.">
        <Button>Create Plan</Button>
      </DashboardHeader>
      <Tabs defaultValue="plans" className="space-y-4">
        <TabsList>
          <TabsTrigger value="plans">Plans</TabsTrigger>
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>
        <TabsContent value="plans" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Training Plans</CardTitle>
              <CardDescription>Manage your custom training plans.</CardDescription>
            </CardHeader>
            <CardContent>
              <CoachTrainingPlans />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="assignments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Plan Assignments</CardTitle>
              <CardDescription>Manage athlete assignments to training plans.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Plan assignments will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Plan Templates</CardTitle>
              <CardDescription>Reusable training plan templates.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4">
                <Card className="flex-1">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">5K for Beginners</h3>
                        <p className="text-sm text-muted-foreground mt-1">8-week plan for new runners</p>
                      </div>
                      <Button size="sm" variant="outline">
                        Use Template
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="flex-1">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">Marathon Advanced</h3>
                        <p className="text-sm text-muted-foreground mt-1">16-week plan for experienced runners</p>
                      </div>
                      <Button size="sm" variant="outline">
                        Use Template
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
