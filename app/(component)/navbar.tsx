"use client"
import Link from "next/link"
import BrandLogo from "@/public/assets/icon/logo-text.png"
import Image from "next/image"
import {BsSearch} from 'react-icons/bs'
import { useState } from "react"
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  const [searchActive, setSearchState] = useState(false)
  
  return(
    <nav className="sticky top-0 z-50 bg-white w-screen h-20 flex justify-between items-center px-16 uppercase text-sm font-normal select-none">
      <div className="flex items-center">
        <ul className="hidden md:flex gap-8 ">
          <li>
            <Link href="/collections">Collections</Link>
          </li>
          <li>
            <Link href="/bestseller">Bestsellers</Link>
          </li>
         <li>
            <Link href="/journal">Journal</Link>
          </li>
        </ul>
        <GiHamburgerMenu className="md:hidden"/>
      </div>
      
      <Link href="/" className="h-full w-auto p-4">
        <Image draggable={false} src = {BrandLogo} alt="Logo of Onix Fragrance" className="w-full h-full object-cover"/>
      </Link>

      <div className="flex items-center">
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <Link onClick={() => setSearchState(true)} href="/"><BsSearch /></Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/support">Support</Link>
          </li>
          <li>
            <Link href="/">Account</Link>
          </li>
          <li className="flex items-center gap-2">
            <Link href="/">Bag</Link>
            <div className="bg-black text-white rounded-full w-6 h-auto aspect-square grid place-items-center">
              10
            </div>
          </li>
        </ul>
        <div className="md:hidden bg-black text-white rounded-full w-6 h-auto aspect-square grid place-items-center">
          10
        </div>
      </div>
    </nav>
  )
}

export default Navbar
