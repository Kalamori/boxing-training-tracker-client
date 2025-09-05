import './Home.css'
import SignUpForm from '../../components/SignUpForm/SignupForm'
import BoxingGloveImg from '/src/assets/boxing-gloves.jpg'

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to the Boxing Training Tracker</h1>
          <p>
            Take your training to the next level. Log your workouts, track your
            progress, and stay motivated every round.
          </p>
          <a href="#signup" className="cta-button">
            Get Started
          </a>
        </div>
      </section>

      <section id="signup" className="form-section column">
        <div className="form-image">
          <img
            className="form-feature"
            src={BoxingGloveImg}
            alt="Boxing Gloves"
          />
        </div>
        <div className="form-wrapper">
          <SignUpForm />
        </div>
      </section>
    </div>
  )
}
