import { Routes, Route } from 'react-router'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import Home from './pages/Home/Home'
import SignUpPage from './pages/SignUpPage/SignUpPage'
import SignInPage from './pages/SignInPage/SignInPage'
import Dashboard from './pages/Dashboard/Dashboard'
import NewWorkoutPage from './pages/NewWorkout/NewWorkoutPage'
import EditWorkoutPage from './pages/EditWorkout/EditWorkoutPage'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/new-workout" element={<NewWorkoutPage />} />
        <Route path="/edit-workout/:id" element={<EditWorkoutPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
