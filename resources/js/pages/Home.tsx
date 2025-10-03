import CercleRotate from '@/components/CercleRotate';
import Compagnies from '@/components/Compagnies';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import CardBuild from '@/components/CardBuild';
import CardTestimanial from '@/components/CardTestimonials';
import Quotes from '@/components/Quotes';
import SubscriptionCard from '@/components/SubscriptionCard';
import Testimonial from '@/components/Testimonial';
import { usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Link } from 'lucide-react';
import { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { ToastContainer, toast } from 'react-toastify';
import Hero from '../components/Hero';
import MeetMe from '@/components/MeetMe';
import Questions from '@/components/Questions';
import AnotherQuestion from '@/components/AnotherQuestion';

const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

interface FlashMessage {
    success?: string;
    error?: string;
}

interface Props {
    flash: FlashMessage | null;
}

export default function Home() {
    const { flash } = usePage<Props>().props;

    useEffect(() => {
        if (flash?.message?.success) toast.success(flash.message.success);
        if (flash?.message?.error) toast.error(flash.message.error);
    }, [flash]);

    return (
        <>
            <div className="flex min-h-screen flex-col bg-[#020013] text-white">
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    className="text-sm sm:text-base"
                />
                <NavBar />

                {/* 
  <motion.section
   variants={sectionVariants}
    initial="hidden"
    animate="visible"
    className="flex min-h-screen flex-col items-center justify-center px-4 pt-20 text-center md:px-8"
    style={{
      backgroundImage:
        'linear-gradient(45deg, #000 5%, transparent 25%, transparent 25%, #000 75%), linear-gradient(45deg, #3B82F2 25%, transparent 25%, transparent 75%, #000 75%)',
      backgroundSize: '20px 20px',
      backgroundPosition: '0 0, 10px 10px',
    }}
  >
    <div className="mb-8 inline-block">
      <div className="rounded-full border border-blue-900 bg-gray-900 px-3 py-1 text-xs font-medium text-blue-300">
        Bénéficiez d&apos;un parcours clair et net 🚀
      </div>
    </div>

    <h1
      style={{ fontFamily: "'Poppins', sans-serif" }}
      className="max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
    >
      Partez de <br className="sm:hidden" />
      <span className="text-yellow-300">Je veux apprendre</span>{' '}
      à{' '}
      <span className="text-green-400">
        j&apos;ai réalisé ça <i className="text-white">!!</i>
      </span>
    </h1>

    <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-400 sm:text-xl">
      Créez de magnifiques pages d’accueil pour vos startups, clients et projets personnels, sans vous soucier du design.
    </p>

    <div className="flex justify-center space-x-4">
      <a
        href="/inscription"
        className="flex items-center justify-center rounded px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:opacity-90"
        style={{
          background: 'linear-gradient(90deg, #3B82F6 0%, #2563EB 100%)',
          boxShadow: '0 4px 14px 0 rgba(37, 99, 235, 0.3)',
        }}
      >
        Essayez gratuitement
        <ArrowRight className="ml-2 h-5 w-5" />
      </a>

      <Link
        href="/apprendre-plus"
        className="rounded-lg px-6 py-3 text-base font-medium text-white transition-colors hover:text-gray-300"
      >
        En savoir plus
      </Link>
    </div>
  </motion.section> */}
                <Hero />
                {/* Témoignages */}
                <section className="">
                    <Testimonial />
                </section>

                {/* Partenaires */}
                <section className="mt-6 bg-[#030215] py-20 sm:mt-8">
                    <div className="flex items-center justify-center">
                        <p
                            style={{ fontFamily: "'Inter', sans-serif" }}
                            className="text-lg text-gray-200 sm:text-xl md:text-2xl"
                        >
                            Ils ont commencé comme{' '}
                            <span
                                style={{ fontFamily: "'Poppins', sans-serif" }}
                                className="text-xl font-bold text-cyan-300 sm:text-2xl"
                            >
                                Toi
                            </span>
                            , maintenant ils travaillent ici 👇
                        </p>
                    </div>
                    <div className="mt-8">
                        <Compagnies />
                    </div>
                </section>

                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    animate="visible"
                    className="mt-12 flex flex-col items-center px-4 sm:mt-16 sm:px-6 md:px-12"
                >
                    <CardBuild />
                    <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:gap-4">
                        <Link
                            href="/cours"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#3EAEFF] px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 sm:px-12 sm:py-4 sm:text-base"
                            aria-label="Voir tous les cours"
                        >
                            Voir Tous Les Cours <FaArrowRight size={16} />
                        </Link>
                        <Link
                            href="/learning-path"
                            className="inline-flex items-center justify-center gap-2 px-6 py-2 text-sm font-semibold text-white underline transition-all hover:text-yellow-400 sm:px-8 sm:py-3 sm:text-base"
                            aria-label="Créer un chemin d'apprentissage"
                        >
                            Créer ton Chemin ✔
                        </Link>
                    </div>
                </motion.section>

                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    animate="visible"
                    className="mt-12 bg-[#020013] px-4 py-12 sm:mt-16 sm:px-6 sm:py-16 md:px-12"
                >
                    <CardTestimanial />
                    <Quotes />
                </motion.section>

                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    animate="visible"
                    className="mt-12 flex flex-col gap-8 px-4 sm:mt-16 sm:gap-12 sm:px-6 md:px-12"
                >
                    {/* <Group /> */}
                    <SubscriptionCard />
                </motion.section>


<motion.section
    variants={sectionVariants}
    initial="hidden"
    animate="visible"
    className="mt-12 sm:mt-16 px-4 sm:px-6 md:px-12 flex flex-col gap-8 sm:gap-12"
   >
    <MeetMe />
    <Questions />
    <AnotherQuestion />
   </motion.section>


                {/* Cercle animé */}
                <CercleRotate />

            
                <Footer />
            </div>
        </>
    );
}
