import { useState, useEffect } from 'react'
import { team } from '../data/team'

export function useTeam() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(team)
      setLoading(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return { data, loading }
}
