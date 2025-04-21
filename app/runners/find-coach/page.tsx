import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DashboardHeader } from "@/components/dashboard-header"
import { CoachSearchResults } from "@/components/coach-search-results"
import { Search, Filter } from "lucide-react"

export default function FindCoachPage() {
  return (
    <div className="flex-1 container py-6 space-y-6">
      <DashboardHeader heading="Find a Coach" text="Search and connect with running coaches that match your goals." />

      <Card>
        <CardHeader>
          <CardTitle>Search Filters</CardTitle>
          <CardDescription>Refine your search to find the perfect coach.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search by name, specialty, or location..." className="pl-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select defaultValue="any">
                <SelectTrigger>
                  <SelectValue placeholder="Specialty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Specialty</SelectItem>
                  <SelectItem value="marathon">Marathon</SelectItem>
                  <SelectItem value="trail">Trail Running</SelectItem>
                  <SelectItem value="track">Track & Field</SelectItem>
                  <SelectItem value="ultra">Ultramarathon</SelectItem>
                  <SelectItem value="beginner">Beginner Friendly</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="any">
                <SelectTrigger>
                  <SelectValue placeholder="Experience Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Experience</SelectItem>
                  <SelectItem value="beginner">Beginner (0-2 years)</SelectItem>
                  <SelectItem value="intermediate">Intermediate (3-5 years)</SelectItem>
                  <SelectItem value="advanced">Advanced (5+ years)</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="any">
                <SelectTrigger>
                  <SelectValue placeholder="Availability" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Availability</SelectItem>
                  <SelectItem value="accepting">Currently Accepting</SelectItem>
                  <SelectItem value="waitlist">Waitlist Available</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-end">
              <Button>
                <Filter className="mr-2 h-4 w-4" />
                Apply Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <CoachSearchResults />
    </div>
  )
}
