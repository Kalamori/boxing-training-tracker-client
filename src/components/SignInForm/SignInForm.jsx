import './SignInForm.css'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router'
import { signIn } from '../../services/users'
import { setTokens, getUser } from '../../utils/auth'
import { UserContext } from '../../contexts/UserContext'

export default function SignInForm() {
    const { user, setUser } = useContext(UserContext)

    console.log('UserState:', user)
    

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const [error, setError] = useState({})

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        setError({})
        e.preventDefault()
        try {
            const { data } = await signIn(formData)
            setTokens(data)
            setUser(getUser())
            navigate('/')
        } catch (error) {
            setError(error.response.data)
        }
    }

  return (
    <div className="signin-form">
      <h2>Welcome Back!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            placeholder='Enter your username'
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            placeholder='Enter your password'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>

        {error.non_field_errors && <p className="error-message">{error.non_field_errors}</p>}

        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}