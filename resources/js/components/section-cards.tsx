import { IconTrendingUp } from "@tabler/icons-react"
import { Badge } from "@/components/ui/badge"
import {
 Card,
 CardAction,
 CardDescription,
 CardFooter,
 CardHeader,
 CardTitle,
} from "@/components/ui/card"
import { usePage } from "@inertiajs/react"

export function SectionCards() {
 const { auth, users } = usePage().props

 return (
  <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 lg:grid-cols-2 5xl:grid-cols-4">
   {/* --- Utilisateurs --- */}
   <Card className="@container/card">
    <CardHeader>
     <CardDescription>Utilisateurs enregistrés</CardDescription>
     <CardTitle className="text-2xl font-semibold @[250px]/card:text-3xl">
      {auth.user.lenght ?? 'ok'}
     </CardTitle>
     <CardAction>
      <Badge variant="outline">
       <IconTrendingUp />
       <span>✔</span>
      </Badge>
     </CardAction>
    </CardHeader>
    <CardFooter className="flex-col items-start gap-1.5 text-sm">
     <div className="flex gap-2 font-medium">
      Pas encore de croissance <IconTrendingUp className="size-4" />
     </div>
     <div className="text-muted-foreground">
      Seule la table utilisateurs existe
     </div>
    </CardFooter>
   </Card>

   {/* --- Projets --- */}
   <Card className="@container/card">
    <CardHeader>
     <CardDescription>Projets actifs</CardDescription>
     <CardTitle className="text-2xl font-semibold @[250px]/card:text-3xl">
      0
     </CardTitle>
    </CardHeader>
   </Card>

   {/* --- Cours --- */}
   <Card className="@container/card">
    <CardHeader>
     <CardDescription>Cours disponibles</CardDescription>
     <CardTitle className="text-2xl font-semibold @[250px]/card:text-3xl">
      0
     </CardTitle>
    </CardHeader>
   </Card>

   {/* --- Taux de croissance --- */}
   <Card className="@container/card">
    <CardHeader>
     <CardDescription>Taux de croissance global</CardDescription>
     <CardTitle className="text-2xl font-semibold @[250px]/card:text-3xl">
      0%
     </CardTitle>
    </CardHeader>
   </Card>
  </div>
 )
}
