import './SignUpForm.css'
import { signUp } from '../../services/users'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router'
import { setTokens, getUser } from '../../utils/auth'
import { UserContext } from '../../contexts/UserContext'

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    bio: '',
    password: '',
    password_confirmation: ''
  })

  const { setUser } = useContext(UserContext)

  const [errors, setErrors] = useState([])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const navigate = useNavigate()
  
  const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    const { data } = await signUp(formData)
    setTokens(data)
    setUser(getUser())
    navigate('/dashboard')

  } catch (error) {
    let errors = []

    if (error.response) {
      if (error.response.data?.errors) {
        errors = error.response.data.errors
      } 
      else if (error.response.data?.message) {
        errors = [error.response.data.message]
      } 
      else {
        errors = [JSON.stringify(error.response.data)]
      }
    } 
    else {
      errors = ['Network error or server is unreachable.']
    }
    
    setErrors(errors)
    console.error('Sign up error:', error)
  }
}

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Create an account</h1>
        <label>
          Username:
          <input type="text" name="username" placeholder='Enter your username' value={formData.username} onChange={handleChange} required />
          {errors.username && <p className="error-message">{errors.username}</p>}
        </label>
        <label>
          First Name:
          <input type="text" name="first_name" placeholder='Enter your first name' value={formData.first_name} onChange={handleChange} required />
          {errors.first_name && <p className="error-message">{errors.first_name}</p>}
        </label>
        <label>
          Last Name:
          <input type="text" name="last_name" placeholder='Enter your last name' value={formData.last_name} onChange={handleChange} required />
          {errors.last_name && <p className="error-message">{errors.last_name}</p>}
        </label>
        <label>
          Email:
          <input type="email" name="email" placeholder='Enter your email' value={formData.email} onChange={handleChange} required />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </label>
        <label>
          Bio:
          <textarea name="bio" placeholder='Tell us about yourself' value={formData.bio} onChange={handleChange}></textarea>
            {errors.bio && <p className="error-message">{errors.bio}</p>}
        </label>
        <label>
          Password:
          <input type="password" name="password" placeholder='Enter your password' value={formData.password} onChange={handleChange} required />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </label>
        <label>
          Confirm Password:
          <input type="password" name="password_confirmation" placeholder='Confirm your password' value={formData.password_confirmation} onChange={handleChange} required />
            {errors.password_confirmation && <p className="error-message">{errors.password_confirmation}</p>}
        </label>
        <button type="submit">Register</button>
      </form>
      </>
  )
}