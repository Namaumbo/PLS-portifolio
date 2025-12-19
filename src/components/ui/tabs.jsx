import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}) {
  return (
    (<TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-4", className)}
      {...props} />)
  );
}

function TabsList({
  className,
  ...props
}) {
  return (
    (<TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        // Uniform “pill” bar: bordered, subtle background, works in light/dark
        "bg-muted/60 text-muted-foreground inline-flex w-fit items-center justify-center rounded-xl border border-border/60 p-1 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-muted/40",
        className
      )}
      {...props} />)
  );
}

function TabsTrigger({
  className,
  ...props
}) {
  return (
    (<TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "text-foreground/90 dark:text-muted-foreground inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-transparent px-3 text-sm font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 hover:bg-background/40 dark:hover:bg-white/5 data-[state=active]:bg-background/70 data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:border-border/60 dark:data-[state=active]:bg-white/10 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props} />)
  );
}

function TabsContent({
  className,
  ...props
}) {
  return (
    (<TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(
        "flex-1 rounded-xl border border-border/60 bg-background/20 p-6 shadow-sm outline-none",
        className
      )}
      {...props} />)
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
