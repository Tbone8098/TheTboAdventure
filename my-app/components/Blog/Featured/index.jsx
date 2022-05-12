import Image from 'next/image'
import React, { useState } from 'react'

export default function Index() {
    const [data, setData] = useState([
        {
            img: "https://th.bing.com/th/id/R.6afc61b50aabe45a2e6c68eae2c217ba?rik=L2W0YWncfjZBVA&riu=http%3a%2f%2fwww.shutterstock.com%2fblog%2fwp-content%2fuploads%2fsites%2f5%2f2016%2f03%2ffall-trees-road-1.jpg&ehk=KA%2bzFrmYoWsdK4k7v%2fgfNkd1T2rdnNtpF5ICdLIxAeM%3d&risl=&pid=ImgRaw&r=0",
            alt: "alt",
            synopsis: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat hic reprehenderit molestias quisquam numquam nemo! Enim blanditiis, nihil quibusdam quos pariatur libero mollitia iste, qui, cum quisquam aut modi at.",
        },
        {
            img: "https://th.bing.com/th/id/R.159bec44fc6254f51ac8bebaf04f7940?rik=riL9nhbxqD66kg&riu=http%3a%2f%2fwww.wallpapers13.com%2fwp-content%2fuploads%2f2016%2f01%2fOcean-Images-HD-Wallpaper-1402157-1366x768.jpg&ehk=SrIa7uGvDlQ3zHDhzOo6HaLE51p4Qe4lXNxdamQifAY%3d&risl=&pid=ImgRaw&r=0",
            alt: "alt",
            synopsis: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat hic reprehenderit molestias quisquam numquam nemo! Enim blanditiis, nihil quibusdam quos pariatur libero mollitia iste, qui, cum quisquam aut modi at.",
        },
    ])
    const [activePost, setActivePost] = useState(data[0])

    return (
        <div className='flex flex-col items-center text-center'>
            <h2 className='text-2xl'>Featured</h2>
            <div className='border-2 border-black lg:flex'>
                <img src={activePost.img} alt={activePost.alt} className="lg:w-1/2 lg:border-r-2 lg:border-black" />
                <div className='place-self-center'>
                    <p>{activePost.synopsis}</p>
                    <div><a href="">Read More</a></div>
                </div>
            </div>
            <div className='flex gap-1 '>
                {data.map((item, key) => {
                    return (
                        <span key={key} onClick={() => setActivePost(item)}>0</span>
                    )
                })}
            </div>
        </div>
    )
}
