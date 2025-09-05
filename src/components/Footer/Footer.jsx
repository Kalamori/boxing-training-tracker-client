import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Boxing Training Tracker</p>
      <p>Track your progress. Improve every day.</p>
    </footer>
  )
}