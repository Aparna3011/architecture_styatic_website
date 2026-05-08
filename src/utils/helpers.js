import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim()
}

export function getTypologyColor(typology) {
  const colors = {
    Residential: 'bg-ochre/20 text-ochre',
    Commercial: 'bg-slate/20 text-slate',
    Cultural: 'bg-terra/20 text-terra',
    Institutional: 'bg-bronze/20 text-bronze',
    Public: 'bg-stone/30 text-stone',
    Urban: 'bg-gold/20 text-gold'
  }
  return colors[typology] || 'bg-stone/20 text-stone'
}

export function getCategoryColor(category) {
  const colors = {
    'Material Studies': 'bg-ochre/20 text-ochre',
    'Urban Thinking': 'bg-slate/20 text-slate',
    'Project Stories': 'bg-terra/20 text-terra',
    'Design Philosophy': 'bg-bronze/20 text-bronze',
    'Studio Notes': 'bg-stone/30 text-stone'
  }
  return colors[category] || 'bg-stone/20 text-stone'
}
