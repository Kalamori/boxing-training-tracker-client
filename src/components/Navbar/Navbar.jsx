import { Link } from 'react-router'
import './Navbar.css'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { clearTokens } from '../../utils/auth'

export default function Navbar() {
  const { user, setUser } = useContext(UserContext)

  const handleLogout = () => {
    clearTokens()
    setUser(null)
  }

  
  return (
    <header>
      <div className="logo">Boxing Tracker</div>
      <nav className="navbar">
        {user ? (
          <>
            <span>Welcome back, {user.username}!</span>
            <Link to="/new-workout">New Workout</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/" onClick={handleLogout}>Log Out</Link>
          </>
        ) : (
          <>
            <Link to="/sign-up">Sign Up</Link>
            <Link to="/sign-in">Log In</Link>
          </>
        )}
      </nav>
    </header>
  )
}