import Navigation from './Navigation'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
