import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { pageTransition, fadeInUp, staggerContainer } from '../utils/animations'

export default function Services() {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition} className="pt-32">
      <section className="px-6 lg:px-12 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.span variants={fadeInUp} className="font-mono text-xs tracking-[0.3em] text-stone uppercase mb-6 block">What We Do</motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.9] mb-8 text-basalt">
              Our<br /><span className="italic text-basalt/70">Services</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-sans text-base md:text-lg text-stone max-w-2xl leading-relaxed">
              From initial concept to final completion, we offer comprehensive architectural services tailored to bring your vision to life with precision and artistry.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div key={service.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <span className="font-display text-8xl font-light text-basalt/10">{String(index + 1).padStart(2, '0')}</span>
                  <h2 className="font-display text-4xl md:text-5xl font-light mb-6 -mt-8 text-basalt">{service.title}</h2>
                  <p className="text-stone leading-relaxed mb-8">{service.description}</p>
                  <ul className="space-y-3">
                    {(service.capabilities || []).map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-stone/60 rounded-full mt-2" />
                        <span className="text-stone">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[4/3] bg-basalt/5 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.onerror = null
                        e.currentTarget.src = '/placeholder.jpg'
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-32 bg-basalt text-ivory">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-4xl md:text-6xl font-light mb-8">Ready to begin your project?</h2>
            <p className="text-ivory/70 max-w-2xl mx-auto mb-12 leading-relaxed">
              Let us discuss how we can transform your vision into architectural reality.
            </p>
            <Link to="/contact" className="inline-block border border-ivory px-12 py-4 font-mono text-xs tracking-[0.2em] uppercase hover:bg-ivory hover:text-basalt transition-colors duration-300">
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
