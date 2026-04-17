
import React from 'react'
import styles from '../styles/About.module.css'
import RuntimeEmail from './RuntimeEmail'
import EmailForm from './EmailForm'

const About: React.FC = () => {
  return (
    <main role="main" className={styles.mainAbout}>
      <section className={styles.aboutContent}>
        <h1 className={styles.title}>About</h1>
        <p className={styles.description}>
          I'm Missy, an artist based in Austin, Texas. Please feel free to get in touch with me at <RuntimeEmail />.
        </p>
        <EmailForm />
        {/* <form className={styles.signupForm}>
          <label htmlFor="email" className={styles.formLabel}>Mailing list</label>
          <div className={styles.formRow}>
            <input
              id="email"
              type="email"
              name="email"
              className={styles.emailInput}
              placeholder="your email goes here"
              required
            />
            <button type="submit" className={styles.submitButton}>Submit</button>
          </div>
        </form> */}
      </section>
    </main>
  )
}

export default About
