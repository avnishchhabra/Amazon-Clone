import React from 'react'
import Image from 'next/image'
import {MenuIcon,SearchIcon,ShoppingCartIcon} from '@heroicons/react/outline'

const Header = () => {
    return (
        <header>
            <div className='flex items-center bg-amazon_blue p-1 py-2 flex-grow'>
            <div className='mt-2 items-center flex flex-grow sm:flex-grow-0'>
                <Image
                 src='https://links.papareact.com/f90'
                 width={150}
                 height={40}
                 objectFit='contain'
                 className='cursor-pointer'
                />
            </div>
            <div className='hidden h-10 items-center rounded-md bg-yellow-400 hover:bg-yellow-500 hover:cursor-pointer sm:flex flex-grow'>
                <input className='h-full flex-grow rounded-l-md focus:outline-none px-4' type='text' />
                <SearchIcon className='h-12 p-4' color='white' />
            </div>
            <div className='text-white mx-2 flex items-center text-xs space-x-6'>
                <div className='link'>
                    <p>Hi, Avnish Chhabra</p>
                    <b className='md:text-sm'>Account & Lists</b>
                </div>
                <div className='link'>
                <p>Returns</p>
                    <b className='md:text-sm'>& Orders</b>
                </div>
                <div className='link flex items-center relative'>
                    <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-bold'>0</span>
                  <ShoppingCartIcon className='h-10' color='white' />
                    <b className='md:text-sm hidden md:inline mt-2'>Basket</b>
                </div>
            </div>
        </div>
        {/* bottom wala header */}
        <div className='flex items-center space-x-3 p-3 px-5 bg-amazon_blue-light text-white text-sm'>
            <p className='flex items-center link'>
                <MenuIcon className='h-6 mr-1' />
                All
            </p>
            <p className='link'>Prime Video</p>
            <p className='link'>Amazon Business</p>
            <p className='link'>Today's Deals</p>
            <p className='link hidden lg:inline-flex'>Electronics</p>
            <p className='link hidden lg:inline-flex'>Prime</p>
            <p className='link hidden lg:inline-flex'>Buy Again</p>
            <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
            <p className='link hidden lg:inline-flex'>Food & Grocery</p>
            <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
        </div>
        </header>
    )
}

export default Header
