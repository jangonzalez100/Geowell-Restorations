import React from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { FiPhone, FiCalendar, FiAward, FiClock, FiStar, FiMessageSquare } from 'react-icons/fi'

/* ─────────────────────────────────────────────────────────────────
   TRUST BAR ITEMS
───────────────────────────────────────────────────────────────── */
const trustItems = [
  { Icon: FiAward,        label: 'Since 1998'     },
  { Icon: FiStar,         label: '4.9\u2605 Rating' },
  { Icon: FiMessageSquare, label: '72 Reviews'    },
  { Icon: FiClock,        label: 'IICRC Certified' },
]

/* ─────────────────────────────────────────────────────────────────
   PARALLAX SHAPE - decorative background element with reduced scroll rate
───────────────────────────────────────────────────────────────── */
function ParallaxShape({ className, yRange }) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], yRange)
  const ySpring = useSpring(y, { stiffness: 80, damping: 22 })
  return (
    <motion.div
      className={`hero__shape ${className ?? ''}`}
      style={{ y: ySpring }}
      aria-hidden="true"
    />
  )
}

/* ─────────────────────────────────────────────────────────────────
   HERO
───────────────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading-sr">
      {/* Accessible heading for screen readers */}
      <h1 id="hero-heading-sr" className="sr-only">
        Your Worst Day. Our Best Work.
      </h1>

      {/* Background layer */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-image img-placeholder img-placeholder--hero">
          <span>Hero Image</span>
        </div>
        <div className="hero__overlay" />
      </div>

      {/* Decorative parallax shapes */}
      <ParallaxShape className="hero__shape--circle" yRange={[0, -60]} />
      <ParallaxShape className="hero__shape--ring"   yRange={[0, -30]} />

      {/* Main content - fully visible, no scroll/opacity effects */}
      <div className="hero__content container">
        <h1 className="hero__heading" aria-hidden="true">
          <span className="hero__heading--line1">YOUR WORST DAY.</span>
          <br />
          <span className="hero__heading--line2 hero__heading--accent">OUR BEST WORK.</span>
        </h1>

        {/* Subheadline */}
        <p className="hero__subhead">
          Fast response. No subcontractors. Guaranteed to pre-loss condition.
        </p>

        {/* CTAs */}
        <div className="hero__ctas">
          <a href="tel:+18774369355" className="btn btn--primary btn--large">
            <FiPhone aria-hidden="true" />
            Call Now
          </a>

          <a href="#contact" className="btn btn--secondary btn--large">
            <FiCalendar aria-hidden="true" />
            Schedule Inspection
          </a>
        </div>

        {/* Trust bar */}
        <ul className="trust-bar" role="list" aria-label="Company highlights">
          {trustItems.map(({ Icon, label }, i) => (
            <React.Fragment key={label}>
              {i > 0 && <li className="trust-bar__item trust-bar__divider" aria-hidden="true" />}
              <li className="trust-bar__item">
                <Icon aria-hidden="true" className="trust-bar__icon" />
                <span>{label}</span>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>

      {/* Scroll cue static */}
      <div className="hero__scroll-cue" aria-hidden="true">
        <span className="hero__scroll-chevron" style={{ animation: 'bounce 2s infinite' }}>&#8964;</span>
      </div>
    </section>
  )
}
