import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { careers, benefits, cultureValues } from '../data/careers'
import { pageTransition, fadeInUp, staggerContainer } from '../utils/animations'

export default function Careers() {
  const [expandedJob, setExpandedJob] = useState(null)

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition} className="pt-32">
      <section className="px-6 lg:px-12 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.span variants={fadeInUp} className="text-sm tracking-[0.3em] text-primary/60 uppercase mb-6 block">Join Our Team</motion.span>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-light leading-[0.9] mb-8">
              Build the<br /><span className="italic text-primary/70">Future</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-primary/70 max-w-2xl leading-relaxed">
              We are always looking for talented individuals who share our passion for exceptional design.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 lg:px-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-light mb-8">Our Culture</h2>
              <p className="text-primary/70 leading-relaxed mb-8">At HAUS, we believe that great design emerges from diverse perspectives and genuine collaboration.</p>
              <div className="space-y-6">
                {cultureValues.map((value, index) => (
                  <div key={index}><h4 className="text-lg font-light mb-2">{value.title}</h4><p className="text-sm text-primary/60">{value.description}</p></div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="aspect-[4/5] bg-primary/5 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" alt="HAUS team at work" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-24 bg-primary/5 mb-32">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-light mb-16 text-center">Benefits & Perks</motion.h2>
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 border border-primary/20 rounded-full flex items-center justify-center"><span className="text-xl">{benefit.icon}</span></div>
                <h4 className="text-lg font-light mb-2">{benefit.title}</h4>
                <p className="text-sm text-primary/60">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-32">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-4xl font-light mb-4">Open Positions</h2>
            <p className="text-primary/60">{careers.filter(c => c.status === 'open').length} positions currently available</p>
          </motion.div>

          <div className="space-y-0">
            {careers.filter(c => c.status === 'open').map((job, index) => (
              <motion.div key={job.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="border-b border-primary/10">
                <button onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)} className="w-full py-8 flex items-center justify-between text-left group">
                  <div>
                    <h3 className="text-xl md:text-2xl font-light mb-2 group-hover:text-primary/70 transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-primary/50"><span>{job.department}</span><span>·</span><span>{job.location}</span><span>·</span><span>{job.type}</span></div>
                  </div>
                  <svg className={`w-6 h-6 transform transition-transform ${expandedJob === job.id ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                <AnimatePresence>
                  {expandedJob === job.id && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="pb-8 space-y-6">
                        <p className="text-primary/70 leading-relaxed">{job.description}</p>
                        <div>
                          <h4 className="text-sm tracking-[0.15em] uppercase text-primary/50 mb-3">Requirements</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, i) => (<li key={i} className="flex items-start gap-3 text-primary/70"><span className="w-1.5 h-1.5 bg-primary/40 rounded-full mt-2 flex-shrink-0" />{req}</li>))}
                          </ul>
                        </div>
                        <a href={`mailto:careers@hausarchitecture.com?subject=Application: ${job.title}`} className="inline-block border border-primary px-8 py-3 text-sm tracking-[0.15em] uppercase hover:bg-primary hover:text-background transition-colors duration-300">Apply Now</a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-24 bg-primary text-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-light mb-6">{"Don't see the right role?"}</h2>
            <p className="text-background/70 mb-8 leading-relaxed">We are always interested in connecting with exceptional talent.</p>
            <a href="mailto:careers@hausarchitecture.com?subject=General Application" className="inline-block border border-background px-12 py-4 text-sm tracking-[0.2em] uppercase hover:bg-background hover:text-primary transition-colors duration-300">Send General Application</a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
