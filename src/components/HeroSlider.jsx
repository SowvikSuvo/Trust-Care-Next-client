"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "https://plus.unsplash.com/premium_photo-1668806643276-4b215fe12075?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1584515933487-779824d29309",
  "https://plus.unsplash.com/premium_photo-1661340986594-afd7deb5882e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1576765607924-3f7b8410a787",
  "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=875&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1758274530259-9a3b144acc9e?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[500px] overflow-hidden">
      {/* BACKGROUND FADE SLIDER */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${images[index]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* CONTENT */}
      <div className="relative z-20 flex items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted Care for Your Loved Ones
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Baby Sitting, Elderly Care & Special Care — All in One Platform
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            Explore Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}
