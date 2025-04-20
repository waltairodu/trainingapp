// Strava API integration service

export interface StravaActivity {
  id: number
  name: string
  distance: number
  moving_time: number
  elapsed_time: number
  total_elevation_gain: number
  type: string
  start_date: string
  average_speed: number
  max_speed: number
  average_heartrate?: number
  max_heartrate?: number
  map: {
    summary_polyline: string
  }
}

export interface StravaAthlete {
  id: number
  username: string
  firstname: string
  lastname: string
  profile: string
  city: string
  country: string
  stats: {
    recent_run_totals: {
      count: number
      distance: number
      moving_time: number
      elapsed_time: number
    }
    all_run_totals: {
      count: number
      distance: number
      moving_time: number
      elapsed_time: number
    }
  }
}

// Mock data for demonstration purposes
const MOCK_STRAVA_ACTIVITIES: StravaActivity[] = [
  {
    id: 1001,
    name: "Morning Run",
    distance: 8200, // meters
    moving_time: 2535, // seconds
    elapsed_time: 2700, // seconds
    total_elevation_gain: 125, // meters
    type: "Run",
    start_date: "2025-05-01T06:30:00Z",
    average_speed: 3.23, // m/s
    max_speed: 4.12, // m/s
    average_heartrate: 158,
    max_heartrate: 175,
    map: {
      summary_polyline: "abc123", // This would be a polyline for the map
    },
  },
  {
    id: 1002,
    name: "Interval Training",
    distance: 5500, // meters
    moving_time: 1930, // seconds
    elapsed_time: 2100, // seconds
    total_elevation_gain: 45, // meters
    type: "Run",
    start_date: "2025-04-29T17:15:00Z",
    average_speed: 2.85, // m/s
    max_speed: 5.23, // m/s
    average_heartrate: 172,
    max_heartrate: 188,
    map: {
      summary_polyline: "def456", // This would be a polyline for the map
    },
  },
  {
    id: 1003,
    name: "Long Run",
    distance: 18000, // meters
    moving_time: 6150, // seconds
    elapsed_time: 6300, // seconds
    total_elevation_gain: 210, // meters
    type: "Run",
    start_date: "2025-04-27T08:00:00Z",
    average_speed: 2.93, // m/s
    max_speed: 3.45, // m/s
    average_heartrate: 162,
    max_heartrate: 178,
    map: {
      summary_polyline: "ghi789", // This would be a polyline for the map
    },
  },
]

const MOCK_STRAVA_ATHLETE: StravaAthlete = {
  id: 12345,
  username: "runner_john",
  firstname: "John",
  lastname: "Doe",
  profile: "/placeholder.svg?height=100&width=100",
  city: "Boston",
  country: "United States",
  stats: {
    recent_run_totals: {
      count: 12,
      distance: 87500, // meters
      moving_time: 28800, // seconds
      elapsed_time: 30600, // seconds
    },
    all_run_totals: {
      count: 342,
      distance: 2543000, // meters
      moving_time: 864000, // seconds
      elapsed_time: 900000, // seconds
    },
  },
}

// In a real implementation, these would make actual API calls to Strava
export async function getStravaActivities(): Promise<StravaActivity[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return MOCK_STRAVA_ACTIVITIES
}

export async function getStravaAthlete(): Promise<StravaAthlete> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return MOCK_STRAVA_ATHLETE
}

export async function syncStravaActivity(activityId: number): Promise<boolean> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return true
}

// Helper functions to format Strava data
export function formatDistance(meters: number): string {
  const kilometers = meters / 1000
  return `${kilometers.toFixed(2)} km`
}

export function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = seconds % 60

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
  }
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
}

export function formatPace(meters: number, seconds: number): string {
  // Calculate pace in minutes per kilometer
  const kilometers = meters / 1000
  const hours = seconds / 3600
  const paceMinPerKm = (hours * 60) / kilometers

  const paceMinutes = Math.floor(paceMinPerKm)
  const paceSeconds = Math.floor((paceMinPerKm - paceMinutes) * 60)

  return `${paceMinutes}:${paceSeconds.toString().padStart(2, "0")} /km`
}
