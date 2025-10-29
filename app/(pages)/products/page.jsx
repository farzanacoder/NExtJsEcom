import Image from 'next/image'
import React from 'react'

const ProductPage = () => {
  return (
    <section className='container pt-10'>
      <div className='flex flex-wrap gap-5'>
          <Image src={'/prdct.png'} height={200} width={300} alt='product'/>
          <Image src={'/prdct1.png'} height={200} width={300} alt='product'/>
          <Image src={'/prdct.png'} height={200} width={300} alt='product'/>
          <Image src={'/prdct1.png'} height={200} width={300} alt='product'/>
          <Image src={'/prdct.png'} height={200} width={300} alt='product'/>
          <Image src={'/prdct1.png'} height={200} width={300} alt='product'/>
          <Image src={'/prdct.png'} height={200} width={300} alt='product'/>
         <Image src={'/prdct1.png'} height={200} width={300} alt='product'/>
          <Image src={'/prdct.png'} height={200} width={300} alt='product'/>
          <Image src={'/prdct.png'} height={200} width={300} alt='product'/>
         <Image src={'/prdct1.png'} height={200} width={300} alt='product'/>
          <Image src={'/prdct.png'} height={200} width={300} alt='product'/>
      </div>
    </section>
  )
}

export default ProductPage
