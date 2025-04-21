"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { DashboardHeader } from "@/components/dashboard-header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function AssignPlanPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [submitted, setSubmitted] = useState(false)

  // In a real app, you would fetch the athlete data based on the ID
  const athlete = {
    id: params.id,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=60&width=60",
    initials: "SJ",
    status: "Active",
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would submit the form data to your backend
    setSubmitted(true)

    // Redirect after a delay
    setTimeout(() => {
      router.push(`/coaches/athletes/${athlete.id}`)
    }, 3000)
  }

  if (submitted) {
    return (
      <div className="flex-1 container py-6 space-y-6">
        <DashboardHeader heading="Plan Assigned" text="The training plan has been assigned successfully." />

        <Card className="max-w-md mx-auto">
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Training Plan Assigned!</h2>
            <p className="text-muted-foreground mb-6">
              The training plan has been successfully assigned to {athlete.name}.
            </p>
            <Button asChild className="w-full">
              <Link href={`/coaches/athletes/${athlete.id}`}>View Athlete Profile</Link>
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
              <Link href={`/coaches/athletes/${athlete.id}`}>
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <span>Assign Training Plan</span>
          </div>
        }
        text={`Assign a training plan to ${athlete.name}`}
      />

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Athlete</CardTitle>
            <CardDescription>You're assigning a plan to:</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center text-center">
            <Avatar className="h-20 w-20 mb-4">
              <AvatarImage src={athlete.avatar || "/placeholder.svg"} alt={athlete.name} />
              <AvatarFallback>{athlete.initials}</AvatarFallback>
            </Avatar>
            <h3 className="font-semibold text-lg">{athlete.name}</h3>
            <p className="text-sm text-muted-foreground">Status: {athlete.status}</p>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Training Plan Details</CardTitle>
              <CardDescription>Select a plan or create a custom one</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="plan-type">Plan Type</Label>
                <RadioGroup defaultValue="existing" id="plan-type" className="grid grid-cols-2 gap-4">
                  <div>
                    <RadioGroupItem value="existing" id="existing" className="peer sr-only" />
                    <Label
                      htmlFor="existing"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <span className="font-semibold">Existing Plan</span>
                      <span className="text-sm text-muted-foreground">Use a template</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="custom" id="custom" className="peer sr-only" />
                    <Label
                      htmlFor="custom"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <span className="font-semibold">Custom Plan</span>
                      <span className="text-sm text-muted-foreground">Create new</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="plan">Select Plan Template</Label>
                <Select required>
                  <SelectTrigger id="plan">
                    <SelectValue placeholder="Choose a training plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="marathon-advanced">Marathon Training - Advanced</SelectItem>
                    <SelectItem value="marathon-intermediate">Marathon Training - Intermediate</SelectItem>
                    <SelectItem value="marathon-beginner">Marathon Training - Beginner</SelectItem>
                    <SelectItem value="half-advanced">Half Marathon - Advanced</SelectItem>
                    <SelectItem value="half-beginner">Half Marathon - Beginner</SelectItem>
                    <SelectItem value="10k-improvement">10K Improvement</SelectItem>
                    <SelectItem value="5k-speed">5K Speed Development</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start-date">Start Date</Label>
                  <Input id="start-date" type="date" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="target-race-date">Target Race Date (Optional)</Label>
                  <Input id="target-race-date" type="date" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="target-race">Target Race Name (Optional)</Label>
                <Input id="target-race" placeholder="e.g., Boston Marathon" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="adjustments">Plan Adjustments</Label>
                <Textarea
                  id="adjustments"
                  placeholder="Note any adjustments to the standard plan based on the athlete's needs."
                  rows={3}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" type="button" asChild>
                <Link href={`/coaches/athletes/${athlete.id}`}>Cancel</Link>
              </Button>
              <Button type="submit">Assign Plan</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}
