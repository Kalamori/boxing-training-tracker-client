import { Routes, Route } from 'react-router'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import Home from './pages/Home/Home'
import SignUpPage from './pages/SignUpPage/SignUpPage'
import SignInPage from './pages/SignInPage/SignInPage'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
