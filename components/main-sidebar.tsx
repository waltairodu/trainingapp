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
  Menu,
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
  SidebarInset,
  useSidebar,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface MainSidebarProps {
  userRole?: "runner" | "coach" | "organizer" | "admin"
  children: React.ReactNode
}

// Mobile menu button component
function MobileMenuButton() {
  const { toggleSidebar, isMobile } = useSidebar()

  if (!isMobile) return null

  return (
    <Button variant="ghost" size="icon" onClick={toggleSidebar} className="md:hidden">
      <Menu className="h-5 w-5" />
      <span className="sr-only">Toggle Menu</span>
    </Button>
  )
}

// Navigation link that closes sidebar on mobile when clicked
function NavLink({ href, isActive, children }: { href: string; isActive: boolean; children: React.ReactNode }) {
  const { isMobile, setOpenMobile } = useSidebar()

  const handleClick = () => {
    if (isMobile) {
      setOpenMobile(false)
    }
  }

  return (
    <SidebarMenuButton asChild isActive={isActive} onClick={handleClick}>
      <Link href={href}>{children}</Link>
    </SidebarMenuButton>
  )
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
        <Sidebar collapsible="offcanvas">
          <SidebarHeader>
            <div className="flex items-center px-4 py-2">
              <div className="flex items-center gap-2">
                <Running className="h-6 w-6" />
                <h1 className="text-xl font-bold">RunTrack Pro</h1>
              </div>
            </div>
          </SidebarHeader>
          <SidebarSeparator />
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <NavLink href="/dashboard" isActive={isActive("/dashboard")}>
                      <Home className="h-4 w-4" />
                      <span>Dashboard</span>
                    </NavLink>
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
                      <NavLink href="/runners/dashboard" isActive={isActive("/runners/dashboard")}>
                        <Activity className="h-4 w-4" />
                        <span>Runner Dashboard</span>
                      </NavLink>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <NavLink href="/runners/training" isActive={isActive("/runners/training")}>
                        <ClipboardList className="h-4 w-4" />
                        <span>Training Plans</span>
                      </NavLink>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <NavLink href="/runners/activities" isActive={isActive("/runners/activities")}>
                        <LineChart className="h-4 w-4" />
                        <span>Activities</span>
                      </NavLink>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <NavLink href="/runners/races" isActive={isActive("/runners/races")}>
                        <Trophy className="h-4 w-4" />
                        <span>My Races</span>
                      </NavLink>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <NavLink href="/runners/find-coach" isActive={isActive("/runners/find-coach")}>
                        <Search className="h-4 w-4" />
                        <span>Find a Coach</span>
                      </NavLink>
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
                      <NavLink href="/coaches/dashboard" isActive={isActive("/coaches/dashboard")}>
                        <Users className="h-4 w-4" />
                        <span>Coach Dashboard</span>
                      </NavLink>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <NavLink href="/coaches/athletes" isActive={isActive("/coaches/athletes")}>
                        <User className="h-4 w-4" />
                        <span>Athletes</span>
                      </NavLink>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <NavLink href="/coaches/plans" isActive={isActive("/coaches/plans")}>
                        <ClipboardList className="h-4 w-4" />
                        <span>Training Plans</span>
                      </NavLink>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <NavLink href="/coaches/analytics" isActive={isActive("/coaches/analytics")}>
                        <LineChart className="h-4 w-4" />
                        <span>Analytics</span>
                      </NavLink>
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
                      <NavLink href="/races/dashboard" isActive={isActive("/races/dashboard")}>
                        <Trophy className="h-4 w-4" />
                        <span>Race Dashboard</span>
                      </NavLink>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <NavLink href="/races" isActive={isActive("/races")}>
                        <Calendar className="h-4 w-4" />
                        <span>Events</span>
                      </NavLink>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <NavLink href="/races/registrations" isActive={isActive("/races/registrations")}>
                        <ClipboardList className="h-4 w-4" />
                        <span>Registrations</span>
                      </NavLink>
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
                    <NavLink href="/workflows" isActive={isActive("/workflows")}>
                      <Workflow className="h-4 w-4" />
                      <span>All Workflows</span>
                    </NavLink>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <NavLink href="/workflows/assigned" isActive={isActive("/workflows/assigned")}>
                      <Clock className="h-4 w-4" />
                      <span>Assigned to Me</span>
                    </NavLink>
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
                    <NavLink href="/settings" isActive={isActive("/settings")}>
                      <Settings className="h-4 w-4" />
                      <span>Settings</span>
                    </NavLink>
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
        <SidebarInset>
          <header className="flex h-16 items-center gap-2 border-b px-4">
            <MobileMenuButton />
            <div className="flex items-center">
              <Running className="h-6 w-6 md:hidden" />
              <h1 className="text-xl font-bold ml-2 md:hidden">RunTrack Pro</h1>
            </div>
            <div className="flex-1" />
          </header>
          <div className="flex-1">{children}</div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
