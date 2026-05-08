import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { siteData } from '../../data/site'
import { footerNav } from '../../data/navigation'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-basalt text-ivory">
      {/* Main Footer */}
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block">
              <h2 className="font-display text-4xl lg:text-5xl font-light tracking-[-0.02em]">
                SVIT HUB
              </h2>
            </Link>
            <p className="mt-4 font-display text-xl italic text-stone">
              {siteData.tagline}
            </p>
            <p className="mt-6 font-sans text-sm text-ivory/70 leading-relaxed max-w-md">
              A spatial intelligence practice founded in 2012 in Kolhapur, Maharashtra. 
              We design buildings that are inseparable from the land they occupy, the 
              community that surrounds them, and the cultural memory they carry.
            </p>
            
            {/* Contact Info */}
            <div className="mt-8 space-y-2">
              <a 
                href={`tel:${siteData.contact.phone}`} 
                className="block font-mono text-sm text-ochre hover:text-gold transition-colors"
              >
                {siteData.contact.phone}
              </a>
              <a 
                href={`mailto:${siteData.contact.email}`}
                className="block font-mono text-sm text-ochre hover:text-gold transition-colors"
              >
                {siteData.contact.email}
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.values(footerNav).map((section) => (
              <div key={section.label}>
                <h3 className="font-mono text-xs text-stone uppercase tracking-[0.15em] mb-4">
                  {section.label}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link 
                        to={link.href}
                        className="group inline-flex items-center gap-1 font-sans text-sm text-ivory/80 hover:text-ivory transition-colors"
                      >
                        {link.label}
                        {link.href.startsWith('http') && (
                          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Address Section */}
        <div className="mt-16 pt-8 border-t border-ivory/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="font-mono text-xs text-stone uppercase tracking-[0.15em] mb-3">
                Studio
              </h4>
              <address className="not-italic font-sans text-sm text-ivory/70 leading-relaxed">
                {siteData.location.address}<br />
                {siteData.location.city}, {siteData.location.state}<br />
                {siteData.location.pin}, {siteData.location.country}
              </address>
            </div>
            
            <div>
              <h4 className="font-mono text-xs text-stone uppercase tracking-[0.15em] mb-3">
                Coordinates
              </h4>
              <p className="font-mono text-sm text-ivory/70">
                {siteData.location.coordinates}
              </p>
            </div>

            <div>
              <h4 className="font-mono text-xs text-stone uppercase tracking-[0.15em] mb-3">
                Established
              </h4>
              <p className="font-mono text-sm text-ivory/70">
                {siteData.established}
              </p>
            </div>

            <div>
              <h4 className="font-mono text-xs text-stone uppercase tracking-[0.15em] mb-3">
                Follow
              </h4>
              <div className="flex gap-4">
                <a 
                  href={siteData.social.instagram}
                  className="font-sans text-sm text-ivory/70 hover:text-ochre transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <a 
                  href={siteData.social.linkedin}
                  className="font-sans text-sm text-ivory/70 hover:text-ochre transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-ivory/10">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-mono text-xs text-stone">
              &copy; {currentYear} {siteData.fullName}. All rights reserved.
            </p>
            <p className="font-mono text-xs text-stone">
              Space. Memory. Matter.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
