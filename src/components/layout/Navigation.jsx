import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { mainNav } from "../../data/navigation";
import { siteData } from "../../data/site";
import { projects } from "../../data/projects";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isLightPage = [
    "/projects",
    "/journal",
    "/about",
    "/services",
    "/process",
    "/contact",
  ].some((path) => location.pathname === path || location.pathname.startsWith(`${path}/`));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled || isLightPage
            ? "bg-ivory/90 backdrop-blur-md border-b border-black/5 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="relative z-50">
              <span
                className={`font-display text-2xl font-light tracking-[-0.02em] transition-colors ${
                  isScrolled || isLightPage ? "text-basalt" : "text-ivory"
                }`}
              >
                SVIT HUB
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {mainNav.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  isActive={location.pathname === item.href}
                  isScrolled={isScrolled || isLightPage}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* CTA + Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <Link
                to="/contact"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-sans text-basalt bg-ochre hover:bg-gold transition-colors duration-300"
              >
                Begin a Project
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden relative z-50 p-2 transition-colors ${
                  isScrolled || isLightPage ? "text-basalt" : "text-ivory"
                }`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 lg:hidden"
          >
            {/* Background */}
            <motion.div
              className="absolute inset-0 bg-basalt"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Background Image */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Content */}
            <motion.div
              className="relative h-full flex flex-col justify-between px-6 pt-28 pb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              {/* Nav Links */}
              <div className="space-y-1">
                {mainNav.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + index * 0.05 }}
                  >
                    <Link
                      to={item.href}
                      className="group flex items-center justify-between py-4 border-b border-ivory/10"
                    >
                      <span className="font-display text-4xl font-light text-ivory group-hover:text-ochre transition-colors">
                        {item.label}
                      </span>
                      {item.href === "/projects" && (
                        <span className="font-mono text-xs text-stone">
                          {projects.length} Projects
                        </span>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Footer Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                <div>
                  <p className="font-mono text-xs text-stone uppercase tracking-widest mb-2">
                    Studio
                  </p>
                  <p className="font-sans text-sm text-ivory/80 leading-relaxed">
                    {siteData.location.address}
                    <br />
                    {siteData.location.city}, {siteData.location.state}{" "}
                    {siteData.location.pin}
                  </p>
                </div>

                <div className="flex gap-6">
                  <a
                    href={siteData.social.instagram}
                    className="font-mono text-xs text-ochre uppercase tracking-widest hover:text-gold transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href={siteData.social.linkedin}
                    className="font-mono text-xs text-ochre uppercase tracking-widest hover:text-gold transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>

                <p className="font-mono text-xs text-stone">
                  {siteData.location.coordinates}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, children, isActive, isScrolled }) {
  return (
    <Link
      to={href}
      className={`group relative py-2 font-sans text-sm transition-colors ${
        isScrolled
          ? "text-basalt/80 hover:text-basalt"
          : "text-ivory/90 hover:text-ivory"
      }`}
    >
      {children}
      <span
        className={`absolute bottom-0 left-0 h-px bg-ochre transition-transform duration-300 origin-left ${
          isActive
            ? "w-full scale-x-100"
            : "w-full scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </Link>
  );
}
