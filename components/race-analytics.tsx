import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function RaceAnalytics() {
  return (
    <Tabs defaultValue="registrations" className="space-y-4">
      <div className="flex justify-between items-center">
        <TabsList>
          <TabsTrigger value="registrations">Registrations</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
        </TabsList>
        <Select defaultValue="citymarathon">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Race" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="citymarathon">City Marathon</SelectItem>
            <SelectItem value="charity10k">Charity 10K Run</SelectItem>
            <SelectItem value="trailhalf">Trail Half Marathon</SelectItem>
            <SelectItem value="corporate5k">Corporate 5K Challenge</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <TabsContent value="registrations" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Total Registrations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,542</div>
              <p className="text-xs text-muted-foreground">+23% from last year</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Registration Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85%</div>
              <p className="text-xs text-muted-foreground">Of capacity filled</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">New Participants</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42%</div>
              <p className="text-xs text-muted-foreground">First-time participants</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Conversion Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">68%</div>
              <p className="text-xs text-muted-foreground">Of page visitors register</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Registration Trend</CardTitle>
              <CardDescription>Daily registrations over time</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] flex items-center justify-center">
              <p className="text-muted-foreground">Registration trend chart would go here</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Category Distribution</CardTitle>
              <CardDescription>Registrations by race category</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] flex items-center justify-center">
              <p className="text-muted-foreground">Category distribution chart would go here</p>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="demographics">
        <Card>
          <CardHeader>
            <CardTitle>Participant Demographics</CardTitle>
            <CardDescription>Analyze participant age, gender, and location</CardDescription>
          </CardHeader>
          <CardContent className="h-[400px] flex items-center justify-center">
            <p className="text-muted-foreground">Demographics charts would go here</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="financial">
        <Card>
          <CardHeader>
            <CardTitle>Financial Analysis</CardTitle>
            <CardDescription>Revenue, expenses, and profitability</CardDescription>
          </CardHeader>
          <CardContent className="h-[400px] flex items-center justify-center">
            <p className="text-muted-foreground">Financial analysis charts would go here</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
