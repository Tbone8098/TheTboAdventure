import { Layout } from '@/com/Main'
import React, { useState } from 'react'
import cx from 'classnames'

import Utils from '@/style/utils.module.css'

export default function Index() {
    const [loginOrReg, setLoginOrReg] = useState('login')

    const login = () => {
        return (
            <form className='flex flex-col mx-2'>
                <h2 className='text-center text-2xl mt-2'>Login</h2>
                <input className={cx(Utils.input, 'my-3')} type="text" name="username" id="username" placeholder='Username' />
                <input className={cx(Utils.input, 'my-3')} type="password" name="pw" id="pw" placeholder='Password' />
                <button className={cx(Utils.btn, 'bg-main-success my-2')}>Login</button>
                <span className='underline cursor-pointer text-blue-400 text-center' onClick={() => setLoginOrReg('reg')}>Register Here</span>
            </form>
        )
    }

    const reg = () => {
        return (
            <form className='flex flex-col mx-2'>
                <h2 className='text-center text-2xl mt-2'>Register</h2>
                <input className={cx(Utils.input, 'my-3')} type="text" name="firstName" id="firstName" placeholder='First Name' />
                <input className={cx(Utils.input, 'my-3')} type="text" name="lastName" id="lastName" placeholder='Last Name' />
                <input className={cx(Utils.input, 'my-3')} type="text" name="username" id="username" placeholder='Username' />
                <input className={cx(Utils.input, 'my-3')} type="text" name="Email" id="Email" placeholder='Email' />
                <input className={cx(Utils.input, 'my-3')} type="password" name="pw" id="pw" placeholder='Password' />
                <button className={cx(Utils.btn, 'bg-main-success my-2')}>Register</button>
                <span className='underline cursor-pointer text-blue-400 text-center' onClick={() => setLoginOrReg('login')}>Login Here</span>
            </form>
        )
    }

    return (
        <Layout>
            {
                loginOrReg === 'login'
                ?
                login()
                :
                reg()
            }
        </Layout>
    )
}
