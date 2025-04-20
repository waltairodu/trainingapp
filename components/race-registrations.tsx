import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface RaceRegistrationsProps {
  detailed?: boolean
}

export function RaceRegistrations({ detailed = false }: RaceRegistrationsProps) {
  const registrations = [
    {
      id: "REG-1001",
      participant: {
        name: "John Smith",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "JS",
        email: "john.smith@example.com",
      },
      race: "City Marathon",
      category: "Marathon - Men 30-39",
      registrationDate: "April 28, 2025",
      status: "Confirmed",
      bibNumber: "M-1234",
    },
    {
      id: "REG-1002",
      participant: {
        name: "Emma Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "EJ",
        email: "emma.johnson@example.com",
      },
      race: "City Marathon",
      category: "Marathon - Women 20-29",
      registrationDate: "April 27, 2025",
      status: "Confirmed",
      bibNumber: "M-1235",
    },
    {
      id: "REG-1003",
      participant: {
        name: "Michael Chen",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "MC",
        email: "michael.chen@example.com",
      },
      race: "City Marathon",
      category: "Half Marathon - Men 40-49",
      registrationDate: "April 26, 2025",
      status: "Pending Payment",
      bibNumber: "H-2345",
    },
    {
      id: "REG-1004",
      participant: {
        name: "Sarah Wilson",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "SW",
        email: "sarah.wilson@example.com",
      },
      race: "Charity 10K Run",
      category: "10K - Women 30-39",
      registrationDate: "April 25, 2025",
      status: "Confirmed",
      bibNumber: "10K-3456",
    },
  ]

  const getStatusBadge = (status) => {
    switch (status) {
      case "Confirmed":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Confirmed
          </Badge>
        )
      case "Pending Payment":
        return (
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
            Pending Payment
          </Badge>
        )
      case "Cancelled":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            Cancelled
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  if (detailed) {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Registration ID</TableHead>
            <TableHead>Participant</TableHead>
            <TableHead>Race</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Registration Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Bib #</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {registrations.map((registration) => (
            <TableRow key={registration.id}>
              <TableCell className="font-medium">{registration.id}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={registration.participant.avatar || "/placeholder.svg"}
                      alt={registration.participant.name}
                    />
                    <AvatarFallback>{registration.participant.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{registration.participant.name}</div>
                    <div className="text-xs text-muted-foreground">{registration.participant.email}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{registration.race}</TableCell>
              <TableCell>{registration.category}</TableCell>
              <TableCell>{registration.registrationDate}</TableCell>
              <TableCell>{getStatusBadge(registration.status)}</TableCell>
              <TableCell>{registration.bibNumber}</TableCell>
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
    <div className="space-y-4">
      {registrations.slice(0, 3).map((registration) => (
        <Card key={registration.id} className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage
                  src={registration.participant.avatar || "/placeholder.svg"}
                  alt={registration.participant.name}
                />
                <AvatarFallback>{registration.participant.initials}</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-medium">{registration.participant.name}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-muted-foreground">{registration.race}</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{registration.category}</span>
                </div>
              </div>
            </div>
            {getStatusBadge(registration.status)}
          </div>
        </Card>
      ))}
    </div>
  )
}
