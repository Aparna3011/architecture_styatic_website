import { motion } from 'framer-motion'
import { philosophy } from '../data/philosophy'
import { pageTransition, fadeInUp, staggerContainer } from '../utils/animations'

export default function Philosophy() {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition} className="pt-32">
      <section className="px-6 lg:px-12 mb-32 min-h-[60vh] flex items-center">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.span variants={fadeInUp} className="font-mono text-xs tracking-[0.3em] text-stone uppercase mb-12 block">Our Philosophy</motion.span>
            <motion.blockquote variants={fadeInUp} className="font-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-8 text-basalt">
              <span className="italic text-basalt/70">{'"'}</span>
              {philosophy.coreStatement}
              <span className="italic text-basalt/70">{'"'}</span>
            </motion.blockquote>
            <motion.p variants={fadeInUp} className="text-lg text-stone">— {philosophy.attribution}</motion.p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 lg:px-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-mono text-xs tracking-[0.3em] text-stone uppercase mb-16">Guiding Principles</motion.h2>
          <div className="space-y-24">
            {philosophy.principles.map((principle, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-1"><span className="font-display text-6xl font-light text-basalt/20">{String(index + 1).padStart(2, '0')}</span></div>
                <div className="lg:col-span-4"><h3 className="font-display text-3xl md:text-4xl font-light mb-4 text-basalt">{principle.title}</h3></div>
                <div className="lg:col-span-7"><p className="text-base md:text-lg text-stone leading-relaxed">{principle.description}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 mb-32">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="max-w-7xl mx-auto aspect-[21/9] bg-basalt/5 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80" alt="Architecture philosophy visualization" className="w-full h-full object-cover" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/placeholder.jpg' }} />
        </motion.div>
      </section>

      <section className="px-6 lg:px-12 py-32 bg-basalt/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-4xl md:text-5xl font-light mb-8 leading-tight text-basalt">
                Our Approach to<br /><span className="italic text-basalt/70">Design Excellence</span>
              </h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6 text-stone leading-relaxed">
              <p>Every project begins with listening. We immerse ourselves in understanding not just what our clients want to build, but how they want to live.</p>
              <p>We believe that constraints breed creativity. Whether working with challenging sites, historic preservation requirements, or ambitious sustainability goals, we find that the most memorable architecture emerges from thoughtful responses to real-world complexities.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="font-display text-2xl md:text-3xl font-light leading-relaxed text-basalt/80">
              Architecture is ultimately an act of optimism—a belief that we can shape environments that elevate the human experience.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
