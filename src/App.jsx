import { Routes, Route } from 'react-router'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import Home from './pages/Home/Home'
import SignUpPage from './pages/SignUpPage/SignUpPage'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
