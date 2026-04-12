"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import hero from "../../../public/hero.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden">
      {/* CONTENT */}
      <div className="container-wide relative z-10 pt-32 lg:text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-[#CC7F3B]">
            <CheckCircle className="h-4 w-4" />
            Trusted Real Estate Partner
          </div>

          <h1 className="mb-6 text-5xl lg:text-7xl font-black leading-tight">
            Prop<span className="text-[#CC7F3B]">Zoid</span>
            <br />
            <span className="relative inline-block">
              Sell Your Property Directly to Buyers
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-2 left-0 h-1 w-full bg-[#CC7F3B] origin-left"
              />
            </span>
          </h1>

          <p className="mx-auto max-w-xl text-base mb-8">
            List your property in 5 minutes, get real buyer leads instantly, and
            manage everything from one simple dashboard — no broker needed..
          </p>

          <div className="flex justify-center flex-wrap gap-4">
            <Link href="/contact">
            <Button size="lg" className="gap-2">
             Book a Seat <ArrowRight className="h-4 w-4" />
            </Button>
            </Link>
         
          </div>
        </motion.div>
      </div>

      {/* IMAGE AT BOTTOM */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative w-full lg:max-w-6xl mt-16 lg:px-6"
      >
        <div className="relative h-[420px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/home4.png"
            alt="Capital Square Property"
            fill
            priority
            className="object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
