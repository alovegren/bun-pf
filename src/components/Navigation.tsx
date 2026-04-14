import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Navigation.module.css'

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Close menu on escape key
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu()
      }
    }

    document.addEventListener('keydown', handleEscapeKey)
    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, [isMenuOpen])

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        if (isMenuOpen) {
          closeMenu()
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  return (
    <header role="header" className={styles['site-header']} ref={headerRef}>
      <div className={styles['header-inner']}>
        <Link to="/" className={styles['logo-link']} onClick={closeMenu}>Missy Lovegren</Link>

        <button
          className={styles['hamburger-button']}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          role="navigation"
          className={`${styles['top-nav']} ${isMenuOpen ? styles['menu-open'] : ''}`}
        >
          <ul>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/illustration" onClick={closeMenu}>Illustration</Link></li>
            <li><Link to="/printmaking" onClick={closeMenu}>Printmaking</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navigation
