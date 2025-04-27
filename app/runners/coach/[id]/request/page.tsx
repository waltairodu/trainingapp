"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DashboardHeader } from "@/components/dashboard-header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function RequestCoachPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [submitted, setSubmitted] = useState(false)

  // In a real app, you would fetch the coach data based on the ID
  const coach = {
    id: params.id,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=60&width=60",
    initials: "SJ",
    specialty: "Marathon",
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would submit the form data to your backend
    setSubmitted(true)

    // Redirect after a delay
    setTimeout(() => {
      router.push("/runners/dashboard")
    }, 3000)
  }

  if (submitted) {
    return (
      <div className="flex-1 container py-6 space-y-6">
        <DashboardHeader heading="Request Submitted" text="Your coaching request has been sent." />

        <Card className="max-w-md mx-auto">
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Request Sent Successfully!</h2>
            <p className="text-muted-foreground mb-6">
              Your coaching request has been sent to {coach.name}. You'll receive a notification when they respond.
            </p>
            <Button asChild className="w-full">
              <Link href="/runners/dashboard">Return to Dashboard</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex-1 container py-6 space-y-6">
      <DashboardHeader
        heading={
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild className="mr-2">
              <Link href={`/runners/coach/${coach.id}`}>
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <span>Request Coaching</span>
          </div>
        }
        text={`Submit a coaching request to ${coach.name}`}
      />

      <div className="flex flex-col md:flex-row gap-6">
        <Card className="md:flex-1">
          <CardHeader>
            <CardTitle>Selected Coach</CardTitle>
            <CardDescription>You're requesting coaching from:</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center text-center">
            <Avatar className="h-20 w-20 mb-4">
              <AvatarImage src={coach.avatar || "/placeholder.svg"} alt={coach.name} />
              <AvatarFallback>{coach.initials}</AvatarFallback>
            </Avatar>
            <h3 className="font-semibold text-lg">{coach.name}</h3>
            <p className="text-sm text-muted-foreground">{coach.specialty} Specialist</p>
          </CardContent>
        </Card>

        <Card className="md:flex-[2]">
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Coaching Request</CardTitle>
              <CardDescription>Tell us about your goals and training needs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="package">Select Coaching Package</Label>
                <RadioGroup defaultValue="basic" id="package" className="flex flex-wrap gap-4">
                  <div className="flex-1 min-w-[120px]">
                    <RadioGroupItem value="basic" id="basic" className="peer sr-only" />
                    <Label
                      htmlFor="basic"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <span className="font-semibold">Basic</span>
                      <span className="text-sm font-medium">$99/month</span>
                    </Label>
                  </div>
                  <div className="flex-1 min-w-[120px]">
                    <RadioGroupItem value="premium" id="premium" className="peer sr-only" />
                    <Label
                      htmlFor="premium"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <span className="font-semibold">Premium</span>
                      <span className="text-sm font-medium">$199/month</span>
                    </Label>
                  </div>
                  <div className="flex-1 min-w-[120px]">
                    <RadioGroupItem value="elite" id="elite" className="peer sr-only" />
                    <Label
                      htmlFor="elite"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <span className="font-semibold">Elite</span>
                      <span className="text-sm font-medium">$299/month</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="goal">Primary Goal</Label>
                <Select required>
                  <SelectTrigger id="goal">
                    <SelectValue placeholder="Select your primary goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="first_marathon">Complete First Marathon</SelectItem>
                    <SelectItem value="pr_marathon">Marathon PR</SelectItem>
                    <SelectItem value="first_half">Complete First Half Marathon</SelectItem>
                    <SelectItem value="pr_half">Half Marathon PR</SelectItem>
                    <SelectItem value="5k_10k">5K/10K Improvement</SelectItem>
                    <SelectItem value="ultra">Ultra Marathon Training</SelectItem>
                    <SelectItem value="general">General Fitness</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="space-y-2 flex-1">
                  <Label htmlFor="experience">Running Experience</Label>
                  <Select required>
                    <SelectTrigger id="experience">
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner (&lt; 1 year)</SelectItem>
                      <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                      <SelectItem value="experienced">Experienced (3-5 years)</SelectItem>
                      <SelectItem value="advanced">Advanced (5+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 flex-1">
                  <Label htmlFor="weekly_mileage">Current Weekly Mileage</Label>
                  <Select required>
                    <SelectTrigger id="weekly_mileage">
                      <SelectValue placeholder="Select weekly mileage" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-10">0-10 miles</SelectItem>
                      <SelectItem value="11-20">11-20 miles</SelectItem>
                      <SelectItem value="21-30">21-30 miles</SelectItem>
                      <SelectItem value="31-40">31-40 miles</SelectItem>
                      <SelectItem value="41-50">41-50 miles</SelectItem>
                      <SelectItem value="50+">50+ miles</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="target_race">Target Race (if applicable)</Label>
                <Input id="target_race" placeholder="e.g., Boston Marathon, April 2026" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional Information</Label>
                <Textarea
                  id="message"
                  placeholder="Tell the coach about your goals, any injuries or limitations, and what you're looking for in a coach."
                  rows={5}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" type="button" asChild>
                <Link href={`/runners/coach/${coach.id}`}>Cancel</Link>
              </Button>
              <Button type="submit">Submit Request</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}
