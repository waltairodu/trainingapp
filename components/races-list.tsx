import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Trophy, Users } from "lucide-react"

export function RacesList() {
  const races = [
    {
      id: 1,
      title: "City Marathon",
      date: "May 15, 2025",
      location: "Downtown, City Center",
      distance: "42.2 km",
      participants: 1500,
      status: "Open Registration",
      featured: true,
    },
    {
      id: 2,
      title: "Charity 10K Run",
      date: "June 5, 2025",
      location: "Riverside Park",
      distance: "10 km",
      participants: 800,
      status: "Open Registration",
      featured: false,
    },
    {
      id: 3,
      title: "Trail Half Marathon",
      date: "June 20, 2025",
      location: "Mountain National Park",
      distance: "21.1 km",
      participants: 350,
      status: "Open Registration",
      featured: true,
    },
    {
      id: 4,
      title: "Corporate 5K Challenge",
      date: "July 10, 2025",
      location: "Business District",
      distance: "5 km",
      participants: 1200,
      status: "Coming Soon",
      featured: false,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {races.map((race) => (
        <Card key={race.id} className={race.featured ? "border-primary" : ""}>
          <CardContent className="p-4">
            <div className="flex flex-col gap-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">{race.title}</h3>
                  {race.featured && (
                    <Badge variant="default" className="mt-1">
                      Featured
                    </Badge>
                  )}
                </div>
                <Badge variant="outline">{race.status}</Badge>
              </div>
              <div className="grid gap-1 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{race.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{race.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Trophy className="h-4 w-4 text-muted-foreground" />
                  <span>{race.distance}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{race.participants} participants</span>
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-2">
                <Button size="sm" variant="outline">
                  Details
                </Button>
                {race.status === "Open Registration" && <Button size="sm">Register</Button>}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
