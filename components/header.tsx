import React from 'react'
import { Navbar } from './navbar'
import { Input } from './ui/input'
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const Header = () => {
  return (
    <div className='border-b bg-white flex flex-col gap-2 pt-3'>
        <div className='flex justify-between gap-2'>
            <div>
                <h1 className='text-3xl text-black/75'><span className='text-black'>Art</span>ative</h1>
            </div>
            <div className='flex gap-1 bg-gray-200 flex-1 items-center rounded-xl'>
                <CiSearch className='text-black text-xl ml-2'/>
                <Input className='border-none shadow-none outline-none ring-none' placeholder='Que recherchez-vous .....'/>
            </div>
            <div className='flex gap-2 items-center text-black/80'>
                <div className='flex gap-2 text-lg items-center'>
                    <FaRegUserCircle/>
                    <a href=""><h3>S'inscrire / Se connecter</h3></a>
                </div>
                <div className='flex gap-2 text-lg'>
                    <CiHeart/>
                    <FaShoppingBag/>
                </div>
            </div>
        </div>
        <Navbar />
    </div>
  )
}

export default Header
