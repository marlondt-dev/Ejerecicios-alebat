import type { ProductCard } from '@/types/card'

export const productCards: ProductCard = [
  {
    id: 0,
    imgURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFfZF22KgETXeYnr12LX_Ger4jI5qiUeTgCw&s',
    cardTitle: 'Dental',
    cardDescription: 'Eduction for dentists',
    cardPrice: 199,
    buttonText: 'Buy now',
  },
  {
    id: 1,
    imgURL: 'https://www.clinicasanmiguel.es/wp-content/uploads/2022/04/doctora-oncologia.jpg',
    cardTitle: 'Oncología',
    cardDescription: 'Eduction for oncology issues',
    cardPrice: 299,
    buttonText: 'Buy now',
  },
  {
    id: 3,
    imgURL:
      'https://metaverso.pro/wp-content/uploads/2023/09/Captura-de-pantalla-2023-09-10-a-las-23.19.31-1.jpg',
    cardTitle: 'Realidad virtual',
    cardDescription: 'Eduction to learn how VR works nowdays and how helpful it is',
    cardPrice: 350,
    buttonText: 'Buy now',
  },
]
