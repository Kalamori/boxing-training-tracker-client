import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { getUserWorkouts, deleteWorkout } from '../../services/dashboardService'
import './Dashboard.css'

export default function Dashboard() {
  const [workouts, setWorkouts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const data = await getUserWorkouts()
        setWorkouts(data)
      } catch (err) {
        setError('Failed to load workouts')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchWorkouts()
  }, [])

  if (loading) return <p>Loading your dashboard...</p>
  if (error) return <p>{error}</p>

  const now = new Date()
  const workoutsThisWeek = workouts.filter(w => {
    const workoutDate = new Date(w.date)
    const diffDays = (now - workoutDate) / (1000 * 60 * 60 * 24)
    return diffDays <= 7
  })

  const totalWorkoutsThisWeek = workoutsThisWeek.length
  const totalRounds = workouts.reduce((sum, w) => sum + (w.rounds?.length || 0), 0)
  const totalTime = workouts.reduce((sum, w) => sum + w.duration, 0)

  return (
    <div className="dashboard">
      <h2>Your Dashboard</h2>

      <div className="stats">
        <p>Total workouts this week: {totalWorkoutsThisWeek}</p>
        <p>Total rounds completed: {totalRounds}</p>
        <p>Total time: {totalTime} min</p>
      </div>

      <div className="workouts-list">
        {workouts
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 5)
          .map(workout => (
            <div key={workout.id} className="workout-card">
              <h3>{workout.workout_type}</h3>
              <p>Date: {new Date(workout.date).toLocaleDateString()}</p>
              <p>Duration: {workout.duration} min</p>
              <p>Rounds: {workout.rounds?.length || 0}</p>
              {workout.notes && <p>Notes: {workout.notes}</p>}
              <button onClick={() => navigate(`/edit-workout/${workout.id}`)} className="edit-button">Edit </button>
              <button onClick={async () => {
                if (window.confirm('Are you sure you want to delete this workout?')) {
                try {
                await deleteWorkout(workout.id)
                setWorkouts(workouts.filter(w => w.id !== workout.id))
                } catch (err) {
                console.error('Failed to delete workout', err)
      }
    }
  }}
  className="delete-button"
>
  Delete
</button>
            </div>
          ))}
      </div>
    </div>
  )
}