import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { manifesto } from '../../data/philosophy'
import { siteData } from '../../data/site'

export default function PhilosophyStatement() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-200px' })

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center bg-basalt overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(2px)'
        }}
      />

      {/* Grain Overlay */}
      <div className="absolute inset-0 grain-overlay" />

      {/* Section Number */}
      <div className="absolute top-8 right-8 font-mono text-xs text-ivory/30 tracking-[0.08em]">
        04
      </div>

      {/* Year - Decorative */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.05 } : {}}
        transition={{ duration: 1 }}
        className="absolute -left-20 top-1/2 -translate-y-1/2 -rotate-90 origin-center"
      >
        <span className="font-mono text-[200px] text-ivory tracking-[-0.05em]">
          {siteData.established}
        </span>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          {/* Label */}
          <span className="inline-block font-mono text-xs text-ochre tracking-[0.2em] uppercase mb-8">
            Design Manifesto
          </span>

          {/* Quote */}
          <blockquote>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[clamp(32px,5vw,64px)] font-light italic text-ivory leading-[1.2] tracking-[-0.02em] mb-8"
            >
              {`"${manifesto.quote}"`}
            </motion.p>
          </blockquote>

          {/* Attribution */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="h-px w-8 bg-ochre/50" />
            <cite className="font-mono text-sm text-stone not-italic tracking-[0.05em]">
              {manifesto.attribution}
            </cite>
            <div className="h-px w-8 bg-ochre/50" />
          </motion.footer>
        </motion.div>
      </div>
    </section>
  )
}
