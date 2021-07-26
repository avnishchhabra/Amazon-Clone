import React from 'react'
import Product from './Product'
import uuid from 'react-uuid'

const ProductFeed = ({products}) => {
    // console.log("uuid", uuidv4())
    return (
        <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-40 mx-auto'>
            {products.slice(0,4).map(({id,title,description,category,image,price,rating}) => 
            <Product 
             key={uuid()}
             description={description}
             category={category}
             image={image}
             title={title}
             price={price}
             rating={rating}
             id={id} 
            />)}
            <img
             className='md:col-span-full'
             src='https://links.papareact.com/dyz'
             alt='banner image'
            />
            <div className='md:col-span-2'>
            {products.slice(4,5).map(({id,title,description,category,image,price}) => 
            <Product 
            key={uuid()}
             description={description}
             category={category}
             image={image}
             title={title}
             price={price} 
            />)}
            </div>
            {products.slice(5,products.length).map(({id,title,description,category,image,price}) => 
            <Product 
            key={uuid()}
             description={description}
             category={category}
             image={image}
             title={title}
             price={price} 
            />)}
        </div>
    )
}

export default ProductFeed
