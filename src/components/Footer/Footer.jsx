import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Boxing Training Tracker</p>
        <p className="tagline">Track your progress. Improve every day.</p>
      </div>
    </footer>
  )
}