import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowRight, ChevronDown } from "lucide-react";
import { siteData } from "../../data/site";

export default function HeroSection() {
  const heroImageRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroImageRef.current,
        { scale: 1.05 },
        { scale: 1.0, duration: 8, ease: "power1.inOut" },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const titleWords = ["Space.", "Memory.", "Matter."];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          ref={heroImageRef}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80)",
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-basalt/60" />
        {/* Grain Overlay */}
        <div className="absolute inset-0 grain-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1600px] w-full px-6 md:px-12 lg:px-16 pt-28 md:pt-20 pb-32 md:pb-24">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="font-mono text-xs text-ochre tracking-[0.2em] uppercase">
              {siteData.fullName}
            </span>
            <div className="h-px w-16 bg-ochre/50" />
          </motion.div>

          {/* Title */}
          <div className="mb-8">
            {titleWords.map((word, index) => (
              <motion.div
                key={word}
                initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
                animate={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <h1 className="font-display font-light text-[clamp(48px,14vw,160px)] leading-[0.9] tracking-[-0.04em] text-ivory">
                  {word}
                </h1>
              </motion.div>
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="font-sans text-base md:text-lg text-ivory/75 leading-relaxed max-w-lg mb-8 md:mb-10">
            A spatial intelligence practice rooted in Kolhapur, Maharashtra. We
            design buildings that remember the land.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-ochre text-basalt font-sans text-sm hover:bg-gold transition-colors duration-300"
            >
              Explore Our Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 border border-ivory/30 text-ivory font-sans text-sm hover:bg-ivory/10 transition-colors duration-300"
            >
              Our Story
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-4 md:bottom-0 left-0 right-0 z-10">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 pb-4 md:pb-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 md:gap-8">
            {/* Coordinates */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="font-mono text-xs text-ivory/60 tracking-[0.08em]"
            >
              {siteData.location.coordinates}
            </motion.div>

            {/* Established */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex items-center gap-4"
            >
              <div className="h-px w-8 bg-ivory/30" />
              <span className="font-mono text-xs text-ivory/60 tracking-[0.08em]">
                Est. {siteData.established}
              </span>
              <div className="h-px w-8 bg-ivory/30" />
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="flex flex-col items-center gap-2"
            >
              <span className="font-mono text-xs text-ivory/60 tracking-[0.08em] uppercase">
                Scroll
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown className="w-5 h-5 text-ivory/60" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
