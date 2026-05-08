import { motion } from 'framer-motion'
import { useAwards } from '../api/useAwards'
import { pageTransition, fadeInUp, staggerContainer } from '../utils/animations'

export default function Awards() {
  const { awards, awardsByYear, isLoading } = useAwards()

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition} className="pt-32">
      <section className="px-6 lg:px-12 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.span variants={fadeInUp} className="text-sm tracking-[0.3em] text-primary/60 uppercase mb-6 block">Recognition</motion.span>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-light leading-[0.9] mb-8">
              Awards &<br /><span className="italic text-primary/70">Honors</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-primary/70 max-w-2xl leading-relaxed">
              Our work has been recognized by leading institutions and publications in the architectural community worldwide.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 lg:px-12 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.div variants={fadeInUp} className="text-center"><div className="text-5xl md:text-6xl font-light mb-2">{awards.length}+</div><p className="text-sm tracking-[0.2em] text-primary/60 uppercase">Total Awards</p></motion.div>
            <motion.div variants={fadeInUp} className="text-center"><div className="text-5xl md:text-6xl font-light mb-2">12</div><p className="text-sm tracking-[0.2em] text-primary/60 uppercase">International</p></motion.div>
            <motion.div variants={fadeInUp} className="text-center"><div className="text-5xl md:text-6xl font-light mb-2">8</div><p className="text-sm tracking-[0.2em] text-primary/60 uppercase">AIA Honors</p></motion.div>
            <motion.div variants={fadeInUp} className="text-center"><div className="text-5xl md:text-6xl font-light mb-2">15</div><p className="text-sm tracking-[0.2em] text-primary/60 uppercase">Years</p></motion.div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-32">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="space-y-16">
              {[...Array(3)].map((_, i) => (<div key={i} className="animate-pulse"><div className="h-8 bg-primary/10 w-24 mb-8" /><div className="space-y-4"><div className="h-20 bg-primary/10" /><div className="h-20 bg-primary/10" /></div></div>))}
            </div>
          ) : (
            <div className="space-y-24">
              {Object.entries(awardsByYear).sort(([a], [b]) => Number(b) - Number(a)).map(([year, yearAwards]) => (
                <motion.div key={year} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-6xl md:text-7xl font-light text-primary/20 mb-8">{year}</h2>
                  <div className="space-y-0">
                    {yearAwards.map((award, index) => (
                      <motion.div key={award.id} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="grid md:grid-cols-12 gap-4 py-6 border-b border-primary/10 items-center">
                        <div className="md:col-span-5"><h3 className="text-xl font-light">{award.title}</h3></div>
                        <div className="md:col-span-3"><p className="text-primary/60">{award.organization}</p></div>
                        <div className="md:col-span-3"><p className="text-primary/50 text-sm">{award.project}</p></div>
                        <div className="md:col-span-1 flex justify-end">{award.category && (<span className="text-xs tracking-[0.15em] text-primary/40 uppercase">{award.category}</span>)}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="px-6 lg:px-12 py-32 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-sm tracking-[0.3em] text-primary/60 uppercase mb-16">Featured In</motion.h2>
          <motion.div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            {['Architectural Digest', 'Dezeen', 'Wallpaper*', 'Dwell', 'Frame', 'Azure'].map((pub) => (
              <motion.div key={pub} variants={fadeInUp} className="text-center"><span className="text-lg md:text-xl font-light text-primary/40">{pub}</span></motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
