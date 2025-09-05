import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getWorkoutById } from '../../services/workouts'
import './WorkoutDetailsPage.css'

export default function WorkoutDetailsPage() {
  const { id } = useParams()
  console.log(id)
  
  const [workout, setWorkout] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const data = await getWorkoutById(id)
        setWorkout(data)
      } catch (err) {
        console.error(err)
        setError('Failed to load workout')
      } finally {
        setLoading(false)
      }
    }

    fetchWorkout();
  }, [id]);

  if (loading) return <p>Loading workout details...</p>
  if (error) return <p>{error}</p>
  if (!workout) return <p>No workout found</p>

  return (
  <>
    {workout ? (
      <div className="workout-details">
        <h2>Workout Details</h2>
        <h3>Type: {workout.workout_type}</h3>
        <p><strong>Date:</strong> {new Date(workout.date).toLocaleDateString()}</p>
        <p><strong>Duration:</strong> {workout.duration} min</p>
        <p><strong>Rounds:</strong> 6</p>
        {workout.notes && <p><strong>Notes:</strong> {workout.notes}</p>}
        <Link to="/dashboard">Back to Dashboard</Link>
      </div>
    ) : (
      <p>No workout data available.</p>
    )}
  </>
)
}