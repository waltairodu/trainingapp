import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { DashboardHeader } from "@/components/dashboard-header"
import { Star, MapPin, Users, Award, Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CoachProfilePage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the coach data based on the ID
  const coach = {
    id: params.id,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=120&width=120",
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
    about: `I've been coaching runners of all levels for over 8 years, with a focus on marathon training. As a former elite runner with multiple Boston Marathon finishes, I understand what it takes to achieve your goals, whether you're aiming for your first finish or a personal best.

My coaching philosophy centers on sustainable training that fits into your life. I believe in quality over quantity, and creating personalized plans that adapt to your progress and feedback.

I work with runners of all levels, from beginners to experienced marathoners looking to improve their times. My specialty is helping runners build endurance while staying injury-free through proper training progression and recovery.`,
    testimonials: [
      {
        name: "John D.",
        text: "Sarah helped me achieve my first sub-3:30 marathon after years of trying. Her personalized approach and constant feedback made all the difference.",
        rating: 5,
      },
      {
        name: "Emily T.",
        text: "Working with Sarah transformed my running. She helped me overcome injuries and build a sustainable training routine that led to a 15-minute PR.",
        rating: 5,
      },
      {
        name: "Michael R.",
        text: "Great coach who really listens. Sarah adjusted my training plan when life got busy and still helped me reach my goals.",
        rating: 4,
      },
    ],
    services: [
      {
        title: "Basic Coaching",
        price: "$99/month",
        features: ["Personalized training plan", "Weekly plan updates", "Email support", "Training analysis"],
      },
      {
        title: "Premium Coaching",
        price: "$199/month",
        features: [
          "Everything in Basic",
          "Weekly video calls",
          "24/7 messaging support",
          "Race strategy planning",
          "Nutrition guidance",
        ],
      },
      {
        title: "Elite Coaching",
        price: "$299/month",
        features: [
          "Everything in Premium",
          "Twice weekly calls",
          "Custom strength training",
          "Race day support",
          "Recovery planning",
        ],
      },
    ],
  }

  return (
    <div className="flex-1 container py-6 space-y-6">
      <DashboardHeader
        heading={
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild className="mr-2">
              <Link href="/runners/find-coach">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <span>Coach Profile</span>
          </div>
        }
        text="View coach details and services"
      >
        <Button asChild>
          <Link href={`/runners/coach/${coach.id}/request`}>Request Coaching</Link>
        </Button>
      </DashboardHeader>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Avatar className="h-32 w-32 mb-4">
              <AvatarImage src={coach.avatar || "/placeholder.svg"} alt={coach.name} />
              <AvatarFallback>{coach.initials}</AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold">{coach.name}</h2>
            <div className="flex items-center mt-1 mb-4">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span className="ml-1 text-sm font-medium">{coach.rating}</span>
              <span className="text-sm text-muted-foreground ml-1">({coach.reviews} reviews)</span>
            </div>
            <Badge variant="default" className="mb-6">
              {coach.specialty} Specialist
            </Badge>

            <div className="w-full space-y-3 text-left">
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                {coach.location}
              </div>
              <div className="flex items-center text-sm">
                <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                {coach.experience} coaching experience
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

            <div className="w-full mt-6">
              <Badge variant={coach.accepting ? "outline" : "secondary"} className="w-full py-1.5">
                {coach.accepting ? "Currently Accepting Athletes" : "Waitlist Only"}
              </Badge>
            </div>
          </CardContent>
        </Card>

        <div className="md:col-span-2 space-y-6">
          <Tabs defaultValue="about" className="space-y-4">
            <TabsList>
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="services">Services & Pricing</TabsTrigger>
              <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>About {coach.name}</CardTitle>
                  <CardDescription>Coach background and philosophy</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="whitespace-pre-line">{coach.about}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="services" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Coaching Services</CardTitle>
                  <CardDescription>Available coaching packages and pricing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    {coach.services.map((service, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle>{service.title}</CardTitle>
                          <CardDescription className="text-lg font-bold">{service.price}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {service.features.map((feature, i) => (
                              <li key={i} className="flex items-start">
                                <span className="mr-2">•</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="testimonials" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Athlete Testimonials</CardTitle>
                  <CardDescription>Feedback from current and past athletes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {coach.testimonials.map((testimonial, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="flex items-center mb-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="ml-2 font-medium">{testimonial.name}</span>
                          </div>
                          <p className="text-sm">{testimonial.text}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
