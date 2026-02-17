"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ParallaxScrollSecond = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateYFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateXFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotateXFirst = useTransform(scrollYProgress, [0, 1], [0, -20]);

  const translateYThird = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateXThird = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotateXThird = useTransform(scrollYProgress, [0, 1], [0, 20]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div className={cn("w-full relative overflow-hidden py-20 px-8 md:px-16 lg:px-24", className)}>
      {/* Cinema-themed Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {/* Film Strip Pattern */}
        <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-20"></div>
        <div className="absolute top-8 left-0 w-full h-2 bg-black opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 opacity-20"></div>
        <div className="absolute bottom-8 left-0 w-full h-2 bg-black opacity-30"></div>
        
        {/* Star Pattern */}
        <div className="absolute top-20 left-10 text-6xl text-yellow-400 opacity-10 animate-pulse">★</div>
        <div className="absolute top-32 right-16 text-4xl text-yellow-300 opacity-15 animate-pulse delay-500">★</div>
        <div className="absolute bottom-40 left-20 text-5xl text-yellow-500 opacity-12 animate-pulse delay-1000">★</div>
        <div className="absolute bottom-20 right-24 text-3xl text-yellow-400 opacity-18 animate-pulse delay-1500">★</div>
        <div className="absolute top-1/2 left-1/4 text-7xl text-yellow-300 opacity-8 animate-pulse delay-2000">★</div>
        <div className="absolute top-1/3 right-1/3 text-4xl text-yellow-500 opacity-12 animate-pulse delay-700">★</div>
        
        {/* Cinema Reel Circles */}
        <div className="absolute top-16 right-10 w-24 h-24 border-4 border-yellow-400 rounded-full opacity-10 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-24 left-16 w-32 h-32 border-4 border-orange-500 rounded-full opacity-8 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 border-3 border-red-400 rounded-full opacity-12 animate-spin" style={{animationDuration: '15s'}}></div>
        
        {/* Spotlight Effects */}
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-gradient-radial from-yellow-300 to-transparent rounded-full blur-2xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-50 h-50 bg-gradient-radial from-orange-400 to-transparent rounded-full blur-3xl opacity-4 animate-pulse delay-1000"></div>
      </div>
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-5xl font-bold text-white mb-4 tracking-wide">Gallery</h2>
        <p className="text-xl text-gray-300">Memorable Moments</p>
      </div>
      <div
        className={cn("h-[40rem] items-start overflow-y-auto w-full scrollbar-hide relative z-10", className)}
        ref={gridRef}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-6xl mx-auto gap-8 py-20 px-4">
          <div className="grid gap-10">
            {firstPart.map((el, idx) => (
              <motion.div
                style={{
                  y: translateYFirst,
                  x: translateXFirst,
                  rotateZ: rotateXFirst,
                }}
                key={"grid-1" + idx}
              >
                <Image
                  src={el}
                  className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                  height="400"
                  width="400"
                  alt="galaxy"
                />
              </motion.div>
            ))}
          </div>
          <div className="grid gap-10">
            {secondPart.map((el, idx) => (
              <motion.div key={"grid-2" + idx}>
                <Image
                  src={el}
                  className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                  height="400"
                  width="400"
                  alt="galaxy"
                />
              </motion.div>
            ))}
          </div>
          <div className="grid gap-10">
            {thirdPart.map((el, idx) => (
              <motion.div
                style={{
                  y: translateYThird,
                  x: translateXThird,
                  rotateZ: rotateXThird,
                }}
                key={"grid-3" + idx}
              >
                <Image
                  src={el}
                  className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                  height="400"
                  width="400"
                  alt="galaxy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};