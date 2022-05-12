import React from 'react'

export default function Index() {
  return (
    <div className='bg-blog-primary py-3 text-blog-secondary2'>
      <div className="grid grid-cols-2 text-center">
        <ul className='border-r-2 border-blog-accent'>
          <li className='uppercase text-xl text-blog-secondary1'>Blog</li>
          <li>About Us</li>
          <li>Subscribe</li>
          <li>Newsletters</li>
          <li>FAQ</li>
        </ul>
        <ul>
          <li className='text-xl text-blog-secondary1 uppercase'>More From WebWorkx</li>
          <li>About Us</li>
        </ul>
      </div>
    </div>
  )
}
