import { useState, useEffect } from 'react'
import { awards } from '../data/awards'

export function useAwards() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(awards)
      setLoading(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return { data, loading }
}

export function useFeaturedAwards() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(awards.filter(a => a.featured))
      setLoading(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return { data, loading }
}
