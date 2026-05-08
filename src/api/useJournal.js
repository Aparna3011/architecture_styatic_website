import { useState, useEffect } from 'react'
import { journal } from '../data/journal'

export function useJournal(category = null) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      const filtered = category
        ? journal.filter(j => j.category === category)
        : journal
      setData(filtered)
      setLoading(false)
    }, 400)
    return () => clearTimeout(timer)
  }, [category])

  return { data, loading }
}

export function useArticle(slug) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setData(journal.find(j => j.slug === slug) || null)
      setLoading(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [slug])

  return { data, loading }
}
