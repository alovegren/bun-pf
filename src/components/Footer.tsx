import React, { useEffect } from 'react'
import styles from '../styles/Footer.module.css'

const Footer: React.FC = () => {
  useEffect(() => {
    const el = document.getElementById('copyrightdate')
    if (el) el.textContent = new Date().getFullYear().toString()
  }, [])

  return (
    <footer role="contentinfo" className={styles.footer}>
      <p>&copy; Copyright <span id="copyrightdate"></span>, Audrey Lovegren,  All Rights Reserved.</p>
    </footer>
  )
}

export default Footer
