import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { RunnerTrainingPlan } from "@/components/runner-training-plan"

export default function RunnerTrainingPage() {
  return (
    <div className="flex-1 container py-6 space-y-6">
      <DashboardHeader heading="Training Plans" text="View and follow your personalized training plans.">
        <Button>Request Plan</Button>
      </DashboardHeader>
      <Tabs defaultValue="current" className="space-y-4">
        <TabsList>
          <TabsTrigger value="current">Current Plan</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="library">Plan Library</TabsTrigger>
        </TabsList>
        <TabsContent value="current" className="space-y-4">
          <RunnerTrainingPlan />
        </TabsContent>
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Training History</CardTitle>
              <CardDescription>Your past training plans and progress.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">10K Improvement Plan</h3>
                        <p className="text-sm text-muted-foreground">Jan 15 - Mar 12, 2025</p>
                      </div>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Completion</span>
                        <span>100%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full w-full"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">Half Marathon Base Building</h3>
                        <p className="text-sm text-muted-foreground">Oct 5 - Dec 28, 2024</p>
                      </div>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Completion</span>
                        <span>92%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: "92%" }}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="library" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Training Plan Library</CardTitle>
              <CardDescription>Browse available training plans.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4">
                <Card className="flex-1">
                  <CardContent className="p-4">
                    <h3 className="font-semibold">5K for Beginners</h3>
                    <p className="text-sm text-muted-foreground mt-1">8-week plan for new runners</p>
                    <div className="mt-4 flex justify-end">
                      <Button size="sm">Request Plan</Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="flex-1">
                  <CardContent className="p-4">
                    <h3 className="font-semibold">Marathon Advanced</h3>
                    <p className="text-sm text-muted-foreground mt-1">16-week plan for experienced runners</p>
                    <div className="mt-4 flex justify-end">
                      <Button size="sm">Request Plan</Button>
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
