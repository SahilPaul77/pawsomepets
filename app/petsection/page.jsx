"use client";

import React from "react";

import Image from 'next/image'

const puppies = [
  {
    id: 1,
    name: "Bella",
    breed: "Golden Retriever",
    price: 850,
    location: "NY",
    tags: ["Friendly", "Vaccinated"],
    badge: "NEW",
     image: "/images/shihtzu.jpg", // 👈 add this
  },
  {
    id: 2,
    name: "Max",
    breed: "French Bulldog",
    price: 1200,
    location: "CA",
    tags: ["Playful"],
    badge: "HOT",
    image: "/images/shihtzu.jpg",
  },
  {
    id: 3,
    name: "Luna",
    breed: "Poodle",
    price: 950,
    location: "TX",
    tags: ["Smart", "Hypoallergenic"],
    badge: null,
    image: "/images/shihtzu.jpg",
  },
  {
    id: 4,
    name: "Luna",
    breed: "Poodle",
    price: 950,
    location: "TX",
    tags: ["Smart", "Hypoallergenic"],
    badge: null,
    image: "/images/shihtzu.jpg",
  },
];

export default function PuppiesSection() {
  return (
    <div className="bg-[var(--cream2)] py-12">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-orange-100 text-orange-500 text-xs font-bold px-3 py-1 rounded-md mb-3">
            Popular Right Now
          </span>
          <h2 className="text-3xl font-extrabold text-[var(--text)]">
            Puppies Looking for Their Forever Home
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {puppies.map((puppy, index) => (
            <div
              key={puppy.id}
              className={`bg-white rounded-xl overflow-hidden border border-black/5 shadow-md transition-all duration-300 cursor-pointer relative 
              hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl active:scale-95
              
              opacity-0 translate-y-6 animate-fadeUp
              sm:opacity-100 sm:translate-y-0
              `}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
            <div className="w-full h-66 relative overflow-hidden">
  <Image
    src={puppy.image}
    alt={puppy.name}
    fill
    className="object-cover object-top"
  />

  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
                {/* Badge */}
                {puppy.badge && (
                  <span
                    className={`absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-md backdrop-blur 
                    ${
                      puppy.badge === "NEW"
                        ? "bg-teal-100 text-teal-500"
                        : "bg-orange-100 text-[var(--primary)]"
                    }`}
                  >
                    {puppy.badge}
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="p-5">
                <h3 className="font-extrabold text-lg text-[var(--text)]">
                  {puppy.name}
                </h3>
                <p className="text-xs text-[var(--text2)] mt-1">
                  {puppy.breed}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mt-3">
                  {puppy.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-bold px-3 py-1 rounded-full bg-[var(--cream2)] text-[var(--text2)] border border-black/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div className="flex justify-between items-center mt-4 pt-3 border-t border-black/5">
                  <span className="font-extrabold text-lg text-[var(--primary)]">
                    ${puppy.price}
                  </span>
                  <span className="text-xs text-[var(--text3)] flex items-center gap-1">
                    📍 {puppy.location}
                  </span>
                </div>

                {/* Button */}
                <button className="w-full mt-3 py-2 rounded-lg bg-gradient-to-r from-[var(--primary)] to-[#ff9a7a] text-white font-bold text-sm transition-all duration-200 hover:opacity-90 hover:-translate-y-[1px] active:scale-95">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-3 rounded-lg bg-[var(--primary)] text-white font-bold hover:opacity-90 transition">
            See All 280+ Puppies →
          </button>
        </div>

      </div>
    </div>
  );
}