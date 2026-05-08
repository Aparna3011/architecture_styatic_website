import { useState, useEffect } from 'react'
import { projects } from '../data/projects'

export function useProjects(filter = null) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      const filtered = filter
        ? projects.filter(p => p.typology === filter)
        : projects
      setData(filtered)
      setLoading(false)
    }, 400)
    return () => clearTimeout(timer)
  }, [filter])

  return { data, loading }
}

export function useProject(slug) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setData(projects.find(p => p.slug === slug) || null)
      setLoading(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [slug])

  return { data, loading }
}

export function useFeaturedProjects() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(projects.filter(p => p.featured))
      setLoading(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return { data, loading }
}
