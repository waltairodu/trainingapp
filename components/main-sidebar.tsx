"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  Activity,
  Calendar,
  ClipboardList,
  Clock,
  Home,
  LineChart,
  MonitorIcon as Running,
  Settings,
  Trophy,
  User,
  Users,
  Workflow,
  Search,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface MainSidebarProps {
  userRole?: "runner" | "coach" | "organizer" | "admin"
  children: React.ReactNode
}

export function MainSidebar({ userRole = "runner", children }: MainSidebarProps) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 px-4 py-2">
              <Running className="h-6 w-6" />
              <h1 className="text-xl font-bold">RunTrack Pro</h1>
            </div>
          </SidebarHeader>
          <SidebarSeparator />
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={isActive("/dashboard")}>
                      <Link href="/dashboard">
                        <Home className="h-4 w-4" />
                        <span>Dashboard</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Runner Navigation */}
            {(userRole === "runner" || userRole === "admin") && (
              <SidebarGroup>
                <SidebarGroupLabel>Runner</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild isActive={isActive("/runners/dashboard")}>
                        <Link href="/runners/dashboard">
                          <Activity className="h-4 w-4" />
                          <span>Runner Dashboard</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild isActive={isActive("/runners/training")}>
                        <Link href="/runners/training">
                          <ClipboardList className="h-4 w-4" />
                          <span>Training Plans</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild isActive={isActive("/runners/activities")}>
                        <Link href="/runners/activities">
                          <LineChart className="h-4 w-4" />
                          <span>Activities</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild isActive={isActive("/runners/races")}>
                        <Link href="/runners/races">
                          <Trophy className="h-4 w-4" />
                          <span>My Races</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild isActive={isActive("/runners/find-coach")}>
                        <Link href="/runners/find-coach">
                          <Search className="h-4 w-4" />
                          <span>Find a Coach</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            )}

            {/* Coach Navigation */}
            {(userRole === "coach" || userRole === "admin") && (
              <SidebarGroup>
                <SidebarGroupLabel>Coach</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild isActive={isActive("/coaches/dashboard")}>
                        <Link href="/coaches/dashboard">
                          <Users className="h-4 w-4" />
                          <span>Coach Dashboard</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild isActive={isActive("/coaches/athletes")}>
                        <Link href="/coaches/athletes">
                          <User className="h-4 w-4" />
                          <span>Athletes</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild isActive={isActive("/coaches/plans")}>
                        <Link href="/coaches/plans">
                          <ClipboardList className="h-4 w-4" />
                          <span>Training Plans</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild isActive={isActive("/coaches/analytics")}>
                        <Link href="/coaches/analytics">
                          <LineChart className="h-4 w-4" />
                          <span>Analytics</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            )}

            {/* Race Organizer Navigation */}
            {(userRole === "organizer" || userRole === "admin") && (
              <SidebarGroup>
                <SidebarGroupLabel>Race Organizer</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild isActive={isActive("/races/dashboard")}>
                        <Link href="/races/dashboard">
                          <Trophy className="h-4 w-4" />
                          <span>Race Dashboard</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild isActive={isActive("/races")}>
                        <Link href="/races">
                          <Calendar className="h-4 w-4" />
                          <span>Events</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild isActive={isActive("/races/registrations")}>
                        <Link href="/races/registrations">
                          <ClipboardList className="h-4 w-4" />
                          <span>Registrations</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            )}

            <SidebarGroup>
              <SidebarGroupLabel>Workflows</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={isActive("/workflows")}>
                      <Link href="/workflows">
                        <Workflow className="h-4 w-4" />
                        <span>All Workflows</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={isActive("/workflows/assigned")}>
                      <Link href="/workflows/assigned">
                        <Clock className="h-4 w-4" />
                        <span>Assigned to Me</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={isActive("/settings")}>
                      <Link href="/settings">
                        <Settings className="h-4 w-4" />
                        <span>Settings</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <div className="p-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">John Doe</span>
                  <span className="text-xs text-muted-foreground capitalize">{userRole}</span>
                </div>
              </div>
            </div>
          </SidebarFooter>
          <SidebarRail />
        </Sidebar>
        <div className="flex-1">{children}</div>
      </div>
    </SidebarProvider>
  )
}
