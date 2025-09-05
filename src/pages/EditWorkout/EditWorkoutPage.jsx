import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { getUserWorkouts, updateWorkout } from '../../services/dashboardService'

export default function EditWorkoutPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    workout_type: '',
    date: '',
    duration: '',
    notes: ''
  })

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const workouts = await getUserWorkouts()
        const workout = workouts.find(w => w.id === parseInt(id))
        if (!workout) return
        setFormData({
          workout_type: workout.workout_type,
          date: workout.date,
          duration: workout.duration,
          notes: workout.notes || ''
        })
      } catch (err) {
        console.error(err)
      }
    }
    fetchWorkout()
  }, [id])

  const handleChange = (e) => {
    const value = e.target.name === "duration" ? Number(e.target.value) : e.target.value
    setFormData({ ...formData, [e.target.name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await updateWorkout(id, formData)
      navigate('/dashboard')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Workout Type:
        <select name="workout_type" value={formData.workout_type} onChange={handleChange} required>
          <option value="shadowboxing">Shadowboxing</option>
          <option value="bagwork">Bag Work</option>
          <option value="pad_work">Pad Work</option>
          <option value="sparring">Sparring</option>
          <option value="conditioning">Conditioning</option>
          <option value="strength_training">Strength Training</option>
          <option value="flexibility">Flexibility</option>
          <option value="jump_rope">Jump Rope</option>
          <option value="heavy_bag">Heavy Bag</option>
          <option value="calisthenics">Calisthenics</option>
          <option value="abdominal">Abdominal</option>
          <option value="footwork">Footwork</option>
          <option value="running">Running</option>
          <option value="other">Other</option>
        </select>
      </label>

      <label>
        Date:
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      </label>

      <label>
        Duration (min):
        <input type="number" name="duration" value={formData.duration} onChange={handleChange} required />
      </label>

      <label>
        Notes:
        <textarea name="notes" value={formData.notes} onChange={handleChange}></textarea>
      </label>

      <button type="submit">Update Workout</button>
    </form>
  )
}