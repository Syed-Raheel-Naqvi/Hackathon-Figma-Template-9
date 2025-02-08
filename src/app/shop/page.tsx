import React from 'react'
import Common from '@/components/Common'
import FoodShop from '@/components/shop'
import { getAllFoods } from '@/sanity/lib/helpers/getAllFood'
import { StaticImageData } from 'next/image'


type Food =  {
  originalPrice: number,
  tags: string[],
  imageUrl: StaticImageData,
  description: string,
  available: boolean,
  name: string,
  category: string,
  price: number
}
const Page = async () => {
  const res: Food[]= await getAllFoods();
  // res.json();
  console.log(res);
  return (
    <div>
      <Common title='Our Shop' subtitle='Shop'/>
      <FoodShop />
    </div>
  )
}

export default Page
