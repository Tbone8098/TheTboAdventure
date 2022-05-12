import Link from 'next/link'
import React from 'react'

export default function Index() {
  return (
    <div className='flex flex-col items-center border-b-2 border-gray-100 mx-2'>
        <h2 className='text-2xl font-blog-primary'>From Our Livingroom</h2>
        <h1 className='text-5xl text-center font-blog-primary'>The Adventure Awaits</h1>
        <ul className='flex gap-3 justify-evenly w-full font-blog-primary'>
            <li><Link href='/'>Home</Link></li>
            <li>Menu</li>
            <li><Link href='/blog/login'>Login</Link></li>
        </ul>
    </div>
  )
}
