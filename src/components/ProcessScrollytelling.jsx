import React, { useEffect, useRef } from 'react'
import { FiPhone, FiSearch, FiHome, FiShield, FiArrowRight } from 'react-icons/fi'

/* ─────────────────────────────────────────────────────────────────
   STEP DATA
───────────────────────────────────────────────────────────────── */
const steps = [
  {
    number:  '01',
    Icon:    FiPhone,
    title:   'Call Us Anytime',
    heading: "We Answer When Others Don't.",
    body:    'Our live dispatch team operates around the clock, 365 days a year. No answering services, no callbacks. A certified technician picks up, asks exactly the right questions, and has a crew moving to your address within minutes of your call.',
    detail:  'Response time target: under 60 minutes to your door.',
  },
  {
    number:  '02',
    Icon:    FiSearch,
    title:   'We Assess & Document',
    heading: 'Total Clarity Before a Single Nail Moves.',
    body:    "Our technicians perform a thorough scope inspection, document every square foot of damage with photographic evidence, and produce a detailed estimate written to your insurer's standards. You understand exactly what's happening, and why, before we begin.",
    detail:  'IICRC-certified assessment. Insurance-ready documentation.',
  },
  {
    number:  '03',
    Icon:    FiHome,
    title:   'Full Restoration',
    heading: "We Don't Stop Until It's Right.",
    body:    "From structural drying and demolition through reconstruction and final finishing, we own every phase. No subcontract hand-offs, no scope gaps. One team, start to finish, with a dedicated project manager who answers your calls personally.",
    detail:  'Guaranteed to pre-loss condition or better.',
  },
]

/* ─────────────────────────────────────────────────────────────────
   PROCESS CARDS
   Uses IntersectionObserver for pure CSS fadeSlideUp entry
───────────────────────────────────────────────────────────────── */
export default function ProcessScrollytelling() {
  const gridRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 } // triggers when 15% of the card is visible
    )
    
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll('.process-card')
      cards.forEach(card => observer.observe(card))
    }
    
    return () => observer.disconnect()
  }, [])

  return (
    <section className="process-section section" id="process" aria-labelledby="process-heading">
      <div className="container">
        
        <header className="section-header">
          <div className="section-eyebrow">
            <FiShield aria-hidden="true" />
            <span>How It Works</span>
          </div>
          <h2 className="section-heading" id="process-heading">
            From First Call to Final Walkthrough.
          </h2>
          <p className="section-subhead">
            No endless hand-offs, no insurance guesswork. We own every phase of your property's recovery.
          </p>
        </header>

        <div className="process-grid" ref={gridRef}>
          {steps.map((step, i) => (
             <article 
               key={step.number} 
               className="process-card" 
               // Custom prop passes the user's requested delay exactly
               style={{ '--animation-delay': `${i * 150}ms` }}
             >
                <div className="process-card__number" aria-hidden="true">{step.number}</div>
                <div className="process-card__icon" aria-hidden="true"><step.Icon /></div>
                
                <h3 className="process-card__label">{step.title}</h3>
                <h4 className="process-card__title">{step.heading}</h4>
                <p className="process-card__body">{step.body}</p>
                
                <p className="process-card__detail">
                  <FiShield aria-hidden="true" className="process-card__detail-icon" />
                  {step.detail}
                </p>
             </article>
          ))}
        </div>

        {/* CTA directly matching the final step prompt but unified for the section */}
        <div className="process-cta-wrap">
          <a href="tel:+18774369355" className="btn btn--primary btn--large">
            <FiPhone aria-hidden="true" />
            Start the Process: Call Now
            <FiArrowRight aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  )
}
