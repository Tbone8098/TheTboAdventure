import React, { useState, useEffect } from 'react'

import data from './data'

export default function Index() {
    const [activeCategory, setActiveCategory] = useState(data[0])

    return (
        <>
            <div>
                <h2 className='text-2xl bg-blog-secondary1 p-3 text-center uppercase'>Categories</h2>
            </div>
            <div className='flex gap-3 flex-wrap justify-center'>
                {
                    data.map((item, key) => {
                        return (
                            <span className={item===activeCategory ? 'underline' : ''} key={key} onClick={() => setActiveCategory(item)}>{item.title}</span>
                        )
                    })
                }
            </div>
            <div className='grid grid-cols-2 gap-3 m-2 sm:justify-items-center'>
                {activeCategory['posts'].map((item, key) => {
                    return (
                        <div key={key} className='border-2 border-black shadow shadow-black sm:w-9/12 sm:flex sm:justify-center active:'>
                            <img src={item.img} alt="" className='w-full object-cover' />
                        </div>
                    )
                })}
            </div>
        </>
    )
}
