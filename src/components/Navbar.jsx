import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()


    const toGamePage = () => {
        navigate('/game')
    }

    const toMainPage = () => {
        navigate('/')   
    }

  return (
    <div className='w-full h-[12vh] absolute top-0 flex 
    justify-between items-center px-16'>
        <h1 className='text-xl cursor-pointer'
        onClick={toMainPage}
        >
            Flag app
        </h1>

        <ul className='flex items-center justify-center text-lg'>
            <li className='mx-8 cursor-pointer'>Search Flags</li>
            <li 
            onClick={toGamePage}
            className='mx-8 cursor-pointer'>Flag Game</li>
        
        </ul>
    </div>
  )
}

export default Navbar