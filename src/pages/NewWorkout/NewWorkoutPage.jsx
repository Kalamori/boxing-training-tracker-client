import { useState } from 'react'
import { useNavigate } from 'react-router'
import { createWorkout } from '../../services/workouts'
import './NewWorkoutPage.css'

const WORKOUT_TYPES = [
  'shadowboxing',
  'bagwork',
  'pad_work',
  'sparring',
  'conditioning',
  'strength_training',
  'flexibility',
  'jump_rope',
  'heavy_bag',
  'calisthenics',
  'abdominal',
  'footwork',
  'running',
  'other'
]

export default function NewWorkoutPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    workout_type: '',
    date: '',
    duration: '',
    notes: ''
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await createWorkout(formData)
      console.log('Workout created:', data);
      navigate('/dashboard')
    } catch (error) {
      console.error(error)
      setError('Failed to create workout. Check your inputs.')
    }
  }

  return (
    <div className="new-workout-page">
      <h2>Create New Workout</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Workout Type:
          <select
            name="workout_type"
            value={formData.workout_type}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Workout Type --</option>
            {WORKOUT_TYPES.map((type) => (
              <option key={type} value={type}>{type.replace('_', ' ')}</option>
            ))}
          </select>
        </label>

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Duration (minutes):
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            min="1"
            required
          />
        </label>

        <label>
          Notes:
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Optional notes..."
          />
        </label>

        {error && <p className="error-message">{error}</p>}

        <button type="submit">Create Workout</button>
      </form>
    </div>
  )
}