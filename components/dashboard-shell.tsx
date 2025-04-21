import type { ReactNode } from "react"

interface DashboardShellProps {
  children: ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  return <div className="flex-1 container py-6 space-y-6">{children}</div>
}
