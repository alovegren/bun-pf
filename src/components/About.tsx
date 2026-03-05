
import React from 'react'
import styles from '../styles/About.module.css';


const About: React.FC = () => {
  return (
    <main role="main" className={styles.mainAbout}>
      <div className={styles.flexAbout}>
        <h1>About</h1>
        <p>More information about Audrey's work coming soon.</p>
      </div>
    </main>
  )
}

export default About
