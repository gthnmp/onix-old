import Link from 'next/link'
import { AiOutlineInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai'
import { BiLogoTiktok } from 'react-icons/bi'

const Footer = () => {
  return(
    <footer className="w-screen h-96 bg-neutral-900 text-white flex flex-col items-center justify-center gap-16 px-12 py-10">
      <div className="flex flex-col gap-16 items-center">
        <h2 className="text-2xl font-normal tracking-wider"> ONIX Fragrance ─ Boost your day </h2>
        <h1 className="text-6xl font-medium tracking-wide"> Seulawah Raya No. 3, Jakarta </h1>
      </div>
      <div className="flex justify-between w-full relative">
        <ul className="flex gap-12 h-10 items-center absolute left-10">
          <li>
            <Link target='_blank' href="https://www.instagram.com/onix.id/"><AiOutlineInstagram className="scale-125"/></Link>
          </li>
          <li>
            <Link target='_blank' href="https://twitter.com/onix_indonesia"><AiOutlineTwitter className="scale-125"/></Link>
          </li>
          <li>
            <Link target='_blank' href="https://www.tiktok.com/@onix.fragrance"><BiLogoTiktok className="scale-125"/></Link>
          </li>
          <li>
            <Link target='_blank' href="https://www.facebook.com/p/onixid-100064900355452/"><AiFillFacebook className="scale-125"/></Link>
          </li>
        </ul>
        
        <ul className="flex gap-12 h-10 items-center absolute left-1/2 -translate-x-1/2">
          <li>
            <Link href="/">Contact</Link>
          </li>
          <li>
            <Link href="/">Terms</Link>
          </li>
          <li>
            <Link href="/">Privacy</Link>
          </li>
          <li>
            <Link href="/">Opening Hour</Link>
          </li>
        </ul>
        
        <ul className="flex gap-12 h-10 items-center absolute right-10 opacity-60">
          <li>
            <Link href="/">Tokopedia</Link>
          </li>
          <li>
            <Link href="/">Shopee</Link>
          </li>
          <li>
            <Link href="/">TikTok Shop</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
