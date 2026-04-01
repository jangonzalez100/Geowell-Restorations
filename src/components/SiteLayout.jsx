import React, { useLayoutEffect } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { FiPhone, FiMail } from 'react-icons/fi'

const SITE_LOGO_URL = 'https://res.cloudinary.com/dzaz02jrd/image/upload/q_auto/f_auto/v1775046410/Gemini_Generated_Image_g4lfslg4lfslg4lf-Photoroom_l5eovw.webp'

const navItems = [
  { label: 'Services', to: '/services' },
  { label: 'Areas', to: '/areas' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'About', to: '/about' },
]

export default function SiteLayout() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const location = useLocation()
  const { pathname } = location

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  React.useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  React.useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    const raf = window.requestAnimationFrame(() => window.scrollTo(0, 0))
    return () => window.cancelAnimationFrame(raf)
  }, [location.key, pathname])

  const closeMenu = () => setMenuOpen(false)
  const navClass = ({ isActive }) => (isActive ? 'is-active' : undefined)

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`} role="banner">
        <nav className="nav container" aria-label="Primary navigation">
          <NavLink to="/" end className="nav__logo" aria-label="GeoWell Restorations home" onClick={closeMenu}>
            <img src={SITE_LOGO_URL} alt="GeoWell Logo" className="logo-img" />
            <span className="logo-text">
              GeoWell <span className="logo-text--accent">Restorations</span>
            </span>
          </NavLink>

          <button
            className="nav__toggle"
            aria-controls="nav-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="hamburger" />
            <span className="hamburger" />
            <span className="hamburger" />
          </button>

          <ul className={`nav__links${menuOpen ? ' is-open' : ''}`} id="nav-menu" role="list">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink to={item.to} className={navClass} onClick={closeMenu}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <a href="tel:+18774369355" className="nav__phone btn btn--outline">
            <FiPhone aria-hidden="true" className="btn__icon" />
            (877) 436-9355
          </a>
        </nav>
      </header>

      <main id="main-content">
        <Outlet />
      </main>

      <footer className="site-footer" id="contact" role="contentinfo">
        <div className="container footer__grid">
          <div className="footer__brand">
            <NavLink to="/" end className="footer__logo" aria-label="GeoWell Restorations home">
              <img src={SITE_LOGO_URL} alt="GeoWell Logo" className="logo-img logo-img--footer" />
              <span className="logo-text">
                GeoWell <span className="logo-text--accent">Restorations</span>
              </span>
            </NavLink>
            <p className="footer__tagline">Restoring homes. Rebuilding lives.</p>
            <a href="tel:+18774369355" className="footer__phone">(877) 436-9355</a>
          </div>

          <nav className="footer__nav" aria-label="Services navigation">
            <h3 className="footer__nav-heading">Services</h3>
            <ul role="list">
              <li><NavLink to="/services/fire-damage">Fire Damage</NavLink></li>
              <li><NavLink to="/services/water-damage">Water Damage</NavLink></li>
              <li><NavLink to="/services/fire-damage/smoke-damage">Smoke Damage</NavLink></li>
              <li><NavLink to="/services/water-damage/water-restoration">Water Restoration</NavLink></li>
            </ul>
          </nav>

          <nav className="footer__nav" aria-label="Company navigation">
            <h3 className="footer__nav-heading">Company</h3>
            <ul role="list">
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/areas">Service Areas</NavLink></li>
              <li><NavLink to="/reviews">Reviews</NavLink></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <div className="footer__contact">
            <h3 className="footer__nav-heading">Contact</h3>
            <address>
              <p>Apopka, FL 32703</p>
              <p>Serving Central Florida since 1998</p>
              <p>
                <a href="tel:+18774369355">
                  <FiPhone aria-hidden="true" /> (877) 436-9355
                </a>
              </p>
              <p>
                <a href="mailto:info@geowellrestorations.com">
                  <FiMail aria-hidden="true" /> info@geowellrestorations.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="footer__community">
          <div className="container footer__community-inner">
            <p className="footer__community-text">
              <em>Proud to serve the Apopka community: Shop with a Cop · CF4CF · Apopka K-9 Unit · Winter Park HS Athletics</em>
            </p>
            <a href="#" className="footer__community-link">See our community involvement →</a>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="container footer__bottom-inner">
            <p className="footer__copy">
              &copy; {new Date().getFullYear()} GeoWell Restorations. All rights reserved.
            </p>
            <ul className="footer__legal" role="list">
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/accessibility">Accessibility</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
