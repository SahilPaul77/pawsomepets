// "use client";

// import { motion } from "framer-motion";
// import CountUp from "react-countup";

// const stats = [
//   { value: 12000, suffix: "+", label: "Happy Families" },
//   { value: 340, suffix: "+", label: "Verified Breeders" },
//   { value: 85, suffix: "+", label: "Breeds Available" },
//   { value: 4.9, suffix: "★", label: "Average Rating", decimals: 1 },
// ];

// export default function StatsBar() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className="mx-4 md:mx-10 -mt-10 relative z-20"
//     >
//       <div className="bg-white/80 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-2xl p-6 md:p-10 flex flex-wrap justify-between gap-6">
        
//         {stats.map((stat, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               delay: index * 0.3,
//               duration: 0.6,
//               ease: "easeOut",
//             }}
//             className="flex-1 min-w-[120px] text-center"
//           >
//             {/* Animated Number */}
//             <div className="text-2xl md:text-3xl font-extrabold text-primary">
//               <CountUp
//                 end={stat.value}
//                 duration={2}
//                 decimals={stat.decimals || 0}
//               />
//               {stat.suffix}
//             </div>

//             {/* Label */}
//             <p className="text-sm md:text-base text-gray-500 mt-1">
//               {stat.label}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// }


'use client'

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StatsStrip = () => {
  const stripRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll-based entrance animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',     // works well for mobile & desktop
          toggleActions: 'play none none none',
        },
        defaults: { ease: 'power4.out' },
      });

      tl.fromTo(
        containerRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      ).from(
        '.stat-item',
        {
          y: 20,
          opacity: 0,
          duration: 0.9,
          stagger: 0.15,
        },
        '-=0.8'
      );

      // Number counter animation (syncs with scroll reveal)
      document.querySelectorAll('.stat-number').forEach((num) => {
        const target = parseInt(num.dataset.target, 10);

        gsap.fromTo(
          num,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2.5,
            snap: { innerText: 1 },
            ease: 'expo.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
            },
            onUpdate() {
              const value = Math.ceil(num.innerText);
              if (num.id.includes('clients')) {
                num.innerHTML = value.toLocaleString() + '+';
              } else if (num.id.includes('success')) {
                num.innerHTML = value + '%';
              } else {
                num.innerHTML = value;
              }
            },
          }
        );
      });
    }, stripRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { id: 'clients-glass', label: 'Happy Clients', target: 5000 },
    { id: 'clients-glass', label: 'Verified Sellers', target: '340+' },
    { id: 'clients-glass', label: 'Breeds', target: "85+" },
  ];

  return (
   <div ref={stripRef} className="relative z-30 -mt-10 md:-mt-3 px-6 rounded-2xl bg-[#fffbf7]">
      <div className="container mx-auto max-w-5xl 
       backdrop-blur-xl rounded-2xl">
        <div
          ref={containerRef}
          className="
            backdrop-blur-xl
            border border-white/40
            shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]
            rounded-2xl
            py-8 md:py-10
            px-4 md:px-12
            flex items-center
            gap-6 md:gap-10
            overflow-hidden
            opacity-0
          "
        >
          {stats.map((stat, i) => (
            <React.Fragment key={i}>
              <div className="stat-item flex flex-col items-center text-center flex-1 text-2xl md:text-3xl font-extrabold rounded-lg">
                <span
                  id={stat.id}
                  data-target={stat.target}
                  className="stat-number text-2xl md:text-4xl text-primary leading-none font-[nunito]"
                >
                  0
                </span>

                <p className="mt-2 text-[7px] md:text-[10px] uppercase tracking-[0.3em] text-text font-medium">
                  {stat.label}
                </p>
              </div>

              {/* Darker elegant divider (desktop only) */}
              {i !== stats.length - 1 && (
                <div className="hidden md:block h-12 w-[1px] bg-gradient-to-b from-transparent via-stone-400/70 to-transparent text-text" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsStrip;
