import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import { processStages } from '../../data/process'

gsap.registerPlugin(ScrollTrigger)

export default function ProcessTimeline() {
  const sectionRef = useRef(null)
  const lineRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(lineRef.current, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-ivory py-24 lg:py-32 overflow-hidden">
      {/* Section Number */}
      <div className="absolute right-8 font-mono text-xs text-stone/30 tracking-[0.08em]">
        06
      </div>

      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-end justify-between gap-4 mb-16"
        >
          <h2 className="font-display text-[clamp(48px,6vw,72px)] font-light text-basalt leading-[1.0] tracking-[-0.02em]">
            How We Work
          </h2>
          <Link
            to="/process"
            className="group inline-flex items-center gap-2 font-sans text-sm text-ochre hover:text-terra transition-colors"
          >
            Full Process
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Progress Line Background */}
          <div className="absolute top-8 left-0 right-0 h-px bg-stone/20" />
          
          {/* Progress Line Animated */}
          <div 
            ref={lineRef}
            className="absolute top-8 left-0 right-0 h-px bg-ochre origin-left"
            style={{ transform: 'scaleX(0)' }}
          />

          {/* Stages */}
          <div className="grid grid-cols-5 gap-8">
            {processStages.map((stage, index) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Dot */}
                <div className="relative mb-8">
                  <div className="w-4 h-4 rounded-full bg-ivory border-2 border-stone/30 relative z-10" />
                </div>

                {/* Content */}
                <div>
                  <span className="font-mono text-xs text-ochre tracking-[0.08em]">
                    {stage.number}
                  </span>
                  <h3 className="font-display text-xl font-light text-basalt mt-2 mb-1">
                    {stage.name}
                  </h3>
                  <p className="font-mono text-xs text-stone/60 tracking-[0.02em] mb-3">
                    {stage.duration}
                  </p>
                  <p className="font-sans text-sm text-stone leading-relaxed">
                    {stage.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline - Vertical */}
        <div className="lg:hidden space-y-8">
          {processStages.map((stage, index) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6"
            >
              {/* Line */}
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-ochre" />
                {index < processStages.length - 1 && (
                  <div className="w-px flex-1 bg-stone/20 mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="pb-8">
                <span className="font-mono text-xs text-ochre tracking-[0.08em]">
                  {stage.number}
                </span>
                <h3 className="font-display text-xl font-light text-basalt mt-1 mb-1">
                  {stage.name}
                </h3>
                <p className="font-mono text-xs text-stone/60 tracking-[0.02em] mb-2">
                  {stage.duration}
                </p>
                <p className="font-sans text-sm text-stone leading-relaxed">
                  {stage.description.substring(0, 150)}...
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
