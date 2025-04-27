"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  config: Record<string, { label: string; color: string }>
}

const ChartContainer = React.forwardRef<HTMLDivElement, ChartProps>(
  ({ className, children, config, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-4", className)}
        {...props}
        style={
          {
            "--color-primary": "hsl(var(--primary))",
            "--color-secondary": "hsl(var(--secondary))",
            "--color-muted": "hsl(var(--muted))",
            ...Object.fromEntries(Object.entries(config || {}).map(([key, value]) => [`--color-${key}`, value.color])),
          } as React.CSSProperties
        }
      >
        <div className="flex flex-wrap gap-4">
          {Object.entries(config || {}).map(([key, value]) => (
            <div key={key} className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full" style={{ background: value.color }} />
              <span className="text-sm font-medium">{value.label}</span>
            </div>
          ))}
        </div>
        {children}
      </div>
    )
  },
)
ChartContainer.displayName = "ChartContainer"

interface ChartTooltipProps {
  active?: boolean
  payload?: Array<{
    name: string
    value: string | number
    payload: Record<string, any>
  }>
  label?: string
  formatter?: (value: string | number, name: string, props: any) => React.ReactNode
  labelFormatter?: (label: string) => React.ReactNode
  contentStyle?: React.CSSProperties
}

const ChartTooltip = ({ active, payload, label, formatter, labelFormatter, contentStyle }: ChartTooltipProps) => {
  if (active && payload?.length) {
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <div className="flex flex-col">
          {label && (
            <span className="text-xs text-muted-foreground">{labelFormatter ? labelFormatter(label) : label}</span>
          )}
          <div className="flex flex-col gap-0.5">
            {payload.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="h-2 w-2 rounded-full"
                  style={{
                    background: `var(--color-${item.name.toLowerCase()})`,
                  }}
                />
                <span className="text-xs font-medium">
                  {formatter ? formatter(item.value, item.name, item.payload) : `${item.name}: ${item.value}`}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return null
}
ChartTooltip.displayName = "ChartTooltip"

const ChartTooltipContent = React.forwardRef<HTMLDivElement, ChartTooltipProps & React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <ChartTooltip {...props} />,
)
ChartTooltipContent.displayName = "ChartTooltipContent"

export { ChartContainer, ChartTooltip, ChartTooltipContent }
