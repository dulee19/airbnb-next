import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import DesktopLogo from '../../public/airbnb-desktop.png'
import MobileLogo from '../../public/airbnb-mobile.webp'
import UserNav from './UserNav'
import { SearchModal } from './Search'

const Navbar = () => {
  return (
    <nav className="w-full border-b">
        <div className="flex items-center justify-between md:flex-row flex-col gap-y-2 mx-auto px-5 lg:px-10 py-5">
            <Link href="/">
                <Image 
                    src={DesktopLogo} 
                    alt="logo" 
                    width={128} 
                    height={40} 
                    className='hidden lg:block'
                />

                <Image 
                    src={MobileLogo} 
                    alt="logo" 
                    width={50} 
                    height={50} 
                    className='block lg:hidden'
                />
            </Link>

            <SearchModal />

            <UserNav />
        </div>
    </nav>
  )
}

export default Navbar