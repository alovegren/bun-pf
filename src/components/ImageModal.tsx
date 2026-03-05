import React, { useEffect } from 'react'
import styles from '../styles/ImageModal.module.css'

interface ImageModalProps {
  isOpen: boolean
  imageSrc: string
  imageTitle: string
  onClose: () => void
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, imageSrc, imageTitle, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className={styles.imageModalOverlay} onClick={onClose}>
      <div className={styles.imageModalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.imageModalClose} onClick={onClose} aria-label="Close modal">
          ✕
        </button>
        <img src={imageSrc} alt={imageTitle} className={styles.imageModalImage} />
      </div>
    </div>
  )
}

export default ImageModal
