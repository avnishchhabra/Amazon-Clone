import { StarIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'

const CheckoutProduct = ({product}) => {
    const dispatch = useDispatch()
    const addItemToBasket = () => {
        const newProduct = {...product,id:uuid()}
        dispatch(addToBasket(newProduct))
    }
    const RemoveItemFromBasket = () => {
        dispatch(removeFromBasket(product))
    }
    return (
        <div className='grid grid-cols-5'>
            <Image src={product.image} height={200} width={200} objectFit='contain' />
            {/* middle */}
            <div className='col-span-3  '>
                <p>{product.title}</p>
                <div className='flex'>
                    {Array(product.rating).fill().map((_,i)=> (
                        <StarIcon key={i} className='h-5 text-yellow-500' />
                    ))}
                </div>
                <p className='text-xs line-clamp-3'>
                    {product.description}
                </p>
                <Currency quantity={product.price} />
                {product.hasPrime && <div className='flex items-center'>
                     <img src='https://links.papareact.com/fdw' className='w-12'  />
                     <p className='text-xs ml-3 text-gray-500'>FREE Next-Day Delivery</p>
                    </div>}
            </div>
            <div className='flex flex-col space-y-2 my-auto justify-self-end'>
                <button className='button' onClick={addItemToBasket}>Add to basket</button>
                <button className='button' onClick={RemoveItemFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
