"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, MapPin, Users, Award } from "lucide-react"
import Link from "next/link"

export function CoachSearchResults() {
  // Mock data for coaches
  const coaches = [
    {
      id: "coach-1",
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=80&width=80",
      initials: "SJ",
      specialty: "Marathon",
      location: "Boston, MA",
      experience: "8 years",
      rating: 4.9,
      reviews: 42,
      athletes: 15,
      accepting: true,
      certifications: ["USATF Level 2", "RRCA"],
      bio: "Experienced marathon coach specializing in helping runners achieve their personal best. Former elite runner with multiple Boston Marathon finishes.",
    },
    {
      id: "coach-2",
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=80&width=80",
      initials: "MC",
      specialty: "Trail Running",
      location: "Portland, OR",
      experience: "6 years",
      rating: 4.7,
      reviews: 28,
      athletes: 12,
      accepting: true,
      certifications: ["RRCA", "NASM-CPT"],
      bio: "Trail running specialist with expertise in ultra preparation and technical terrain. Passionate about helping runners connect with nature while achieving their goals.",
    },
    {
      id: "coach-3",
      name: "Emily Rodriguez",
      avatar: "/placeholder.svg?height=80&width=80",
      initials: "ER",
      specialty: "5K/10K",
      location: "Chicago, IL",
      experience: "5 years",
      rating: 4.8,
      reviews: 36,
      athletes: 20,
      accepting: false,
      certifications: ["USATF Level 1", "ACE-CPT"],
      bio: "Focused on helping runners improve their speed and performance in shorter distances. Specializes in track workouts and race strategy for 5K and 10K events.",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Results ({coaches.length})</h2>
        <Select defaultValue="rating">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="experience">Most Experienced</SelectItem>
            <SelectItem value="athletes">Most Athletes</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col space-y-4">
        {coaches.map((coach) => (
          <Card key={coach.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/4 bg-muted p-6 flex flex-col items-center justify-center text-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src={coach.avatar || "/placeholder.svg"} alt={coach.name} />
                    <AvatarFallback>{coach.initials}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg">{coach.name}</h3>
                  <div className="flex items-center mt-1 mb-2">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="ml-1 text-sm font-medium">{coach.rating}</span>
                    <span className="text-sm text-muted-foreground ml-1">({coach.reviews} reviews)</span>
                  </div>
                  <Badge variant={coach.specialty === "Marathon" ? "default" : "secondary"}>{coach.specialty}</Badge>
                </div>

                <div className="flex-1 p-6">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                        {coach.location}
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                        {coach.athletes} active athletes
                      </div>
                      <div className="flex items-center text-sm">
                        <Award className="h-4 w-4 mr-2 text-muted-foreground" />
                        {coach.certifications.join(", ")}
                      </div>
                    </div>

                    <div className="mt-4 md:mt-0">
                      <Badge variant={coach.accepting ? "outline" : "secondary"} className="mb-4">
                        {coach.accepting ? "Accepting Athletes" : "Waitlist Only"}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-sm mt-4">{coach.bio}</p>

                  <div className="flex justify-end mt-6 gap-2">
                    <Button variant="outline" asChild>
                      <Link href={`/runners/coach/${coach.id}`}>View Profile</Link>
                    </Button>
                    <Button asChild>
                      <Link href={`/runners/coach/${coach.id}/request`}>Request Coaching</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
