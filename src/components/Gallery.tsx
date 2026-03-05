
import React, { useState } from 'react'
import ImageModal from './ImageModal'
import styles from '../styles/Gallery.module.css';

export interface GalleryItem {
  id: string
  fullImageSrc: string
  thumbImageSrc: string
  title: string
  description?: string
}

interface GalleryProps {
  items: GalleryItem[]
}

const Gallery: React.FC<GalleryProps> = ({ items }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  const handleImageClick = (item: GalleryItem) => {
    setSelectedImage(item)
    setModalIsOpen(true)
  }

  const handleCloseModal = () => {
    setModalIsOpen(false)
    setSelectedImage(null)
  }

  // Generate 4 columns, each containing items distributed via modulo
  const columns = Array.from({ length: 4 }, (_, columnIndex) =>
    items.filter((_, itemIndex) => itemIndex % 4 === columnIndex)
  )

  return (
    <>
      <div className={styles.flexcontainer} id="magpopupgallery">
        {columns.map((columnItems, columnIndex) => (
          <div
            key={columnIndex}
            className={
              columnIndex === columns.length - 1
                ? `${styles.galleryColumn} ${styles.galleryColumnLast}`
                : styles.galleryColumn
            }
          >
            {columnItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleImageClick(item)}
                  className={styles.galleryItemButton}
                  title={item.title}
                  aria-label={`View ${item.title}`}
                >
                  <img
                    src={item.thumbImageSrc}
                    alt={item.title}
                    className={styles.galleryItemButtonImg}
                  />
                </button>
              </li>
            ))}
          </div>
        ))}
      </div>

      <ImageModal
        isOpen={modalIsOpen}
        imageSrc={selectedImage?.fullImageSrc || ''}
        imageTitle={selectedImage?.title || ''}
        onClose={handleCloseModal}
      />
    </>
  )
}

export default Gallery
