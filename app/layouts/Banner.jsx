import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='pt-10'>
        <Image src={'/Home slider.png'} height={514} width={1344} alt='home'/>
    </div>
  )
}

export default Banner
