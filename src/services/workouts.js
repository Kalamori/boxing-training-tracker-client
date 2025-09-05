import axios from 'axios'
import { getAccessToken } from '../utils/auth'

const BASE_URL = import.meta.env.VITE_API_URL

export const createWorkout = async (workoutData) => {
  const token = getAccessToken()
  if (!token) throw new Error("User is not authenticated")

  const response = await axios.post(`${BASE_URL}/workouts/`, workoutData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data
}

export const getWorkoutById = async (id) => {
  const token = getAccessToken()
  if (!token) throw new Error("User is not authenticated")

  const response = await axios.get(`${BASE_URL}/workouts/${id}/`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data
}
