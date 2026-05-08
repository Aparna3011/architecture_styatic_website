import { motion } from 'framer-motion'
import HeroSection from '../components/sections/HeroSection'
import StudioIntro from '../components/sections/StudioIntro'
import ProjectShowcase from '../components/sections/ProjectShowcase'
import PhilosophyStatement from '../components/sections/PhilosophyStatement'
import ServicesGrid from '../components/sections/ServicesGrid'
import ProcessTimeline from '../components/sections/ProcessTimeline'
import { pageTransition } from '../utils/animations'

export default function Home() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <HeroSection />
      <StudioIntro />
      <ProjectShowcase />
      <PhilosophyStatement />
      <ServicesGrid />
      <ProcessTimeline />
    </motion.div>
  )
}
