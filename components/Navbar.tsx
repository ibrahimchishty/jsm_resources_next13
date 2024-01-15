import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const  Navbar = () => {
  return (
    <nav className='w-full flex-center py-6 z-50 fixed top-0 border-b-2 border-black-200 text-white bg-black-100'>
        <div className='flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16'>
            <Link href="/">
                <Image src="/jsm-logo.svg" alt="JSM Logo" width={56} height={48}/>
            </Link>

            <Image src="/hamburger-menu.svg"
            width={30}
            height={30}
            alt='hamburger-menu'
            className='block md:hidden'
            />

            <ul className='flex-center gap-x-3 max-md:hidden md:gap-x-10'>
                 <li className='body-text text-gradient_blue-purple !font-bold'>
                    <Link href="https://jsmastery.pro/next13" target='_blank'>
                        Next.js 13.4 Course
                    </Link>
                 </li>

                 <li className='body-text !font-normal'>
                    <Link href="https://jsmastery.pro/masterclass" target='_blank'>
                        Masterclass
                    </Link>
                 </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar