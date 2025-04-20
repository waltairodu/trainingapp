import type { ReactNode } from "react"

interface DashboardShellProps {
  children: ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold">RunTrack Pro</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="/dashboard" className="text-sm font-medium hover:underline">
              Dashboard
            </a>
            <a href="/runners" className="text-sm font-medium hover:underline">
              Runners
            </a>
            <a href="/coaches" className="text-sm font-medium hover:underline">
              Coaches
            </a>
            <a href="/races" className="text-sm font-medium hover:underline">
              Races
            </a>
            <a href="/workflows" className="text-sm font-medium hover:underline">
              Workflows
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <span className="text-sm">John Doe</span>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-6 space-y-6">{children}</main>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 RunTrack Pro. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
