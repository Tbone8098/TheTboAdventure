import { Layout } from '@/com/Main'
import { LandingImage } from '@/com/Blog/Landing'


export default function Home() {
    return (
        <Layout>
            <div className='flex flex-col lg:flex-row gap-3 mx-2'>
                <LandingImage
                    imgData={{
                        img: 'https://placeholder.pics/svg/300',
                        width: "300",
                        height: "300"
                    }}
                    textData={{
                        title: "REFIT on the ROAD",
                        link: "refit",
                        content: "I love to dance and I love to be healthy, REFIT is my opprotunity to do both! I am a certified REFIT instructor, taking the REFIT spirit with me wherever I go and getting whoever I can to join. Will you be in my class? Come join me, I would love to see you online or in person! Info inside."
                    }}
                />
                <LandingImage
                    imgData={{
                        img: 'https://placeholder.pics/svg',
                        width: "300",
                        height: "300"
                    }}
                    textData={{
                        title: "LIFE on the ROAD",
                        link: "blog",
                        content: "This is our blog site of our adventures as we have traveled the country. We are the Thibaults (pronounced TBO) and we are a family of four, Tyler (Dad), Kendal (Mom), Theo or Theophilus (5 years old) and Z or Zebadiah (4 years old). We would love to share our experiences and therefor a bit of our life with you. Come and join us! Reach out, we look forward to hearing from you."
                    }}
                />
            </div>
        </Layout>
    )
}
