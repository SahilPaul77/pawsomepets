// "use client";

// import { motion } from "framer-motion";
// import Image from 'next/image'

// export default function Hero() {
//   return (
//     <section
//      className="relative min-h-[90vh] md:h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#F7F7F2]">

//       {/* 🔥 Background Image */}
//     <div className="absolute inset-0 z-0">
//            <Image
//              src='/images/hero.jpg'
//              className="w-full h-full object-contain object-top opacity-40 grayscale-[40%]"
//              alt="Dental Studio"
//              fill
//              priority
//            />
//          </div>

//       {/* Badge */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.1 }}
//         className="inline-flex items-center gap-2 bg-orange-100 text-primary px-5 py-2 rounded-full font-bold text-sm mb-6 border border-orange-200"
//       >
//         🐶 Trusted by 12,000+ happy families
//       </motion.div>

//       {/* Headline */}
//       <motion.h1
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2 }}
//         className="font-black text-[clamp(2.2rem,6vw,3.8rem)] leading-tight text-gray-900 max-w-[700px]"
//       >
//         Find Your Perfect
//         <span className="block text-primary font-weight:100">Pet Companion</span>
//       </motion.h1>

//       {/* Subtitle */}
//       <motion.p
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3 }}
//         className="text-lg text-gray-600 max-w-[480px] mt-4 leading-relaxed"
//       >
//         Meet your new best friend 🐾 Browse thousands of adorable puppies from
//         verified, ethical breeders near you.
//       </motion.p>

//       {/* Buttons */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4 }}
//         className="flex gap-4 flex-wrap justify-center mt-8"
//       >
//         <button className="px-7 py-3 rounded-xl font-bold text-white bg-primary shadow-lg hover:-translate-y-1 transition">
//          Browse Pets
//         </button>
//       </motion.div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] md:h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#F7F7F2]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero2.jpg"
          className="w-full h-full object-cover opacity-40 grayscale-[0%]"
          alt="cute pets"
          fill
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 w-full">
        {/* Badge */}
        {/* <div className="hero-badge inline-flex items-center gap-2 mb-8 px-4 py-1 border border-stone-300 rounded-full text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-stone-500 bg-white/50">
        
          New Standards in Dentistry
        </div> */}

        <motion.div
           initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
  className="inline-flex items-center gap-2 bg-orange-100 text-primary px-5 py-2 rounded-full font-bold text-sm mb-6 border border-orange-200"
        >
          🐶 Trusted by 5,000+ happy families
        </motion.div>

       <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
  className="font-black text-[clamp(2.2rem,6vw,3.8rem)] leading-tight text-gray-900"
>
  Find Your Perfect
  <span className="block text-white drop-shadow-[2px_2px_0_#ff6b4a]">
    Pet Companion
  </span>
</motion.h1>

<motion.p
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
  className="text-lg text-text mt-4 leading-relaxed"
>
  Meet your new best friend 🐾 and browse thousands of adorable puppies from
  verified and ethical breeders near you.
</motion.p>

        <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
  className="flex gap-4 flex-wrap justify-center mt-8"
>
  <button className="px-7 py-3 rounded-xl font-bold text-white bg-primary shadow-lg hover:-translate-y-1 transition">
    Browse Pets
  </button>
</motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
