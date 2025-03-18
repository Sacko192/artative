
import Link from 'next/link';
import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaShoppingBag } from 'react-icons/fa'
import { FaStar } from "react-icons/fa";

interface cardProps {
  id: string,
  title: string,
  img: string,
  description: string
  price: number,
  author: string
}

const Card = ({art}: {art: cardProps}) => {
  return (
    <div className='flex flex-col rounded-sm shadow-md gap-2 p-3 w-1/5 hover:scale-110 cursor-pointer'>
      <div className='flex-1'>
        <Link href={{pathname: `/details/${art.id}`}}><img className='rounded-sm h-full w-full' width={100} height={100} src={`/${art.img}`} alt="" /></Link>
      </div>
      <div>
        <div className='flex gap-2 text-lg justify-end'>
            <CiHeart/>
            <FaShoppingBag/>
        </div>
        <div className='flex justify-between'>
            <h3>Auteur : <span className='text-black/75'>{art.author}</span></h3>
        </div>
        <div className='flex justify-between'>
            <h3>{art.title}</h3>
            <h4>{art.price}€</h4>
        </div>
        <div className='flex gap-1 text-yellow-600'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
        </div>
      </div>
    </div>
  )
}

export default Card
