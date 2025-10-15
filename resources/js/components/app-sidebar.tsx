import * as React from "react"
import {
 IconCamera,
 IconChartBar,
 IconDashboard,
 IconDatabase,
 IconFileAi,
 IconFileDescription,
 IconFileWord,
 IconFolder,
 IconHelp,
 IconInnerShadowTop,
 IconListDetails,
 IconReport,
 IconSearch,
 IconSettings,
 IconUsers,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
 Sidebar,
 SidebarContent,
 SidebarFooter,
 SidebarHeader,
 SidebarMenu,
 SidebarMenuButton,
 SidebarMenuItem,
} from "@/components/ui/sidebar"
import { usePage } from "@inertiajs/react"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
 const { auth } = usePage().props

 const data = {
  navMain: [
   { title: "Tableau de bord", url: "/dashboard", icon: IconDashboard },
   { title: "Cycle de vie", url: "/lifecycle", icon: IconListDetails },
   { title: "Statistiques", url: "/stats", icon: IconChartBar },
   { title: "Cours", url: "/courses", icon: IconFolder },
   { title: "Équipe", url: "/team", icon: IconUsers },
  ],
  navSecondary: [
   { title: "Paramètres", url: "/settings/profile", icon: IconSettings },
   { title: "Aide", url: "/help", icon: IconHelp },
   { title: "Recherche", url: "/search", icon: IconSearch },
  ],
  documents: [
   { name: "Bibliothèque de données", url: "/data", icon: IconDatabase },
   { name: "Rapports", url: "/reports", icon: IconReport },
   { name: "Assistant Word", url: "/word-assistant", icon: IconFileWord },
  ],
 }

 return (
  <Sidebar collapsible="offcanvas" {...props}>
   {/* ==== En-tête ==== */}
   <SidebarHeader>
    <SidebarMenu>
     <SidebarMenuItem>
      <SidebarMenuButton
       asChild
       className="data-[slot=sidebar-menu-button]:!p-1.5"
      >
       <a href="/dashboard">
        <IconInnerShadowTop className="!size-5" />
        <span className="text-base font-semibold">
         FrankamDev
         <span className="text-2xl text-cyan-600">.</span>
        </span>
       </a>
      </SidebarMenuButton>
     </SidebarMenuItem>
    </SidebarMenu>
   </SidebarHeader>

   {/* ==== Contenu principal ==== */}
   <SidebarContent>
    <NavMain items={data.navMain} />
    <NavDocuments items={data.documents} />
    <NavSecondary items={data.navSecondary} className="mt-auto" />
   </SidebarContent>

   {/* ==== Pied (infos utilisateur connecté) ==== */}
   <SidebarFooter>
    <NavUser user={auth} />
   </SidebarFooter>
  </Sidebar>
 )
}
