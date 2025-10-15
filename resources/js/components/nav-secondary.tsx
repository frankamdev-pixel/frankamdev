"use client"

import * as React from "react"
import { type Icon } from "@tabler/icons-react"
import {
 SidebarGroup,
 SidebarGroupContent,
 SidebarMenu,
 SidebarMenuButton,
 SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavSecondary({
 items,
 ...props
}: {
 items: {
  title: string
  url: string
  icon: Icon
 }[]
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
 return (
  <SidebarGroup {...props}>
   <SidebarGroupContent>
    <SidebarMenu>
     {items.map((item, index) => (
      <SidebarMenuItem key={index}>
       <SidebarMenuButton asChild>
        <a href={item.url} className="flex items-center gap-2">
         <item.icon className="text-muted-foreground" />
         <span>{item.title}</span>
        </a>
       </SidebarMenuButton>
      </SidebarMenuItem>
     ))}
    </SidebarMenu>
   </SidebarGroupContent>
  </SidebarGroup>
 )
}
