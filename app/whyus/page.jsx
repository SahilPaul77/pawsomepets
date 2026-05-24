'use client'

import React from "react";
import {
  UserCheck,
  Sparkles,
  ShieldCheck,
  Heart
} from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {

  const values = [
    {
      title: "Trusted & Verified Breeders",
      desc: "We connect you only with ethical, verified breeders — no scams, no puppy mills. Every listing is carefully reviewed so you can adopt with confidence",
      icon: UserCheck,
      position: "md:translate-y-10",
    },
    {
      title: "Happy, Healthy Puppies",
      desc: "All puppies listed come with proper care, vaccinations, and health checks — giving you a safe and joyful start with your new companion.",
      icon: Sparkles,
      position: "md:-translate-y-6",
    },
    {
      title: "Simple & Stress-Free Process",
      desc: "No complicated steps. Just browse, connect, and bring home your new bestie — fast, easy, and hassle-free.",
      icon: ShieldCheck,
      position: "md:translate-y-14",
    },
    {
      title: "Built for Pet Lovers, Not Just Sales",
      desc: "We’re not just a marketplace — we’re a community of pet lovers who care about matching the right puppy with the right family.",
      icon: Heart,
      position: "md:translate-y-0",
    },
  ];

  return (
    <section className="relative w-full bg-[#fffbf7] overflow-hidden py-10 md:py-20">
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-orange-100 text-[#FF7A59] px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Why PawMarket
          </span>

          <h1 className="font-extrabold text-2xl md:text-5xl leading-tight text-text font-[Nunito] mb-3">
            Everything You Need to Find Your Furry Soulmate
          </h1>

          <p className="text-sm md:text-base text-text max-w-xl mx-auto leading-relaxed">
            We've built the most trusted, joyful way to connect with ethical breeders.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {values.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.25, // 👈 one-by-one animation
                  ease: "easeOut",
                }}
                whileHover={{ y: -10, scale: 1.03 }}
                className={`relative bg-white p-10 border border-stone-100 shadow-sm ${item.position}`}
              >
                
                {/* ICON */}
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="mb-6 text-text"
                >
                  <Icon size={30} />
                </motion.div>

                {/* TITLE */}
                <h3 className="text-2xl font-serif text-stone-900 mb-6 leading-snug">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-md text-stone-600 font-light leading-relaxed">
                  {item.desc}
                </p>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;