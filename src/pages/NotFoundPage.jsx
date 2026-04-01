import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="section not-found-page" aria-labelledby="not-found-heading">
      <div className="container not-found-page__inner">
        <h1 id="not-found-heading">Page not found</h1>
        <p>The page you requested does not exist.</p>
        <Link className="btn btn--primary" to="/">Return Home</Link>
      </div>
    </section>
  )
}
