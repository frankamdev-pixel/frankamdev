import { motion } from "framer-motion";
import { Link } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";

const sectionVariants = {
 hidden: { opacity: 0, y: 30 },
 visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero(){

  return(
    
<motion.section
    variants={sectionVariants}
    initial="hidden"
    animate="visible"
    className="flex flex-col items-center justify-center text-center min-h-screen px-4 sm:px-6 md:px-12"
   >
    <h1
     style={{ fontFamily: "'Poppins', sans-serif" }}
     className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl"
    >
     Partez de <br className="sm:hidden" />
     <span
      style={{ fontFamily: "'Poppins', sans-serif" }}
      className="text-yellow-300"
     >
      Je veux apprendre
     </span>{" "}
     à{" "}
     <span
      style={{ fontFamily: "'Poppins', sans-serif" }}
      className="text-green-400"
     >
      j'ai réalisé ça <i className="text-white">!!</i>
     </span>
    </h1>
    <p
     style={{ fontFamily: "'Inter', sans-serif" }}
     className="mt-4 sm:mt-6 text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl"
    >
     Arrêtez de consommer. Commencez à créer. Réalisez des projets réels qui feront progresser votre niveau.
    </p>
    <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
     <Link
      href="/categories"
      className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-[#3EAEFF] text-white font-semibold text-sm sm:text-base hover:bg-blue-600 transition-all"
      aria-label="Voir tous les cours"
     >
      Découvrir les Cours <FaArrowRight size={16} />
     </Link>
     <Link
      href="/initiation"
      className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-gray-300 text-white font-semibold text-sm sm:text-base hover:bg-gray-800 transition-all"
      aria-label="Créer un chemin d'apprentissage"
     >
      Créer mon Chemin <FaArrowRight size={16} />
     </Link>
    </div>
    <div className="mt-6 sm:mt-8 w-full max-w-md">
     <p
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="text-sm sm:text-base text-gray-300 mb-2"
     >
      Progression moyenne des apprenants
     </p>
     <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3">
      <div
       className="bg-[#3EAEFF] h-2 sm:h-3 rounded-full"
       style={{ width: "75%" }}
      ></div>
     </div>
    </div>
   </motion.section>
  )
}