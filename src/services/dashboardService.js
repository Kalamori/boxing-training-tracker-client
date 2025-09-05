import axios from 'axios'
import { getAccessToken } from '../utils/auth'

const BASE_URL = import.meta.env.VITE_API_URL

export const getUserWorkouts = async () => {
  const token = getAccessToken()
  if (!token) throw new Error("User is not authenticated")

  const response = await axios.get(`${BASE_URL}/workouts/`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data
}

export const updateWorkout = async (workoutId, formData) => {
  const token = getAccessToken()
  if (!token) throw new Error("User is not authenticated")

  const response = await axios.put(`${BASE_URL}/workouts/${workoutId}/`, formData, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return response.data
}

export const deleteWorkout = async (workoutId) => {
  const token = getAccessToken()
  if (!token) throw new Error("User is not authenticated")

  const response = await axios.delete(`${BASE_URL}/workouts/${workoutId}/`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data
}