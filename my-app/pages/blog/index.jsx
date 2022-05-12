import React from 'react'
import { Layout } from '@/com/Main'
import { Categories, Featured } from '@/com/Blog'

export default function Index() {
  return (
    <Layout>
        <div className='mx-2'>
        <Featured />
        </div>
        <Categories />
    </Layout>
  )
}
