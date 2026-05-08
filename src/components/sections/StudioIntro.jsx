import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { statistics } from '../../data/statistics'
import { siteData } from '../../data/site'
import Counter from '../ui/Counter'

export default function StudioIntro() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="relative bg-ivory py-24 lg:py-32 overflow-hidden">
      {/* Section Number */}
      <div className="absolute top-8 right-8 font-mono text-xs text-stone/30 tracking-[0.08em]">
        01
      </div>

      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Text */}
          <div className="lg:col-span-5 relative">
            {/* Rotated Label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="hidden lg:block absolute -left-16 top-0 -rotate-90 origin-left"
            >
              <span className="font-mono text-xs text-ochre tracking-[0.2em] uppercase">
                About the Studio
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-display text-2xl md:text-3xl lg:text-[28px] font-light leading-[1.4] text-basalt mb-8">
                SVIT HUB is a spatial intelligence practice founded in {siteData.established} in {siteData.location.city}, {siteData.location.state}. 
                We design buildings that are inseparable from the land they occupy, 
                the community that surrounds them, and the cultural memory they carry.
              </p>

              <p className="font-sans text-base text-stone leading-relaxed mb-8">
                Rooted in the architectural heritage of the Deccan plateau, our work 
                draws from centuries of regional building wisdom while engaging 
                contemporary questions of sustainability, craft, and civic responsibility. 
                From intimate residences to public landmarks, every project begins with 
                listening — to the site, to the client, to the invisible forces that 
                make each place unique.
              </p>

              <Link
                to="/about"
                className="group inline-flex items-center gap-2 font-sans text-sm text-ochre hover:text-terra transition-colors"
              >
                Read Our Full Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Images */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Main Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                  alt="SVIT HUB Studio"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src = '/placeholder.jpg'
                  }}
                />
              </div>

              {/* Floating Secondary Image */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-12 -left-8 lg:-left-16 w-48 lg:w-64 border-4 border-ivory"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80"
                    alt="Project Detail"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.onerror = null
                      e.currentTarget.src = '/placeholder.jpg'
                    }}
                  />
                </div>
              </motion.div>

              {/* Project Count Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute top-8 -right-4 lg:right-8 bg-basalt px-6 py-4"
              >
                <span className="block font-display text-4xl text-ivory">48+</span>
                <span className="font-mono text-xs text-stone tracking-[0.08em] uppercase">
                  Projects
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 pt-12 border-t border-stone/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
            {statistics.map((stat, index) => (
              <div key={stat.id} className="text-center lg:text-left">
                <div className="flex items-baseline justify-center lg:justify-start gap-1">
                  <Counter 
                    from={0} 
                    to={stat.number} 
                    duration={2} 
                    delay={0.1 * index}
                    isInView={isInView}
                  />
                  {stat.suffix && (
                    <span className="font-display text-3xl lg:text-4xl text-ochre">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <p className="mt-2 font-mono text-xs text-stone tracking-[0.05em] uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
