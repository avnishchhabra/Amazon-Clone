import { StarIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React, { useState } from 'react'
import Currency from 'react-currency-formatter'
const MAX_RATING = 5;
const MIN_RATING = 1;


const Product = ({id,title,description,category,image,price}) => {
    const [rating] = useState(Math.ceil(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING))
    const [hasPrime] = useState(Math.random() < 0.5)
    return (
        <div className='relative flex flex-col p-10 m-5 bg-white z-20'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
            <Image src={image} height={200} width={200} objectFit='contain' />
            <h4 className='my-3'>{title}</h4>
            <div className='flex'>
                {Array(rating).fill().map((_,i) => <StarIcon className='h-5 text-yellow-500' />)}
            </div>
            <p className='text-xs my-2 line-clamp-2'>{description}</p>
            <div className=''>
            <Currency quantity={price} currency='GBP' />
            </div>
            {hasPrime && <div className='flex items-center space-x-2'>
                <img className='w-12' src='https://links.papareact.com/fdw' alt='Prime' />
                <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
        </div>}
        <button className='mt-auto button'>Add to Basket</button>
        </div>
    )
}

export default Product
