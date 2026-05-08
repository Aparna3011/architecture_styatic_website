import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-basalt"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center"
      >
        <h1 className="font-display text-4xl md:text-5xl font-light text-ivory tracking-[-0.02em]">
          SVIT HUB
        </h1>
        <motion.div 
          className="mt-4 h-px bg-ochre origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          style={{ width: '120px', margin: '0 auto' }}
        />
        <p className="mt-4 font-mono text-xs text-stone tracking-[0.1em] uppercase">
          Architecture Studio
        </p>
      </motion.div>
    </motion.div>
  )
}
