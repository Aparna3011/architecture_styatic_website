import { useState } from 'react'
import { motion } from 'framer-motion'
import { siteData } from '../data/site'
import { pageTransition, fadeInUp, staggerContainer } from '../utils/animations'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', projectType: '', budget: '', timeline: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition} className="pt-32">
      <section className="px-6 lg:px-12 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.span variants={fadeInUp} className="text-sm tracking-[0.3em] text-primary/60 uppercase mb-6 block">Get in Touch</motion.span>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-light leading-[0.9] mb-8">
              Start a<br /><span className="italic text-primary/70">Conversation</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-primary/70 max-w-xl leading-relaxed">
              Whether you have a specific project in mind or simply want to explore possibilities, we would love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              {isSubmitted ? (
                <div className="h-full flex flex-col justify-center">
                  <h2 className="text-3xl font-light mb-4">Thank you for reaching out.</h2>
                  <p className="text-primary/70 mb-8">We have received your inquiry and will be in touch within 2 business days.</p>
                  <button onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', phone: '', projectType: '', budget: '', timeline: '', message: '' }) }} className="text-sm tracking-[0.15em] uppercase text-primary/60 hover:text-primary transition-colors">Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div><label className="block text-xs tracking-[0.2em] uppercase text-primary/50 mb-3">Name *</label><input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-transparent border-b border-primary/20 py-3 focus:border-primary outline-none transition-colors" /></div>
                    <div><label className="block text-xs tracking-[0.2em] uppercase text-primary/50 mb-3">Email *</label><input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-transparent border-b border-primary/20 py-3 focus:border-primary outline-none transition-colors" /></div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div><label className="block text-xs tracking-[0.2em] uppercase text-primary/50 mb-3">Phone</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-transparent border-b border-primary/20 py-3 focus:border-primary outline-none transition-colors" /></div>
                    <div><label className="block text-xs tracking-[0.2em] uppercase text-primary/50 mb-3">Project Type</label><select name="projectType" value={formData.projectType} onChange={handleChange} className="w-full bg-transparent border-b border-primary/20 py-3 focus:border-primary outline-none transition-colors cursor-pointer"><option value="">Select...</option><option value="residential">Residential</option><option value="commercial">Commercial</option><option value="hospitality">Hospitality</option><option value="cultural">Cultural</option><option value="other">Other</option></select></div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div><label className="block text-xs tracking-[0.2em] uppercase text-primary/50 mb-3">Estimated Budget</label><select name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-transparent border-b border-primary/20 py-3 focus:border-primary outline-none transition-colors cursor-pointer"><option value="">Select...</option><option value="under-1m">Under $1M</option><option value="1m-5m">$1M - $5M</option><option value="5m-10m">$5M - $10M</option><option value="10m-plus">$10M+</option><option value="tbd">To Be Determined</option></select></div>
                    <div><label className="block text-xs tracking-[0.2em] uppercase text-primary/50 mb-3">Timeline</label><select name="timeline" value={formData.timeline} onChange={handleChange} className="w-full bg-transparent border-b border-primary/20 py-3 focus:border-primary outline-none transition-colors cursor-pointer"><option value="">Select...</option><option value="immediate">Immediate</option><option value="3-6-months">3-6 Months</option><option value="6-12-months">6-12 Months</option><option value="12-plus-months">12+ Months</option><option value="exploratory">Exploratory</option></select></div>
                  </div>
                  <div><label className="block text-xs tracking-[0.2em] uppercase text-primary/50 mb-3">Tell Us About Your Project *</label><textarea name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full bg-transparent border-b border-primary/20 py-3 focus:border-primary outline-none transition-colors resize-none" /></div>
                  <button type="submit" disabled={isSubmitting} className="border border-primary px-12 py-4 text-sm tracking-[0.2em] uppercase hover:bg-primary hover:text-background transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed">{isSubmitting ? 'Sending...' : 'Send Message'}</button>
                </form>
              )}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-16">
              <div>
                <h3 className="text-sm tracking-[0.3em] text-primary/60 uppercase mb-8">Studios</h3>
                <div className="space-y-8">
                  {(siteData.locations || []).map((location, index) => (
                    <div key={index}><h4 className="text-xl font-light mb-2">{location.city}</h4><p className="text-primary/60 leading-relaxed">{location.address}<br />{location.phone}</p></div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm tracking-[0.3em] text-primary/60 uppercase mb-8">General Inquiries</h3>
                <p><a href={`mailto:${siteData.email}`} className="text-lg hover:text-primary/70 transition-colors">{siteData.email}</a></p>
              </div>
              <div>
                <h3 className="text-sm tracking-[0.3em] text-primary/60 uppercase mb-8">Follow Us</h3>
                <div className="flex gap-6">
                  {Object.entries(siteData.social).map(([platform, url]) => (
                    <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="text-sm tracking-[0.15em] uppercase text-primary/60 hover:text-primary transition-colors">{platform}</a>
                  ))}
                </div>
              </div>
              <div className="aspect-[4/3] bg-primary/5 flex items-center justify-center"><span className="text-primary/30 text-sm tracking-[0.2em] uppercase">Map Integration</span></div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
