import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { processPhases } from "../data/process";
import {
  pageTransition,
  fadeInUp,
  staggerContainer,
} from "../utils/animations";

export default function Process() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="pt-32"
    >
      <section className="px-6 lg:px-12 mb-24">
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
              How We Work
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-light leading-[0.9] mb-8"
            >
              Our
              <br />
              <span className="italic text-primary/70">Process</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-primary/70 max-w-2xl leading-relaxed"
            >
              Every exceptional space begins with a clear vision and a
              methodical approach. Our process is designed to transform your
              aspirations into architectural reality.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/10 transform md:-translate-x-1/2" />
            {processPhases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-8 mb-24 last:mb-0 ${index % 2 !== 0 ? "md:[direction:rtl]" : ""}`}
              >
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-background border-2 border-primary rounded-full transform -translate-x-1/2 md:-translate-x-1/2" />
                <div
                  className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:order-2 md:pl-16"}`}
                >
                  <span className="text-7xl font-light text-primary/10 block mb-4">
                    {String(phase.number).padStart(2, "0")}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-light mb-4">
                    {phase.title}
                  </h3>
                  <p className="text-primary/70 leading-relaxed mb-6">
                    {phase.description}
                  </p>
                  <div className="text-sm text-primary/50">
                    <span className="block mb-2">
                      Duration: {phase.duration}
                    </span>
                    <ul
                      className={`space-y-1 ${index % 2 === 0 ? "md:text-right" : ""}`}
                    >
                      {(phase.deliverables || []).map((deliverable, i) => (
                        <li key={i}>{deliverable}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div
                  className={`${index % 2 === 0 ? "md:order-2 md:pl-16" : "md:pr-16"}`}
                >
                  <div className="aspect-[4/3] bg-primary/5 overflow-hidden">
                    <img
                      src={
                        phase.image ||
                        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&q=80"
                      }
                      alt={phase.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-32 bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-light mb-16 text-center"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-8">
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary significantly based on scope and complexity. A residential renovation might take 8-12 months, while a new custom home typically requires 18-24 months.",
              },
              {
                question: "What is your fee structure?",
                answer:
                  "We typically work on a percentage-of-construction-cost basis, ranging from 10-15% depending on project scope.",
              },
              {
                question: "Do you work on projects outside of New York?",
                answer:
                  "Yes, we take on projects globally. We have completed work across five continents.",
              },
              {
                question: "How involved will I be in the design process?",
                answer:
                  "Client collaboration is central to our approach. You will be actively involved in all major design decisions.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-primary/10 pb-8"
              >
                <h3 className="text-xl font-light mb-4">{faq.question}</h3>
                <p className="text-primary/70 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-8">
              Ready to begin?
            </h2>
            <p className="text-lg text-primary/70 mb-12 max-w-2xl mx-auto">
              Every great project starts with a conversation. Tell us about your
              vision.
            </p>
            <Link
              to="/contact"
              className="inline-block border border-primary px-12 py-4 text-sm tracking-[0.2em] uppercase hover:bg-primary hover:text-background transition-colors duration-300"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
