export const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.7, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  }
}

export const staggerContainerVariants = {
  hidden: {},
  visible: { 
    transition: { 
      staggerChildren: 0.1 
    } 
  }
}

export const clipRevealVariants = {
  hidden: { clipPath: 'inset(100% 0 0 0)' },
  visible: { 
    clipPath: 'inset(0% 0 0 0)', 
    transition: { 
      duration: 0.9, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  }
}

export const scaleRevealVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  }
}

export const slideInLeftVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.7, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  }
}

export const slideInRightVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.7, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  }
}

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: {
      duration: 0.3
    }
  }
}
export const fadeInUp = fadeUpVariants;
export const staggerContainer = staggerContainerVariants;