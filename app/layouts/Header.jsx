import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Search from '../layouts/Search'
import { FaRegHeart } from 'react-icons/fa'

const Header = () => {
  return (
    <header className='container'>
        <div className=' flex items-center justify-between'>
            <Link href={'/'}>
                        <Image src={'/logo.png'} width={243} height={73} alt='logo' />
            </Link>

            <Search />  


            <div className='flex items-center gap-5'>
                <div className='flex items-center gap-3'>
                    <Link href={'/login'} className='hover:text-primary'>
                        Login
                    </Link>
                    <span>|</span>
                    <Link href={'/register'} className='hover:text-primary'>
                        Register
                    </Link>
                </div>
            </div>


            <div className="flex items-center gap-3">
                <div className="relative">
                    <FaRegHeart/>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
