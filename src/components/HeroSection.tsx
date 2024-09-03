import { motion } from 'framer-motion';
import { ArrowRight, } from 'lucide-react';
import { Link } from 'react-router-dom'; 

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-[#f3f2ee]">
      {/* Decorative Elements with Framer Motion */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-[#e6d4b8] rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#d1bfa4] rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        {/* Hero Content with Framer Motion */}
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-serif font-bold text-[#3e2f1c] leading-tight mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Discover the Magic of <span className="text-[#8b7b58]">Literature</span>
          </motion.h1>
          <motion.p
            className="text-xl font-serif text-[#5b4636] mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            Immerse yourself in a world of imagination, knowledge, and inspiration.
            Find your next great read and let the journey begin.
          </motion.p>
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <Link to="/search">
              <button className="px-8 py-3 bg-[#8b7b58] text-white rounded-full font-semibold shadow-lg hover:bg-[#6b5a43] transition-colors flex items-center">
                Explore Books <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
