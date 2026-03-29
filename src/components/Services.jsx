import React from 'react'
import { motion } from 'framer-motion'
import {
  FiDroplet,
  FiZap,
  FiCloud,
  FiBriefcase,
  FiArrowRight,
  FiShield,
  FiCheckCircle,
} from 'react-icons/fi'

/* ─────────────────────────────────────────────────────────────────
   SERVICE DATA
   `span` maps to CSS grid-column span for the asymmetrical layout:
     Desktop (4-col grid):
       [Water: span 2] [Fire: span 1] [Storm: span 1]
       [Commercial: span 2, offset right]
   Antigravity consumes via: grid-column: span var(--col-span)
───────────────────────────────────────────────────────────────── */
const services = [
  {
    id:       'water',
    Icon:     FiDroplet,
    title:    'Water Damage',
    tagline:  'Every minute counts.',
    desc:     'Burst pipes, appliance failures, and structural flooding require immediate action. Our IICRC-certified technicians extract standing water, deploy industrial drying arrays, and monitor moisture levels until your property is structurally dry, eliminating the window for mold colonization.',
    bullets:  ['Emergency extraction', 'Structural drying', 'Mold prevention protocol'],
  },
  {
    id:      'fire',
    Icon:    FiZap,
    title:   'Fire & Smoke',
    tagline: 'Damage beyond what you can see.',
    desc:    'Smoke infiltrates wall cavities, ductwork, and materials far beyond the burn zone. We eliminate odor at the molecular level, not with masking agents, and rebuild to pre-loss condition.',
    bullets: ['Board-up & securing', 'Soot & odor elimination', 'Full structural rebuild'],
  },
  {
    id:      'storm',
    Icon:    FiCloud,
    title:   'Storm Damage',
    tagline: 'Deployed before the adjuster arrives.',
    desc:    'Hurricane, hail, and wind damage require immediate securing and documentation. We tarp and stabilize within hours, then handle every phase from debris removal through final reconstruction.',
    bullets: ['Emergency tarping', 'Insurance documentation', 'Tree removal coordination'],
  },
  {
    id:      'commercial',
    Icon:    FiBriefcase,
    title:   'Commercial',
    tagline: 'Downtime is revenue. We minimize both.',
    desc:    "Multi-unit, retail, office, and warehouse properties require a different level of coordination. We assign a dedicated project manager, work in phases around your operations, and deliver a documented scope so your insurer can't dispute the numbers.",
    bullets: ['Dedicated project manager', 'Phased restoration', 'Full insurance coordination'],
  },
]

/* ─────────────────────────────────────────────────────────────────
   CARD ENTRY VARIANTS
   Each card controls its own delay via `custom` index.
───────────────────────────────────────────────────────────────── */
const cardVariants = {
  hidden:  { opacity: 0, y: 44, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

/* ─────────────────────────────────────────────────────────────────
   SERVICE CARD
───────────────────────────────────────────────────────────────── */
function ServiceCard({ service, index }) {
  const { Icon, title, tagline, desc, bullets, id } = service

  return (
    <motion.article
      className={`service-card service-card--${id}`}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      whileHover={{ y: -6, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } }}
      aria-labelledby={`service-title-${id}`}
    >
      {/* Image placeholder with icon badge */}
      <div className="service-card__media">
        <div className="img-placeholder" aria-label={`${title} restoration`}>
          <span>{title} Image</span>
        </div>
        <div className="service-card__icon-badge" aria-hidden="true">
          <Icon />
        </div>
      </div>

      <div className="service-card__body">
        <p className="service-card__tagline">{tagline}</p>
        <h3 className="service-card__title" id={`service-title-${id}`}>{title}</h3>
        <p className="service-card__desc">{desc}</p>

        <ul className="service-card__bullets" role="list">
          {bullets.map((b) => (
            <li key={b} className="service-card__bullet">
              <FiCheckCircle aria-hidden="true" className="bullet-icon" />
              {b}
            </li>
          ))}
        </ul>

        <motion.a
          href="#contact"
          className="btn btn--ghost service-card__cta"
          whileHover={{ x: 4, transition: { duration: 0.2 } }}
        >
          Get emergency help
          <FiArrowRight aria-hidden="true" />
        </motion.a>
      </div>
    </motion.article>
  )
}

/* ─────────────────────────────────────────────────────────────────
   SERVICES SECTION
───────────────────────────────────────────────────────────────── */
export default function Services() {
  return (
    <section className="services section" id="services" aria-labelledby="services-heading">
      <div className="container">
        <motion.header
          className="section-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-eyebrow">
            <FiShield aria-hidden="true" />
            <span>Certified Restoration Services</span>
          </div>
          <h2 className="section-heading" id="services-heading">
            We Restore What Others Write Off
          </h2>
          <p className="section-subhead">
            Full-service damage restoration: from the emergency call through the
            final walkthrough. One company. Complete accountability.
          </p>
        </motion.header>

        {/*
          Asymmetrical grid.
          --col-span CSS var on each card drives grid-column: span var(--col-span).
          Antigravity applies: .services__grid { display: grid; grid-template-columns: repeat(4, 1fr) }
                               .service-card { grid-column: span var(--col-span, 1) }
        */}
        <div className="services__grid">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
