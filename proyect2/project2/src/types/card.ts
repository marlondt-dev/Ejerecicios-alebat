export type ProductCard = {
  id: number
  cardTitle: string
  description: string
  prices: number
  buttonText: string
}

export type ProductCards = ProductCard[]

// export type ConsultativeCard = Omit<ProductCard, 'prices'>
