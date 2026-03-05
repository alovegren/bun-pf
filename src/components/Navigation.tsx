import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Navigation.module.css'

const Navigation: React.FC = () => {
  return (
    <header role="header" className={styles['site-header']}>
      <div className={styles['header-inner']}>
        <Link to="/" className={styles['logo-link']}>Missy Lovegren</Link>

        <nav role="navigation" className={styles['top-nav']}>
          <ul>
            <li><Link to="/illustration">Illustration</Link></li>
            <li><Link to="/printmaking">Printmaking</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navigation
