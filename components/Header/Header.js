"use client"

import './Header.sass'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import {

    setMargin,
    getMargin,
    handleClick

} from '../../utils/ShowMenu'


export default function home()
{
    const [ contentMargin, setContentMargin ] = useState( '0' )


    const setClickStatus = () => {

        handleClick()
        setContentMargin( getMargin )
    }


    const manageMargin = () => {

        setMargin()
        setContentMargin( getMargin )
    }


    useEffect( () => {

        window.addEventListener( 'resize', manageMargin )

        return () => {

            window.removeEventListener( 'resize', manageMargin )
        }

    } , [] )


    return (

        <header id='header' style={{ marginLeft: contentMargin.menuMargin }}>
            <div className='menu'>
                <Link href={ '' }>Dashboard</Link>
            </div>

            <button className='btn' onClick={ setClickStatus }>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height=".7em" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                    />
                </svg>
            </button>
        </header>
    )
}