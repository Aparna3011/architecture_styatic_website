import { motion } from 'framer-motion'
import { useTeam } from '../api/useTeam'
import { siteData } from '../data/site'
import { statistics } from '../data/statistics'
import Counter from '../components/ui/Counter'
import { pageTransition, fadeInUp, staggerContainer } from '../utils/animations'

export default function About() {
  const { team, isLoading } = useTeam()

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="pt-32"
    >
      <section className="px-6 lg:px-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.span 
              variants={fadeInUp}
              className="text-sm tracking-[0.3em] text-primary/60 uppercase mb-6 block"
            >
              About the Studio
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-light leading-[0.9] mb-12"
            >
              We design spaces
              <br />
              <span className="italic text-primary/70">that inspire</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-primary/70 max-w-2xl leading-relaxed"
            >
              {siteData.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 lg:px-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="aspect-[16/9] bg-primary/5 overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
              alt="HAUS Studio workspace"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="px-6 lg:px-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {statistics.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <div className="text-5xl md:text-6xl font-light mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm tracking-[0.2em] text-primary/60 uppercase">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-6 lg:px-12 mb-32 bg-primary/5 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm tracking-[0.3em] text-primary/60 uppercase mb-6 block">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
                Founded on the belief that architecture shapes lives
              </h2>
              <div className="space-y-6 text-primary/70 leading-relaxed">
                <p>
                  HAUS was founded in 2009 by Marcus Chen and Elena Voss, two architects 
                  who shared a vision of creating spaces that transcend mere functionality.
                </p>
                <p>
                  Today, we have grown to a team of 47 talented architects, designers, 
                  and craftspeople, operating from studios in New York, London, and Tokyo.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/5] bg-primary/10 overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80"
                alt="HAUS founders"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-sm tracking-[0.3em] text-primary/60 uppercase mb-6 block">
              Leadership
            </span>
            <h2 className="text-4xl md:text-5xl font-light">The Team</h2>
          </motion.div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-[3/4] bg-primary/10 mb-4" />
                  <div className="h-6 bg-primary/10 w-3/4 mb-2" />
                  <div className="h-4 bg-primary/10 w-1/2" />
                </div>
              ))}
            </div>
          ) : (
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {(team || []).slice(0, 4).map((member) => (
                <motion.div
                  key={member.id}
                  variants={fadeInUp}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[3/4] bg-primary/5 mb-4 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-light mb-1">{member.name}</h3>
                  <p className="text-sm text-primary/60">{member.role}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-sm tracking-[0.3em] text-primary/60 uppercase mb-6 block">
              What Guides Us
            </span>
            <h2 className="text-4xl md:text-5xl font-light">Our Values</h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { title: 'Craftsmanship', description: 'Every detail matters. We partner with master craftspeople to ensure the highest quality.' },
              { title: 'Innovation', description: 'We embrace new technologies and materials while respecting timeless principles.' },
              { title: 'Sustainability', description: 'Our designs minimize environmental impact while maximizing beauty and functionality.' }
            ].map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <h3 className="text-2xl font-light mb-4">{value.title}</h3>
                <p className="text-primary/70 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
