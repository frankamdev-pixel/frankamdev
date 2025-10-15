"use client"

import {
 IconLogout,
 IconUserCircle,
 IconSettings,
 IconBell,
} from "@tabler/icons-react"
import {
 Avatar,
 AvatarFallback,
 AvatarImage,
} from "@/components/ui/avatar"
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuGroup,
 DropdownMenuItem,
 DropdownMenuLabel,
 DropdownMenuSeparator,
 DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
 SidebarMenu,
 SidebarMenuButton,
 SidebarMenuItem,
 useSidebar,
} from "@/components/ui/sidebar"
import { usePage } from "@inertiajs/react"

export function NavUser() {
 const { isMobile } = useSidebar()
 const { auth } = usePage().props

 const user = auth?.user || {
  name: "Utilisateur",
  email: "exemple@email.com",
  avatar: "/avatars/default.jpg",
 }

 return (
  <SidebarMenu>
   <SidebarMenuItem>
    <DropdownMenu>
     <DropdownMenuTrigger asChild>
      <SidebarMenuButton
       size="lg"
       className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
      >
       <Avatar className="h-8 w-8 rounded-lg grayscale">
        <AvatarImage src={user.avatar} alt={user.name} />
        <AvatarFallback className="rounded-lg">
         {user.name[0]?.toUpperCase()}
        </AvatarFallback>
       </Avatar>
       <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-medium">{user.name}</span>
        <span className="text-muted-foreground truncate text-xs">
         {user.email}
        </span>
       </div>
      </SidebarMenuButton>
     </DropdownMenuTrigger>

     <DropdownMenuContent
      className="min-w-56 rounded-lg"
      side={isMobile ? "bottom" : "right"}
      align="end"
      sideOffset={4}
     >
      <DropdownMenuLabel className="p-0 font-normal">
       <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
        <Avatar className="h-8 w-8 rounded-lg">
         <AvatarImage src={user.avatar} alt={user.name} />
         <AvatarFallback className="rounded-lg">
          {user.name[0]?.toUpperCase()}
         </AvatarFallback>
        </Avatar>
        <div className="grid flex-1 text-left text-sm leading-tight">
         <span className="truncate font-medium">{user.name}</span>
         <span className="text-muted-foreground truncate text-xs">
          {user.email}
         </span>
        </div>
       </div>
      </DropdownMenuLabel>

      <DropdownMenuSeparator />

      <DropdownMenuGroup>
       <DropdownMenuItem>
        <IconUserCircle />
        Profil
       </DropdownMenuItem>
       <DropdownMenuItem>
        <IconSettings />
        Paramètres
       </DropdownMenuItem>
       <DropdownMenuItem>
        <IconBell />
        Notifications
       </DropdownMenuItem>
      </DropdownMenuGroup>

      <DropdownMenuSeparator />

      <DropdownMenuItem className="text-red-600 focus:text-red-600">
       <IconLogout />
       Déconnexion
      </DropdownMenuItem>
     </DropdownMenuContent>
    </DropdownMenu>
   </SidebarMenuItem>
  </SidebarMenu>
 )
}
