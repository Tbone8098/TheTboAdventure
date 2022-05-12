import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Index(props) {
    const { imgData, textData } = props
    return (
        <div>
            <div className='flex justify-between'>
                <p>{textData.title}</p>
                <Link href={textData.link}>Click to Enter</Link>
            </div>
            <div className='border-2 border-black bg-slate-400'>
                <div className=' bg-white hover:invisible'>
                    <p className=''>{textData.content}</p>
                </div>
                <Image
                    src={imgData.img}
                    width={imgData.width}
                    height={imgData.height}
                />
            </div>
        </div>
    )
}
