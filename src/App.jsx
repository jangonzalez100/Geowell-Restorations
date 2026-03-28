import React from 'react'
import { motion } from 'framer-motion'
import {
  FiPhone,
  FiMail,
  FiStar,
  FiMapPin,
  FiArrowUpRight,
  FiShield,
} from 'react-icons/fi'
import Hero from './components/Hero'
import Services from './components/Services'
import ProcessScrollytelling from './components/ProcessScrollytelling'

/* ─────────────────────────────────────────────────────────────────
   SHARED FADE-UP VARIANT
───────────────────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

/* ─────────────────────────────────────────────────────────────────
   SOCIAL PROOF
───────────────────────────────────────────────────────────────── */
const stats = [
  { number: '25+',  label: 'Years of mastery'    },
  { number: '500+', label: 'Properties restored'  },
  { number: '4.9',  label: 'Star rating'          },
  { number: 'L&I',  label: 'Licensed & Insured'   },
]

function SocialProof() {
  return (
    <section className="social-proof section" id="about">
      <div className="container">
        <div className="social-proof__inner">
          <motion.blockquote
            className="pull-quote"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            custom={0}
          >
            <p className="pull-quote__text">
              &ldquo;GeoWell showed up at 2&nbsp;a.m. after our pipe burst and had
              everything under control before sunrise. Our home looks better than it
              did before the damage. They don&rsquo;t just restore properties —
              they restore your peace of mind.&rdquo;
            </p>
            <footer className="pull-quote__attribution">
              <cite>— Maria T., Apopka, FL</cite>
            </footer>
          </motion.blockquote>

          <ul className="stat-list" role="list" aria-label="Company statistics">
            {stats.map((s, i) => (
              <motion.li
                key={s.label}
                className="stat-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeUp}
                custom={i * 0.1}
              >
                <span className="stat-item__number">{s.number}</span>
                <span className="stat-item__label">{s.label}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────
   SERVICE AREAS
───────────────────────────────────────────────────────────────── */
const cities = [
  'Apopka', 'Orlando', 'Lake Nona', 'Winter Garden',
  'Sanford', 'Ocoee', 'Clermont', 'Kissimmee',
  'Longwood', 'Maitland', 'Windermere', 'Altamonte Springs',
]

function ServiceAreas() {
  return (
    <section className="service-areas section" id="areas">
      <div className="container">
        <motion.header
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <h2 className="section-heading" id="areas-heading">
            We Serve Central Florida
          </h2>
          <p className="section-subhead">
            Rapid response across Orange, Seminole, and Lake Counties.
            When your property is compromised, proximity is everything.
          </p>
        </motion.header>

        <motion.ul
          className="areas-grid"
          role="list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.04 } },
          }}
        >
          {cities.map((city) => (
            <motion.li
              key={city}
              className="area-chip"
              variants={{
                hidden:   { opacity: 0, scale: 0.88 },
                visible:  { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <FiMapPin aria-hidden="true" className="area-chip__icon" />
              {city}
            </motion.li>
          ))}
        </motion.ul>

        <p className="areas-note">
          Don&rsquo;t see your city?{' '}
          <a href="tel:+18774369355">Call us</a> — if it&rsquo;s in Central Florida, we&rsquo;re already on our way.
        </p>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────
   REVIEWS
───────────────────────────────────────────────────────────────── */
const reviews = [
  {
    initials: 'JR',
    name:     'James R.',
    location: 'Apopka, FL',
    body:     "Called at midnight after flooding from a broken water heater. Crew was on-site within 45 minutes. Professional, thorough, and genuinely calm when I was anything but. 10/10.",
  },
  {
    initials: 'ST',
    name:     'Sandra T.',
    location: 'Winter Garden, FL',
    body:     "After the hurricane, half our roof was gone and water was everywhere. GeoWell tarped, dried, and fully restored our home in three weeks — and they handled every insurance call so we didn't have to.",
  },
  {
    initials: 'DM',
    name:     'David M.',
    location: 'Orlando, FL',
    body:     "We had smoke and soot throughout the house after a kitchen fire. GeoWell completely eliminated the odor — something three other companies said wasn't possible. Our home smells brand new.",
  },
]

function Stars() {
  return (
    <span className="review-card__stars" aria-label="5 out of 5 stars" role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <FiStar key={i} aria-hidden="true" className="star-icon" />
      ))}
    </span>
  )
}

function Reviews() {
  return (
    <section className="reviews section" id="reviews">
      <div className="container">
        <motion.header
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <h2 className="section-heading" id="reviews-heading">What Homeowners Say</h2>
          <p className="section-subhead">
            4.9&#x2605; across 72 verified Google reviews.{' '}
            <a
              href="https://g.co/geowell"
              className="link--external"
              rel="noopener noreferrer"
              target="_blank"
            >
              Read all reviews <FiArrowUpRight aria-hidden="true" />
            </a>
          </p>
        </motion.header>

        <motion.ul
          className="reviews-grid"
          role="list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }}
        >
          {reviews.map((r) => (
            <motion.li
              key={r.name}
              className="review-card"
              variants={{
                hidden:  { opacity: 0, y: 36 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
            >
              <Stars />
              <blockquote className="review-card__quote">
                <p>&ldquo;{r.body}&rdquo;</p>
              </blockquote>
              <footer className="review-card__author">
                <div className="review-card__avatar" aria-hidden="true">{r.initials}</div>
                <div>
                  <strong>{r.name}</strong>
                  <span className="review-card__location">{r.location}</span>
                </div>
              </footer>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────
   EMERGENCY CTA BANNER
───────────────────────────────────────────────────────────────── */
function EmergencyCTA() {
  return (
    <section className="emergency-cta" aria-labelledby="emergency-heading">
      <div className="container emergency-cta__inner">
        <motion.div
          className="emergency-cta__text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="emergency-cta__heading" id="emergency-heading">
            EMERGENCY?<br />WE&rsquo;RE READY.
          </h2>
          <p className="emergency-cta__subhead">
            Live dispatchers on standby. Every hour of delay compounds the damage.
          </p>
        </motion.div>

        <motion.a
          href="tel:+18774369355"
          className="btn btn--emergency btn--large"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.97 }}
        >
          <FiPhone aria-hidden="true" />
          Call (877) 436-9355
        </motion.a>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────
   NAV
───────────────────────────────────────────────────────────────── */
function Nav() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}
      role="banner"
    >
      <nav className="nav container" aria-label="Primary navigation">
        <a href="/" className="nav__logo" aria-label="GeoWell Restorations home" onClick={closeMenu}>
          <img src="/logo.webp" alt="GeoWell Logo" className="logo-img" />
          <span className="logo-text">
            GeoWell <span className="logo-text--accent">Restorations</span>
          </span>
        </a>

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

        <ul
          className={`nav__links${menuOpen ? ' is-open' : ''}`}
          id="nav-menu"
          role="list"
        >
          {['Services', 'Areas', 'Reviews', 'About'].map((label) => (
            <li key={label}>
              <a href={`#${label.toLowerCase()}`} onClick={closeMenu}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a href="tel:+18774369355" className="nav__phone btn btn--outline">
          <FiPhone aria-hidden="true" className="btn__icon" />
          (877) 436-9355
        </a>
      </nav>
    </header>
  )
}

/* ─────────────────────────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────────────────────────── */
function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer" id="contact" role="contentinfo">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="/" className="footer__logo" aria-label="GeoWell Restorations home">
            <img src="/logo.webp" alt="GeoWell Logo" className="logo-img logo-img--footer" />
            <span className="logo-text">
              GeoWell <span className="logo-text--accent">Restorations</span>
            </span>
          </a>
          <p className="footer__tagline">Restoring homes. Rebuilding lives.</p>
          <a href="tel:+18774369355" className="footer__phone">(877) 436-9355</a>
        </div>

        <nav className="footer__nav" aria-label="Services navigation">
          <h3 className="footer__nav-heading">Services</h3>
          <ul role="list">
            {['Water Damage', 'Fire & Smoke', 'Storm Damage', 'Commercial'].map((s) => (
              <li key={s}><a href="#services">{s}</a></li>
            ))}
          </ul>
        </nav>

        <nav className="footer__nav" aria-label="Company navigation">
          <h3 className="footer__nav-heading">Company</h3>
          <ul role="list">
            {[['About', '#about'], ['Service Areas', '#areas'], ['Reviews', '#reviews'], ['Contact', '#contact']].map(([label, href]) => (
              <li key={label}><a href={href}>{label}</a></li>
            ))}
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

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            &copy; {year} GeoWell Restorations. All rights reserved.
          </p>
          <ul className="footer__legal" role="list">
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/accessibility">Accessibility</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

/* ─────────────────────────────────────────────────────────────────
   ROOT APP
───────────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main-content">
        <Hero />
        <Services />
        <SocialProof />
        <ProcessScrollytelling />
        <ServiceAreas />
        <Reviews />
        <EmergencyCTA />
      </main>
      <Footer />
    </>
  )
}
