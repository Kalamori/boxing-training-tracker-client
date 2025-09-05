import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Boxing Training Tracker</p>
    </footer>
  )
}