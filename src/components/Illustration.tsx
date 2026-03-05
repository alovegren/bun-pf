import React from 'react'
import Gallery from './Gallery'
import type { GalleryItem } from './Gallery'

const Illustration: React.FC = () => {
  const illustrationItems: GalleryItem[] = [
    {
      id: 'A7YS_II',
      fullImageSrc: '/img/illustration/A7YS_II_web.jpg',
      thumbImageSrc: '/img/illustration/A7YS_II_web_thumb.jpg',
      title: 'The scenery was exquisite...'
    },
    {
      id: 'sierraclub',
      fullImageSrc: '/img/illustration/sierraclub.jpg',
      thumbImageSrc: '/img/illustration/sierraclub.jpg',
      title: 'Untitled (Ocean scene)'
    },
    {
      id: 'Dusk_Stroll',
      fullImageSrc: '/img/illustration/Dusk_Stroll_Resize.jpg',
      thumbImageSrc: '/img/illustration/Dusk_Stroll_pre.jpg',
      title: 'Dusk Stroll'
    },
    {
      id: 'Cynthias_sky',
      fullImageSrc: '/img/illustration/Cynthias_sky.jpg',
      thumbImageSrc: '/img/illustration/Cynthias_sky_THUMB.jpg',
      title: "Cynthia's Sky"
    },
    {
      id: 'Third_Night',
      fullImageSrc: '/img/illustration/Third_Night.jpg',
      thumbImageSrc: '/img/illustration/Third_Night_thumb.jpg',
      title: 'The Third Night (Natsume Sōseki)'
    },
    {
      id: 'squashleaves',
      fullImageSrc: '/img/illustration/squashleaves.png',
      thumbImageSrc: '/img/illustration/squashleaves.png',
      title: 'Squash Leaves'
    },
    {
      id: 'handclouds',
      fullImageSrc: '/img/illustration/handclouds_Resize.jpg',
      thumbImageSrc: '/img/illustration/handclouds_pre.jpg',
      title: 'Untitled (Clouds)'
    }
  ]

  return (
    <main role="main">
      <Gallery items={illustrationItems} />
    </main>
  )
}

export default Illustration
