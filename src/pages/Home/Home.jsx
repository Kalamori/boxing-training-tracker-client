import './Home.css'
import SignUpForm from '../../components/SignUpForm/SignupForm'

import BoxingGloveImg from '/src/assets/boxing-gloves.jpg'

export default function Home() {
  return (
    <>
    <div className="home">
      <h1>Welcome to the Boxing Training Tracker</h1>
  
      <p>Track your training progress and stay motivated!</p>
    </div>

    <section className="form-section column">
      <img className="form-feature" src={BoxingGloveImg} alt="Boxing Glove" />
       <SignUpForm />
    </section>

    </>
  )
}
