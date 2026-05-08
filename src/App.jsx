import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { lazy, Suspense, useEffect, useState } from 'react'

import Layout from './components/layout/Layout'
import LoadingScreen from './components/ui/LoadingScreen'
import ScrollProgress from './components/ui/ScrollProgress'
import CustomCursor from './components/ui/CustomCursor'

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Projects = lazy(() => import('./pages/Projects'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const Services = lazy(() => import('./pages/Services'))
const Philosophy = lazy(() => import('./pages/Philosophy'))
const Journal = lazy(() => import('./pages/Journal'))
const ArticleDetail = lazy(() => import('./pages/ArticleDetail'))
const Process = lazy(() => import('./pages/Process'))
const Awards = lazy(() => import('./pages/Awards'))
const Careers = lazy(() => import('./pages/Careers'))
const Contact = lazy(() => import('./pages/Contact'))

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/journal/:slug" element={<ArticleDetail />} />
        <Route path="/process" element={<Process />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <Router>
      <CustomCursor />
      <ScrollProgress />
      <Layout>
        <Suspense fallback={<LoadingScreen />}>
          <AnimatedRoutes />
        </Suspense>
      </Layout>
    </Router>
  )
}

export default App
