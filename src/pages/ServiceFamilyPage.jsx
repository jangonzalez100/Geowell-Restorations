import { Link, Navigate, useParams } from 'react-router-dom'
import { getServiceFamily } from '../data/servicesData'

function getUseCase(summary) {
  const firstSentence = summary.split('. ')[0] ?? summary
  return firstSentence.endsWith('.') ? firstSentence : `${firstSentence}.`
}

export default function ServiceFamilyPage() {
  const { serviceSlug } = useParams()
  const family = getServiceFamily(serviceSlug)

  if (!family) return <Navigate to="/services" replace />

  const imageLabel = `${family.title} photo`

  return (
    <section className="section service-family-page" aria-labelledby="service-family-heading">
      <div className="container">
        <header className="service-family-page__hero">
          <div className="service-family-page__hero-content">
            <p className="section-eyebrow">Service Subcategories</p>
            <h1 className="section-heading" id="service-family-heading">{family.title} Services</h1>
            <p className="section-subhead">{family.intro}</p>
          </div>
          <div className="service-family-page__hero-media img-placeholder" role="img" aria-label={imageLabel}>
            <span>{family.title} Image</span>
          </div>
        </header>

        <nav className="service-family-page__jump-links" aria-label={`${family.title} subcategory links`}>
          {family.damages.map((damage) => (
            <Link
              key={`jump-${damage.slug}`}
              to={`/services/${family.slug}/${damage.slug}`}
              className="service-family-page__jump-link"
            >
              {damage.title}
            </Link>
          ))}
        </nav>

        <div className="service-family-page__grid">
          {family.damages.map((damage, index) => (
            <article key={damage.slug} className="service-family-page__card">
              <span className="service-family-page__step">{String(index + 1).padStart(2, '0')}</span>
              <h2>{damage.title}</h2>
              <p className="service-family-page__use-case">{getUseCase(damage.summary)}</p>
              <p>{damage.summary}</p>
              <Link to={`/services/${family.slug}/${damage.slug}`} className="btn btn--primary">
                View {damage.title}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
