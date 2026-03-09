"use client";

import { HeroSearch } from "@/components/hero-search";
import { PropertyCard } from "@/components/property-card";
import { TextReveal } from "@/components/text-reveal";
import { properties } from "@/data/mock-listings";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const featuredProperties = properties.slice(0, 3);

  return (
    <div className="flex flex-col gap-10 pb-10">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">

        {/* Parallax Background */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Tropical Villa"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background/90" />

        <div className="relative z-10 w-full px-4 flex flex-col items-center gap-8 text-center max-w-5xl mx-auto">
          <div className="flex flex-col items-center gap-4">
            <TextReveal
              text="Travel with Peace of Mind"
              className="justify-center text-5xl md:text-7xl font-bold text-white drop-shadow-lg tracking-tight"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg md:text-2xl text-white/95 max-w-2xl drop-shadow-md font-medium leading-relaxed"
            >
              Discover handpicked halal-friendly villas with private pools and muslim-friendly amenities in Southeast Asia.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
            className="w-full mt-4"
          >
            <HeroSearch />
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight"
          >
            Featured Halal Villas
          </motion.h2>
          <Link href="/search" className="text-primary font-medium hover:underline cursor-pointer">View all</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Value Props */}
      <section className="bg-emerald-50/50 py-20 mt-8 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Why Choose Musafir?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: "🌴", title: "Private Pools", desc: "Enjoy complete privacy with our verified secluded pools, perfect for families." },
              { icon: "🕌", title: "Muslim Friendly", desc: "Prayer amenities, Qibla direction, and no alcohol on premises guaranteed." },
              { icon: "🍲", title: "Halal Dining", desc: "All properties are close to halal food options or provide halal breakfast." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 bg-white rounded-2xl shadow-sm border border-emerald-100/50 hover:shadow-lg hover:border-emerald-200 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl rotate-3 hover:rotate-6 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-emerald-950">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
