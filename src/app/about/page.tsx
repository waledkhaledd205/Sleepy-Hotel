"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 via-blue-50 to-white flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl w-full bg-white shadow-xl rounded-2xl p-10"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-extrabold text-gray-800 mb-4 text-center"
        >
          About Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-600 text-center mb-10 leading-relaxed"
        >
          Welcome to our booking platform! We provide modern and comfortable
          rooms tailored to your needs. Whether you’re here for business,
          vacation, or just a short getaway, we’ve got the perfect place for
          you.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "🌍 Great Locations",
              desc: "All our rooms are located in prime areas close to attractions and services.",
            },
            {
              title: "🛏️ Comfort & Style",
              desc: "Enjoy stylish rooms designed for comfort and relaxation.",
            },
            {
              title: "💻 Easy Booking",
              desc: "Simple and fast booking process with secure payments.",
            },
            {
              title: "🤝 Friendly Support",
              desc: "Our support team is always available to help you during your stay.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-blue-50 rounded-xl shadow-sm hover:shadow-lg transition cursor-pointer"
            >
              <h2 className="text-xl font-semibold text-blue-700 mb-2">
                {feature.title}
              </h2>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
