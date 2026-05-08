import { useEffect, useState } from 'react'

export default function Counter({ from = 0, to, duration = 2, delay = 0, isInView }) {
  const [displayValue, setDisplayValue] = useState(from)

  useEffect(() => {
    if (!isInView) return

    const timeout = setTimeout(() => {
      let startTime = null
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        
        // Easing function (ease out quad)
        const easeOutQuad = progress * (2 - progress)
        const currentValue = Math.floor(from + (to - from) * easeOutQuad)
        
        setDisplayValue(currentValue)

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }, delay * 1000)

    return () => clearTimeout(timeout)
  }, [from, to, duration, delay, isInView])

  return (
    <span className="font-display text-3xl lg:text-4xl text-basalt">
      {displayValue}
    </span>
  )
}
