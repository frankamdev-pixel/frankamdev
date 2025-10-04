import { motion } from "framer-motion";
import { Link } from "lucide-react"; // Note: J'utilise 'lucide-react' pour les icônes de la démo
import { FaArrowRight } from "react-icons/fa6"; 

// Les variantes d'animation restent inchangées
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const poppins = { fontFamily: "'Poppins', sans-serif" };
  const inter = { fontFamily: "'Inter', sans-serif" };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      // CLASSE CLÉ AJUSTÉE : min-h-screen pour prendre toute la hauteur de l'écran.
      // J'ai aussi ajouté des padding verticaux (py-16) qui s'ajustent sur les grands écrans (lg:py-24) 
      // pour un bon espacement si le contenu est juste un peu trop grand pour un écran.
      className="flex flex-col items-center justify-center text-center min-h-screen py-16 lg:py-24 px-4 sm:px-6 lg:px-12 bg-gray-950 text-white"
    >
      {/* Titre Principal */}
      <h1
        style={poppins}
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight max-w-6xl mb-6"
      >
        Partez de{" "}
        <span
          style={poppins}
          className="text-yellow-300 inline-block mt-2 sm:mt-0"
        >
          Je veux apprendre
        </span>
        <br className="sm:hidden" /> à{" "}
        <span
          style={poppins}
          className="text-green-400 inline-block mt-2 sm:mt-0"
        >
          j'ai réalisé ça <i className="text-white not-italic">!!</i>
        </span>
      </h1>

      {/* Sous-Titre */}
      <p
        style={inter}
        className="mt-4 sm:mt-5 text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl px-2"
      >
        Arrêtez de consommer. Commencez à créer. Réalisez des projets réels qui feront progresser votre niveau.
      </p>

      {/* Conteneur des Boutons CTA */}
      <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6">
        {/* Bouton Primaire */}
        <Link
          href="/categories"
          className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3 sm:py-4 rounded-xl text-white font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-[1.03] shadow-lg"
          style={{
            background: 'linear-gradient(90deg, #3EAEFF 0%, #2563EB 100%)',
            boxShadow: '0 8px 25px -5px rgba(62, 174, 255, 0.4)',
          }}
          aria-label="Voir tous les cours"
        >
          Découvrir les Cours <FaArrowRight size={18} />
        </Link>
        
        {/* Bouton Secondaire */}
        <Link
          href="/initiation"
          className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3 sm:py-4 rounded-xl border border-gray-600/50 text-gray-200 font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-gray-800 hover:border-gray-500 transform hover:scale-[1.03]"
          aria-label="Créer un chemin d'apprentissage"
        >
          Créer mon Chemin <FaArrowRight size={18} />
        </Link>
      </div>

      {/* Barre de Progression Améliorée */}
      <div className="mt-16 sm:mt-20 w-full max-w-xl px-4">
        <p
          style={inter}
          className="text-sm sm:text-base text-gray-400 mb-3 font-medium"
        >
          🚀 Plus de 75% de progression moyenne chez nos apprenants
        </p>
        <div className="w-full bg-gray-800 rounded-full h-2.5 sm:h-3.5 shadow-inner">
          <div
            className="h-full rounded-full transition-all duration-1000 ease-out"
            style={{ 
              width: "75%",
              background: 'linear-gradient(90deg, #3EAEFF 0%, #2563EB 100%)',
              boxShadow: '0 0 10px rgba(62, 174, 255, 0.6)',
            }}
          ></div>
        </div>
      </div>
    </motion.section>
  );
}


// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Progress } from "@/components/ui/progress"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"

// const courses = [
//   { id: 1, title: "React pour débutants", progress: 60, status: "En cours" },
//   { id: 2, title: "Laravel avancé", progress: 100, status: "Terminé" },
//   { id: 3, title: "Design avec TailwindCSS", progress: 25, status: "Nouveau" },
// ]

// export default function CoursesPage() {
//   return (
//     <div className="max-w-4xl mx-auto p-6 space-y-6">
//       <h1 className="text-2xl font-bold">📚 Mes Cours</h1>

//       <div className="grid md:grid-cols-2 gap-6">
//         {courses.map((course) => (
//           <Card key={course.id} className="shadow-md">
//             <CardHeader>
//               <CardTitle className="flex justify-between items-center">
//                 {course.title}
//                 <Badge>{course.status}</Badge>
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <Progress value={course.progress} className="h-2" />
//               <div className="flex justify-between items-center">
//                 <span className="text-sm text-muted-foreground">
//                   Progression : {course.progress}%
//                 </span>
//                 <Button variant="outline">Continuer</Button>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   )
// }


