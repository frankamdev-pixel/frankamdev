import NavBar from '@/components/NavBar';
import { ArrowRight } from 'lucide-react';

export default function Home() {
    return (
        <>
            <NavBar />

            <div
                className="flex min-h-screen flex-col items-center justify-center px-4 pt-20 text-center md:px-8"
                style={{
                    backgroundImage:
                        'linear-gradient(45deg, #3B82F6 5%, transparent 25%, transparent  25%, #000000 75%), linear-gradient(45deg, #000000 25%, transparent 25%, transparent 75%, #000000 75%)',
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 10px 10px',
                }}
            >
                {/* Badge d'annonce */}
                <div className="mb-8 inline-block">
                    <div className="rounded-full border border-blue-900 bg-gray-900 px-3 py-1 text-xs font-medium text-blue-300">
                        Annonce importante 🚀
                    </div>
                </div>

                {/* Titre principal */}
                <h1 className="mb-8 text-5xl leading-tight font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
                    Modèle de page d’accueil <br className="hidden sm:inline" />
                    prêt à l’emploi
                </h1>

                {/* Sous-titre */}
                <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-400 sm:text-xl">
                    Créez de magnifiques pages d’accueil pour vos startups, clients
                    et projets personnels, sans vous soucier du design.
                </p>

                {/* Boutons */}
                <div className="flex justify-center space-x-4">
                    <a
                        href="/inscription"
                        className="flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:opacity-90"
                        style={{
                            background: 'linear-gradient(90deg, #3B82F6 0%, #2563EB 100%)',
                            boxShadow: '0 4px 14px 0 rgba(37, 99, 235, 0.3)',
                        }}
                    >
                        Essayez gratuitement
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </a>

                    <a
                        href="/apprendre-plus"
                        className="rounded-lg px-6 py-3 text-base font-medium text-white transition-colors hover:text-gray-300"
                    >
                        En savoir plus
                    </a>
                </div>
            </div>
        </>
    );
}
