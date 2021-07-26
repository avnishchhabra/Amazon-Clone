import React from 'react'
import Image from 'next/image'
import Header from '../components/Header'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../slices/basketSlice'
import CheckoutProduct from '../components/CheckoutProduct'
import Currency from 'react-currency-formatter'
import {useSession } from 'next-auth/client'

function checkout() {
    const [session] = useSession()
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal)
    return (
        <div className='bg-gray-100'>
            <Header />
            <main className='lg:flex max-w-screen-2xl mx-auto'>
                {/* Left Part */}
                <div className='flex-grow shadow-sm'>
                 <Image
                    src='https://links.papareact.com/ikj'
                    width={1020}
                    height={250}
                    objectFit='contain'
                 />
                 <div className='bg-white flex flex-col p-5 space-y-10 max-w-7xl'>
                     <h1 className='text-3xl border-b pb-4'>
                         {items.length ? 'Your Shopping Basket' : 'Shopping Basket is Empty'}
                     </h1>
                     {items.map((item,i) => (
                         <CheckoutProduct key={item.id} product={item} />
                     ))}
                 </div>                                                                                                   
                </div>
                {/* Right Part */}
                
                    {items.length > 0 && 
                    <div className='flex flex-col bg-white p-5'>
                    <>
                     <h2 className='font-bold'>Subtotal ({items.length}):</h2>
                     <span><Currency quantity={total} currency='GBP' /></span>
                     <button disabled={!session} className={`button mt-2 ${!session && "from-gray-300 to-gray-500 cursor-not-allowed border-none text-gray-300"}`}>{session ? 'Proceed to checkout' : 'SignIn to checkout'}</button>
                    </>
                </div>
                }
            </main>
            
        </div>
    )
}

export default checkout
