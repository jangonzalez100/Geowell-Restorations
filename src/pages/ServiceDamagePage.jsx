import { Link, Navigate, useParams } from 'react-router-dom'
import { getAllDamagesMap, getDamagePage, getServiceFamily } from '../data/servicesData'

function ParagraphWithLinks({ segments }) {
  return (
    <p className="service-damage-page__body">
      {segments.map((segment, index) => (
        segment.type === 'link'
          ? <Link key={`${segment.to}-${index}`} to={segment.to}>{segment.text}</Link>
          : <span key={`${segment.text.slice(0, 10)}-${index}`}>{segment.text}</span>
      ))}
    </p>
  )
}

function plainTextFromSegments(segments) {
  return segments.map((segment) => segment.text).join('').trim()
}

export default function ServiceDamagePage() {
  const { serviceSlug, damageSlug } = useParams()
  const family = getServiceFamily(serviceSlug)
  const damage = getDamagePage(serviceSlug, damageSlug)

  if (!family || !damage) return <Navigate to="/services" replace />

  const damageMap = getAllDamagesMap()
  const relatedDamages = damage.related
    .map((slug) => damageMap.get(slug))
    .filter(Boolean)

  const detailParagraphs = damage.paragraphs.map(plainTextFromSegments)
  const relatedTitles = relatedDamages.map((item) => item.title).slice(0, 3)
  const relationshipLine = relatedTitles.length
    ? `${damage.title} frequently overlaps with ${relatedTitles.join(', ')} in the same loss event, so scoping and sequencing matter.`
    : `${damage.title} often intersects with other restoration scopes, so coordinated planning helps avoid repeated work.`
  const extendedIntro = `${damage.summary} Our team builds a clear recovery plan around containment, documentation, and restoration sequencing so you know exactly what to expect at each stage.`

  return (
    <section className="section service-damage-page" aria-labelledby="service-damage-heading">
      <div className="container service-damage-page__inner">
        <header className="service-damage-page__header">
          <p className="section-eyebrow">Subcategory Service</p>
          <h1 className="section-heading" id="service-damage-heading">{damage.title}</h1>
          <p className="section-subhead">{extendedIntro}</p>
          <p className="service-damage-page__hero-note">
            Every property loss is different, but the objective is the same: stabilize quickly, prevent secondary damage, and restore your home or building with a scope that makes sense to you and your insurer.
          </p>
        </header>

        <div className="service-damage-page__content">
          <section className="service-damage-page__panel">
            <h2>What this service covers</h2>
            <p className="service-damage-page__body">
              {damage.title} under our {family.title} scope is built to move from immediate stabilization to complete recovery with clear documentation and defined milestones.
            </p>
            <p className="service-damage-page__body">
              {relationshipLine}
            </p>
          </section>

          <section className="service-damage-page__panel">
            <h2>How we approach it</h2>
            {damage.paragraphs.map((segments, idx) => (
              <ParagraphWithLinks key={`${damage.slug}-${idx}`} segments={segments} />
            ))}
          </section>

          <section className="service-damage-page__panel">
            <h2>What to expect next</h2>
            {detailParagraphs.map((paragraph, idx) => (
              <p key={`${damage.slug}-detail-${idx}`} className="service-damage-page__body">
                {paragraph}
              </p>
            ))}
            <p className="service-damage-page__body">
              {relationshipLine}
            </p>
          </section>
        </div>

        <aside className="service-damage-page__related" aria-labelledby="related-damages-heading">
          <h2 id="related-damages-heading">Commonly Related Damages</h2>
          <ul role="list" className="service-damage-page__related-list">
            {relatedDamages.map((item) => (
              <li key={item.slug}>
                <Link to={`/services/${item.familySlug}/${item.slug}`}>
                  {item.title}
                  <span>{item.familyTitle}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="service-damage-page__actions">
            <Link to={`/services/${family.slug}`} className="btn btn--secondary">Back to {family.title}</Link>
            <Link to="/services" className="btn btn--outline">All Services</Link>
          </div>
        </aside>
      </div>
    </section>
  )
}
