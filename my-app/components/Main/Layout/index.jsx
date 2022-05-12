import React from 'react'
import { Head, Footer, Header } from '../../Main'

export default function Index(props) {
    const { children } = props
    return (
        <div>
            <Head />
            <div className='flex flex-col h-screen'>
                <div>
                    <Header />
                </div>
                <main className='mt-0'>
                    {children}
                </main>

                <footer className='mt-auto'>
                    <Footer />
                </footer>
            </div>
        </div>
    )
}
