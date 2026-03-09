import React from 'react'
import Gallery from './Gallery'
import type { GalleryItem } from './Gallery'

const Printmaking: React.FC = () => {
  const printItems: GalleryItem[] = [
    {
      id: 'Behind_the_Curtain',
      fullImageSrc: '/img/print/Behind_the_Curtain_of_the_Ortolan_Size.jpg',
      thumbImageSrc: '/img/print/Behind_the_Curtain_of_the_Ortolan_Size.jpg',
      title: 'Behind the Curtain of the Ortolan (2016) <br>Silkscreen, Wool Felt, Abaca Paper Pulp<br>11 by 15½ inches'
    },
    {
      id: 'Congregation',
      fullImageSrc: '/img/print/Congregation_at_the_Pondshore.jpg',
      thumbImageSrc: '/img/print/Congregation_at_the_Pondshore.jpg',
      title: 'Congregation at the Pondshore (2016)<br>Silkscreen, Relief<br>21½ by 15¼ inches'
    },
    {
      id: 'Seed_Scale_Herd',
      fullImageSrc: '/img/print/Seed_Scale_Herd.jpg',
      thumbImageSrc: '/img/print/Seed_Scale_Herd.jpg',
      title: 'Seed, Scale, Herd (2016)<br>Silkscreen<br>15 by 15 inches'
    },
    {
      id: 'Avalanche',
      fullImageSrc: '/img/print/Avalanche_Down_The_Table.jpg',
      thumbImageSrc: '/img/print/Avalanche_Down_The_Table.jpg',
      title: 'Avalanche Down the Table (2016)<br>Zinc Etching, hand coloring<br>10 x 11 inches'
    },
    {
      id: 'Table_Tangle',
      fullImageSrc: '/img/print/Table_Tangle.jpg',
      thumbImageSrc: '/img/print/Table_Tangle.jpg',
      title: 'Table Tangle<br>Silkscreen<br>10 by 10 inches'
    },
    {
      id: 'Rising',
      fullImageSrc: '/img/print/Rising.jpg',
      thumbImageSrc: '/img/print/Rising.jpg',
      title: 'Rising<br>Silkscreen<br>22 by 15 inches'
    },
    {
      id: 'Most_Important_Deliberation',
      fullImageSrc: '/img/print/Most_Important_Deliberation.jpg',
      thumbImageSrc: '/img/print/Most_Important_Deliberation.jpg',
      title: 'Most Important Deliberation (2015)<br>Silkscreen<br>15 by 20 inches'
    },
    {
      id: 'Pomelo_Pushers',
      fullImageSrc: '/img/print/Pomelo_Pushers.png',
      thumbImageSrc: '/img/print/Pomelo_Pushers.png',
      title: 'Pomelo Pushers (2017)<br>Silkscreen<br>30 by 40 inches'
    }
  ]

  return (
    <Gallery items={printItems} />
  )
}

export default Printmaking
