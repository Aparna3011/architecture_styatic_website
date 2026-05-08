import { useState } from 'react'
import { motion } from 'framer-motion'
import { siteData } from '../data/site'
import { pageTransition, fadeInUp, staggerContainer } from '../utils/animations'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  })
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
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="pt-32"
    >
      <section className="px-6 lg:px-12 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.span
              variants={fadeInUp}
              className="font-mono text-xs tracking-[0.3em] text-stone uppercase mb-6 block"
            >
              Get in Touch
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.9] mb-8 text-basalt"
            >
              Start a
              <br />
              <span className="italic text-basalt/70">Conversation</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="font-sans text-base md:text-lg text-stone max-w-2xl leading-relaxed"
            >
              Whether you have a specific project in mind or simply want to explore
              possibilities, we would love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-28"
            >
              {isSubmitted ? (
                <div className="min-h-[520px] flex flex-col justify-center bg-ghost border border-stone/15 p-10 lg:p-12">
                  <h2 className="font-display text-3xl md:text-4xl font-light mb-4 text-basalt">
                    Thank you for reaching out.
                  </h2>
                  <p className="font-sans text-stone mb-8 leading-relaxed max-w-xl">
                    We have received your inquiry and will be in touch within 2 business
                    days.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        projectType: '',
                        budget: '',
                        timeline: '',
                        message: ''
                      })
                    }}
                    className="self-start font-mono text-xs tracking-[0.2em] uppercase text-ochre hover:text-gold transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-ghost border border-stone/15 p-8 md:p-10 lg:p-12 space-y-8"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block font-mono text-xs tracking-[0.2em] uppercase text-stone mb-3">
                        Name <span className="text-terra">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-stone/35 py-3 text-basalt placeholder:text-stone/60 focus:border-basalt outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs tracking-[0.2em] uppercase text-stone mb-3">
                        Email <span className="text-terra">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-stone/35 py-3 text-basalt placeholder:text-stone/60 focus:border-basalt outline-none transition-colors"
                        placeholder="name@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block font-mono text-xs tracking-[0.2em] uppercase text-stone mb-3">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-stone/35 py-3 text-basalt placeholder:text-stone/60 focus:border-basalt outline-none transition-colors"
                        placeholder="+91 …"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs tracking-[0.2em] uppercase text-stone mb-3">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-stone/35 py-3 text-basalt focus:border-basalt outline-none transition-colors cursor-pointer"
                      >
                        <option value="">Select…</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="hospitality">Hospitality</option>
                        <option value="cultural">Cultural</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block font-mono text-xs tracking-[0.2em] uppercase text-stone mb-3">
                        Estimated Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-stone/35 py-3 text-basalt focus:border-basalt outline-none transition-colors cursor-pointer"
                      >
                        <option value="">Select…</option>
                        <option value="under-1m">Under $1M</option>
                        <option value="1m-5m">$1M – $5M</option>
                        <option value="5m-10m">$5M – $10M</option>
                        <option value="10m-plus">$10M+</option>
                        <option value="tbd">To Be Determined</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-mono text-xs tracking-[0.2em] uppercase text-stone mb-3">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-stone/35 py-3 text-basalt focus:border-basalt outline-none transition-colors cursor-pointer"
                      >
                        <option value="">Select…</option>
                        <option value="immediate">Immediate</option>
                        <option value="3-6-months">3–6 Months</option>
                        <option value="6-12-months">6–12 Months</option>
                        <option value="12-plus-months">12+ Months</option>
                        <option value="exploratory">Exploratory</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs tracking-[0.2em] uppercase text-stone mb-3">
                      Tell us about your project <span className="text-terra">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-transparent border-b border-stone/35 py-3 text-basalt placeholder:text-stone/60 focus:border-basalt outline-none transition-colors resize-none"
                      placeholder="Scope, site location, priorities, or anything helpful…"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center px-10 py-4 bg-ochre text-basalt font-sans text-sm tracking-[0.15em] uppercase hover:bg-gold transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-10"
            >
              <div className="bg-ghost border border-stone/15 p-8 md:p-10">
                <h3 className="font-mono text-xs tracking-[0.3em] text-stone uppercase mb-6">
                  Studio
                </h3>
                <h4 className="font-display text-2xl font-light text-basalt mb-3">
                  {siteData.location.city}, {siteData.location.state}
                </h4>
                <p className="font-sans text-stone leading-relaxed">
                  {siteData.location.address}
                  <br />
                  {siteData.location.city}, {siteData.location.state} {siteData.location.pin}
                </p>
                <div className="mt-6 space-y-2">
                  <p className="font-sans">
                    <a
                      href={`tel:${siteData.contact.phone}`}
                      className="text-basalt/80 hover:text-basalt transition-colors"
                    >
                      {siteData.contact.phone}
                    </a>
                  </p>
                  <p className="font-sans">
                    <a
                      href={`mailto:${siteData.contact.email}`}
                      className="text-basalt/80 hover:text-basalt transition-colors"
                    >
                      {siteData.contact.email}
                    </a>
                  </p>
                </div>
                <p className="mt-6 font-mono text-xs text-stone tracking-[0.08em]">
                  {siteData.location.coordinates}
                </p>
              </div>

              <div className="bg-ghost border border-stone/15 p-8 md:p-10">
                <h3 className="font-mono text-xs tracking-[0.3em] text-stone uppercase mb-6">
                  Project Inquiries
                </h3>
                <p className="font-sans text-stone leading-relaxed">
                  For new projects, feel free to use the form or email directly:
                </p>
                <p className="mt-4">
                  <a
                    href={`mailto:${siteData.contact.inquiries}`}
                    className="font-sans text-lg text-basalt hover:text-basalt/70 transition-colors"
                  >
                    {siteData.contact.inquiries}
                  </a>
                </p>
              </div>

              <div className="bg-ghost border border-stone/15 p-8 md:p-10">
                <h3 className="font-mono text-xs tracking-[0.3em] text-stone uppercase mb-6">
                  Follow Us
                </h3>
                <div className="flex flex-wrap gap-x-8 gap-y-3">
                  {Object.entries(siteData.social).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs tracking-[0.2em] uppercase text-ochre hover:text-gold transition-colors"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-ghost border border-stone/15 p-8 md:p-10">
                <h3 className="font-mono text-xs tracking-[0.3em] text-stone uppercase mb-6">
                  Visit
                </h3>
                <div className="relative aspect-[4/3] bg-ivory border border-stone/15 overflow-hidden">
                  <iframe
                    title="SVIT HUB Location"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d337.781182284495!2d74.24413304042555!3d16.69899573514298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1778239188031!5m2!1sen!2sin"
                    className="absolute inset-0 h-full w-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
