import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function CoachAnalytics() {
  return (
    <Tabs defaultValue="team" className="space-y-4">
      <div className="flex justify-between items-center">
        <TabsList>
          <TabsTrigger value="team">Team Overview</TabsTrigger>
          <TabsTrigger value="individual">Individual Athletes</TabsTrigger>
          <TabsTrigger value="plans">Plan Effectiveness</TabsTrigger>
        </TabsList>
        <Select defaultValue="4weeks">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Time Period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1week">Last Week</SelectItem>
            <SelectItem value="4weeks">Last 4 Weeks</SelectItem>
            <SelectItem value="3months">Last 3 Months</SelectItem>
            <SelectItem value="year">Last Year</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <TabsContent value="team" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Total Distance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">487.5 km</div>
              <p className="text-xs text-muted-foreground">+12.3% from previous period</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Training Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">124.5 hrs</div>
              <p className="text-xs text-muted-foreground">+8.7% from previous period</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Avg. Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">86.3%</div>
              <p className="text-xs text-muted-foreground">+2.1% from previous period</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Injury Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8.3%</div>
              <p className="text-xs text-muted-foreground">-1.5% from previous period</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Distance Trend</CardTitle>
              <CardDescription>Team distance over time</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] flex items-center justify-center">
              <p className="text-muted-foreground">Distance trend chart would go here</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Training Distribution</CardTitle>
              <CardDescription>Types of workouts completed</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] flex items-center justify-center">
              <p className="text-muted-foreground">Training distribution chart would go here</p>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="individual">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Individual Performance</CardTitle>
                <CardDescription>Compare metrics across athletes</CardDescription>
              </div>
              <Select defaultValue="distance">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Metric" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="distance">Distance</SelectItem>
                  <SelectItem value="pace">Pace</SelectItem>
                  <SelectItem value="compliance">Compliance</SelectItem>
                  <SelectItem value="improvement">Improvement</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent className="h-[400px] flex items-center justify-center">
            <p className="text-muted-foreground">Individual athlete comparison chart would go here</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="plans">
        <Card>
          <CardHeader>
            <CardTitle>Training Plan Effectiveness</CardTitle>
            <CardDescription>Compare outcomes across different training plans</CardDescription>
          </CardHeader>
          <CardContent className="h-[400px] flex items-center justify-center">
            <p className="text-muted-foreground">Training plan effectiveness chart would go here</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
