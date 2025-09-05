import { Link } from 'react-router'
import './Navbar.css'

export default function Navbar() {
  return (
    <header>
        <div className="logo">"Logo"</div>
    <nav className="navbar">
      <Link to="/sign-up">Sign Up</Link>
      <Link to="/log-in">Log In</Link>
    </nav>
    </header>
  )
}