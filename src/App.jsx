import React from 'react'
import { motion } from 'framer-motion'
import {
  FiPhone,
  FiMail,
  FiStar,
  FiMapPin,
  FiArrowUpRight,
  FiCheckCircle,
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
   WHY GEOWELL
───────────────────────────────────────────────────────────────── */
const affiliations = [
  { name: 'Apopka Area Chamber of Commerce',      gray: 'https://res.cloudinary.com/dzaz02jrd/image/upload/e_grayscale,f_auto,q_auto/geowell/affiliations/apopka-chamber',   color: 'https://res.cloudinary.com/dzaz02jrd/image/upload/f_auto,q_auto/geowell/affiliations/apopka-chamber'   },
  { name: 'IICRC Certified Firm',                  gray: 'https://res.cloudinary.com/dzaz02jrd/image/upload/e_grayscale,f_auto,q_auto/geowell/affiliations/iicrc-certified', color: 'https://res.cloudinary.com/dzaz02jrd/image/upload/f_auto,q_auto/geowell/affiliations/iicrc-certified' },
  { name: 'Featured on Houzz',                     gray: 'https://res.cloudinary.com/dzaz02jrd/image/upload/e_grayscale,f_auto,q_auto/geowell/affiliations/houzz',           color: 'https://res.cloudinary.com/dzaz02jrd/image/upload/f_auto,q_auto/geowell/affiliations/houzz'           },
  { name: 'HomeAdvisor Screened & Approved',       gray: 'https://res.cloudinary.com/dzaz02jrd/image/upload/e_grayscale,f_auto,q_auto/geowell/affiliations/homeadvisor',    color: 'https://res.cloudinary.com/dzaz02jrd/image/upload/f_auto,q_auto/geowell/affiliations/homeadvisor'    },
  { name: 'IICRC',                                 gray: 'https://res.cloudinary.com/dzaz02jrd/image/upload/e_grayscale,f_auto,q_auto/geowell/affiliations/iicrc-logo',     color: 'https://res.cloudinary.com/dzaz02jrd/image/upload/f_auto,q_auto/geowell/affiliations/iicrc-logo'     },
  { name: 'Essian Construction & Development',     gray: 'https://res.cloudinary.com/dzaz02jrd/image/upload/e_grayscale,f_auto,q_auto/geowell/affiliations/essian',         color: 'https://res.cloudinary.com/dzaz02jrd/image/upload/f_auto,q_auto/geowell/affiliations/essian'         },
]

const credentials = [
  'State of Florida Licensed Certified General Contractor — CGC1526376',
  'State of Florida Licensed Home Inspector — HI6912',
  'Federal EPA Certified Lead Firm — #NAT-F252311-1',
  'IICRC Certified Firm — #56237072',
  '12 Active IICRC Certifications — ASD · WRT · TCST · FRST · AMRT · AMRS · OCT · HST · CCT · JCT',
  '26+ Years Experience',
]

function WhyGeoWell() {
  return (
    <section className="why-geowell section" aria-labelledby="why-heading">
      <div className="container">
        <div className="why-geowell__top">
          <motion.div
            className="why-geowell__header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p className="why-geowell__eyebrow" variants={fadeUp}>Why GeoWell</motion.p>
            <motion.h2 className="why-geowell__heading" id="why-heading" variants={fadeUp}>
              Most Companies Send a Crew. We Send a Former City of Orlando Inspector.
            </motion.h2>
          </motion.div>
          
          <motion.div
            className="why-geowell__body-wrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            custom={0.2}
          >
            <p className="why-geowell__body">
              Most restoration companies are unlicensed crews. Brandelle George holds 12 active
              IICRC certifications, a Florida General Contractor license, and spent years as a
              City of Orlando Inspector. When GeoWell shows up — you know exactly who you&rsquo;re getting.
            </p>
          </motion.div>
        </div>

        <motion.ul 
          className="why-geowell__specs" 
          role="list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {credentials.map((c) => {
            const hasDash = c.includes(' — ')
            const isAbbrev = c.includes(' · ')
            
            return (
              <motion.li key={c} className="why-geowell__spec-item" variants={fadeUp}>
                <FiCheckCircle className="spec-icon" aria-hidden="true" />
                <div className="spec-content">
                  {hasDash ? (
                    <>
                      <strong className="spec-title">{c.split(' — ')[0]}</strong>
                      <span className="spec-badge">{c.split(' — ')[1]}</span>
                    </>
                  ) : isAbbrev ? (
                    <strong className="spec-title spec-abbrev">{c}</strong>
                  ) : (
                    <strong className="spec-title">{c}</strong>
                  )}
                </div>
              </motion.li>
            )
          })}
        </motion.ul>

        <motion.div
          className="why-geowell__affiliations"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <hr className="why-geowell__divider" />
          <p className="why-geowell__affil-label">Trusted &amp; Affiliated With</p>
          <div className="why-geowell__affil-list">
            {affiliations.map((a) => (
              <div key={a.name} className="why-geowell__affil-card">
                <img
                  src={a.gray}
                  data-color-src={a.color}
                  alt={a.name}
                  className="affil-logo"
                  onMouseEnter={(e) => {
                    const img = e.currentTarget
                    img.style.opacity = '0'
                    setTimeout(() => {
                      img.src = img.dataset.colorSrc
                      img.style.opacity = '1'
                    }, 100)
                  }}
                  onMouseLeave={(e) => {
                    const img = e.currentTarget
                    img.style.opacity = '0'
                    setTimeout(() => {
                      img.src = a.gray
                      img.style.opacity = '1'
                    }, 100)
                  }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────
   INSURANCE CALLOUT
───────────────────────────────────────────────────────────────── */
function InsuranceCallout() {
  return (
    <section className="insurance-callout" aria-labelledby="insurance-heading">
      <div className="container insurance-callout__inner">
        <motion.div
          className="insurance-callout__text"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="insurance-callout__heading" id="insurance-heading">
            We Work Directly With Your Insurance Adjuster.
          </h2>
          <p className="insurance-callout__body">
            Most homeowners don&rsquo;t know how to navigate a damage claim. We do. GeoWell handles
            the documentation, communicates with your adjuster, and fights to make sure your
            claim covers the full scope of work.
          </p>
          <motion.a
            href="tel:+18774369355"
            className="btn btn--insurance"
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.97 }}
          >
            <FiPhone aria-hidden="true" />
            Call Before You Call Your Insurance — (877) 436-9355
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────
   INDUSTRY SPECIALISTS
───────────────────────────────────────────────────────────────── */
function IndustrySpecialists() {
  return (
    <section className="industry section" aria-labelledby="industry-heading">
      <div className="container">
        <motion.div
          className="industry__inner"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="industry__eyebrow">For Industry Professionals</p>
          <h2 className="industry__heading" id="industry-heading">
            GCs, Property Managers, Realtors &amp; Plumbers — We Work With You.
          </h2>
          <p className="industry__body">
            GeoWell offers discounted pricing for industry professionals. Whether you manage
            multifamily properties, work in real estate, or run a plumbing or contracting
            operation — we understand your world. No inflated claims, no slow turnarounds.
            Just fast, professional restoration at rates that work for your business.
          </p>
          <p className="industry__contact">
            Text or call us directly —{' '}
            <a href="tel:+14075758055">(407) 575-8055</a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────
   CLIENTS SAY  (stats + reviews, unified section)
───────────────────────────────────────────────────────────────── */
const stats = [
  { number: '26+',       label: 'Years in Business' },
  { number: '4.9\u2605', label: 'Average Rating'    },
  { number: '79',        label: 'Verified Reviews'  },
]

function ClientsSay() {
  return (
    <section className="clients-say section" id="reviews" aria-labelledby="clients-say-heading">
      <div className="container">
        <motion.header
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <div className="section-eyebrow">
            <FiStar aria-hidden="true" />
            <span>What Our Clients Say</span>
          </div>
          <h2 className="section-heading" id="clients-say-heading">
            Trusted by Homeowners and Professionals Across Central Florida
          </h2>
        </motion.header>

        {/* Stat boxes */}
        <motion.ul
          className="clients-say__stats"
          role="list"
          aria-label="Company statistics"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {stats.map((s) => (
            <motion.li
              key={s.label}
              className="clients-say__stat"
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
            >
              <span className="clients-say__stat-number">{s.number}</span>
              <span className="clients-say__stat-label">{s.label}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Review cards */}
        <motion.ul
          className="clients-say__reviews"
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

        <motion.p
          className="clients-say__footer-link"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          custom={0.3}
        >
          <a
            href="https://g.co/geowell"
            className="link--external"
            rel="noopener noreferrer"
            target="_blank"
          >
            Read all 79 reviews on Google <FiArrowUpRight aria-hidden="true" />
          </a>
        </motion.p>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────
   LEGACY TRIBUTE
───────────────────────────────────────────────────────────────── */
function Legacy() {
  return (
    <section className="legacy section" aria-labelledby="legacy-heading">
      <div className="container legacy__inner">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="about-legacy__eyebrow">Our Legacy</p>
          <h2 className="about-legacy__legacy-heading" id="legacy-heading">
            Cliff Boutwell, USMC / US Army<br />
            <span className="about-legacy__dates">11/13/73 &ndash; 11/23/16</span>
          </h2>

          <div className="about-legacy__photo-wrap">
            <img
              src="https://res.cloudinary.com/dzaz02jrd/image/upload/v1774664435/cr_w_2480_h_1240_rolcf5.webp"
              alt="Cliff Boutwell"
              className="about-legacy__photo"
            />
          </div>

          <div className="about-legacy__tribute">
            <p>Cliff Boutwell a real American Hero! He served his Country all his life. From being in the Marines and then serving in the Army National Guard.</p>
            <p>Boutwell was a true friend! We did bootcamp together, Marine Combat Training, our MOS (Electro Maintenance Weapons Tech) together and then later served at the same base: Camp Lejuene, NC. where we saw each other often.</p>
            <p>Totally different backgrounds but that didn&rsquo;t matter. We stayed in touch over the years with the use of email, myspace and eventually facebook. Talked on the phone and even attempted to meet up a few times when I visited GA.</p>
            <p>This company is dedicated to Boutwell so all can remember. They say a person is never forgotten as long as someone speaks about them...</p>
            <p>I&rsquo;ve been in construction after getting out of the Marines...and I decided that a company name change and philosophy change was the best way to Honor my fallen comrade. #NeverForget - We Love You.</p>
            <p>When you look down years from now....I hope you see my son and yours running this company!!!!!!!!</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────
   SERVICE AREAS
───────────────────────────────────────────────────────────────── */
const cities = [
  'Apopka', 'Orlando', 'Winter Garden', 'Altamonte Springs',
  'Longwood', 'Lake Mary', 'Ocoee', 'Winter Park',
  'Clermont', 'Mount Dora', 'Sanford', 'Kissimmee',
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
    initials: 'CL',
    name:     'CWO3 Chris L., USMC',
    location: '',
    body:     "Brandelle is trustworthy, honest, and bent on doing excellent work. Stop looking — you found what you were looking for.",
  },
  {
    initials: 'JH',
    name:     'Capt. Jason H., USMC',
    location: '',
    body:     "Very professional and hard working team. Worked with the adjuster and insurance company during the process. Highly recommend.",
  },
  {
    initials: 'MM',
    name:     'Michelle M.',
    location: '',
    body:     "Prompt, courteous, thorough and efficient — they took a lot of the stress out of mitigating the damage to our home after a storm. Highly recommend.",
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

      <div className="footer__community">
        <div className="container footer__community-inner">
          <p className="footer__community-text">
            <em>Proud to serve the Apopka community — Shop with a Cop &middot; CF4CF &middot; Apopka K-9 Unit &middot; Winter Park HS Athletics</em>
          </p>
          <a href="#" className="footer__community-link">See our community involvement &rarr;</a>
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
        <WhyGeoWell />
        <InsuranceCallout />
        <ClientsSay />
        <ProcessScrollytelling />
        <IndustrySpecialists />
        <ServiceAreas />
        <EmergencyCTA />
        <Legacy />
      </main>
      <Footer />
    </>
  )
}
