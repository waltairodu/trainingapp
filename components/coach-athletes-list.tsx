import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TrendingDown, TrendingUp } from "lucide-react"

interface CoachAthletesListProps {
  detailed?: boolean
}

export function CoachAthletesList({ detailed = false }: CoachAthletesListProps) {
  const athletes = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SJ",
      status: "Active",
      plan: "Marathon Training",
      nextRace: "City Marathon (3 days)",
      weeklyDistance: "42.5 km",
      trend: "up",
      compliance: "92%",
    },
    {
      id: 2,
      name: "Michael Brown",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MB",
      status: "Active",
      plan: "10K Improvement",
      nextRace: "Charity 10K (2 weeks)",
      weeklyDistance: "28.3 km",
      trend: "down",
      compliance: "78%",
    },
    {
      id: 3,
      name: "Emily Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "EC",
      status: "Injured",
      plan: "Recovery",
      nextRace: "None scheduled",
      weeklyDistance: "12.1 km",
      trend: "down",
      compliance: "100%",
    },
    {
      id: 4,
      name: "David Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "DW",
      status: "Active",
      plan: "Half Marathon",
      nextRace: "Trail Half Marathon (3 weeks)",
      weeklyDistance: "35.8 km",
      trend: "up",
      compliance: "85%",
    },
  ]

  if (detailed) {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Athlete</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Training Plan</TableHead>
            <TableHead>Next Race</TableHead>
            <TableHead>Weekly Distance</TableHead>
            <TableHead>Compliance</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {athletes.map((athlete) => (
            <TableRow key={athlete.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={athlete.avatar || "/placeholder.svg"} alt={athlete.name} />
                    <AvatarFallback>{athlete.initials}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{athlete.name}</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={
                    athlete.status === "Active"
                      ? "bg-green-50 text-green-700 border-green-200"
                      : athlete.status === "Injured"
                        ? "bg-red-50 text-red-700 border-red-200"
                        : "bg-yellow-50 text-yellow-700 border-yellow-200"
                  }
                >
                  {athlete.status}
                </Badge>
              </TableCell>
              <TableCell>{athlete.plan}</TableCell>
              <TableCell>{athlete.nextRace}</TableCell>
              <TableCell className="flex items-center gap-1">
                {athlete.weeklyDistance}
                {athlete.trend === "up" ? (
                  <TrendingUp className="h-4 w-4 text-green-500" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500" />
                )}
              </TableCell>
              <TableCell>{athlete.compliance}</TableCell>
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

  return (
    <div className="flex flex-col space-y-4">
      {athletes.map((athlete) => (
        <Card key={athlete.id} className="p-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={athlete.avatar || "/placeholder.svg"} alt={athlete.name} />
                <AvatarFallback>{athlete.initials}</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-medium">{athlete.name}</h4>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <Badge
                    variant="outline"
                    className={
                      athlete.status === "Active"
                        ? "bg-green-50 text-green-700 border-green-200"
                        : athlete.status === "Injured"
                          ? "bg-red-50 text-red-700 border-red-200"
                          : "bg-yellow-50 text-yellow-700 border-yellow-200"
                    }
                  >
                    {athlete.status}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{athlete.plan}</span>
                </div>
              </div>
            </div>
            <Button size="sm" variant="outline">
              View
            </Button>
          </div>
        </Card>
      ))}
    </div>
  )
}
