"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

interface StravaConnectProps {
  isConnected?: boolean
}

export function StravaConnect({ isConnected = false }: StravaConnectProps) {
  const [connected, setConnected] = useState(isConnected)
  const [loading, setLoading] = useState(false)

  const handleConnect = async () => {
    setLoading(true)
    // In a real implementation, this would redirect to Strava OAuth flow
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setConnected(true)
    setLoading(false)
  }

  const handleDisconnect = async () => {
    setLoading(true)
    // In a real implementation, this would revoke the Strava access token
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setConnected(false)
    setLoading(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <img src="/strava-logo.svg" alt="Strava" className="h-6 w-6" />
          Strava Integration
          {connected && (
            <Badge variant="outline" className="ml-2">
              Connected
            </Badge>
          )}
        </CardTitle>
        <CardDescription>Connect your Strava account to automatically sync your activities</CardDescription>
      </CardHeader>
      <CardContent>
        {connected ? (
          <div className="space-y-4">
            <p className="text-sm">
              Your Strava account is connected. Your activities will automatically sync to RunTrack Pro.
            </p>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Auto-sync enabled</Badge>
              <Badge variant="secondary">Last synced: 10 minutes ago</Badge>
            </div>
          </div>
        ) : (
          <p className="text-sm">
            Connect your Strava account to automatically import your runs, races, and training data. This allows you to
            keep all your running data in one place.
          </p>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {connected ? (
          <>
            <Button variant="outline" size="sm" className="gap-1" asChild>
              <a href="https://www.strava.com" target="_blank" rel="noopener noreferrer">
                View Strava Profile
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="destructive" size="sm" onClick={handleDisconnect} disabled={loading}>
              {loading ? "Disconnecting..." : "Disconnect"}
            </Button>
          </>
        ) : (
          <Button onClick={handleConnect} disabled={loading} className="gap-2 w-full">
            {loading ? "Connecting..." : "Connect with Strava"}
            {!loading && <img src="/strava-logo.svg" alt="" className="h-4 w-4" />}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
