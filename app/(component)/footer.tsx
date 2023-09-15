import Link from 'next/link'
import { AiOutlineInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai'
import { BiLogoTiktok } from 'react-icons/bi'

const Footer = () => {
  return(
   <footer className="bg-black w-screen min-h-[30rem] flex flex-col gap-16 px-16 py-16 text-white">
      
      <div className="w-full h-full grid grid-cols-5 grid-rows-[8rem_1fr] gap-x-8">
        <div className="flex flex-col text-xl">
          <h1 className="font-light tracking-wide">Onix Fragrance</h1>
          <h2 className="font-medium text-sm text-neutral-400">Boost your day</h2>
        </div>
        <div className="border-[1px] border-white w-full h-max py-3 grid place-items-center rounded-md">
          <Link target='_blank' href="https://www.tokopedia.com/onixofc">Tokopedia</Link>
        </div>
        <div className="border-[1px] border-white w-full h-max py-3 grid place-items-center rounded-md">
          <Link target='_blank' href="https://shopee.co.id/onix.id">Shopee</Link>
        </div>
        <div className="border-[1px] border-white w-full h-max py-3 grid place-items-center rounded-md">
          <Link target='_blank' href="https://www.tiktok.com/@onix.fragrance">TikTok Shop</Link>
        </div>
        <div className="border-[1px] border-white w-full h-max py-3 grid place-items-center rounded-md">
          <Link target='_blank' href="https://www.lazada.co.id/shop/onix-fragrance">Lazada</Link>
        </div>
        
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold"> Follow us </h1>
          <ul className="flex flex-col gap-2">
            <li>
              <Link className="flex items-center gap-2" target='_blank' href="https://www.instagram.com/onix.id/"><AiOutlineInstagram className="scale-125"/> Instagram </Link>
            </li>
            <li>
              <Link className="flex items-center gap-2" target='_blank' href="https://twitter.com/onix_indonesia"><AiOutlineTwitter className="scale-125"/> Twitter </Link>
            </li>
            <li>
              <Link className="flex items-center gap-2" target='_blank' href="https://www.tiktok.com/@onix.fragrance"><BiLogoTiktok className="scale-125"/> TikTok</Link>
            </li>
            <li>
              <Link className="flex items-center gap-2" target='_blank' href="https://www.facebook.com/p/onixid-100064900355452/"><AiFillFacebook className="scale-125"/> Facebook</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold"> About us </h1>
          <ul className="flex flex-col gap-2">
            <li> Onix Fragrace Indonesia </li>
            <li> Parters and Collaboration </li>
            <li> Vacancies and Internship </li>
            <li> Contact Us </li>
          </ul>
        </div>
        
      </div>
      
      <ul className="flex gap-8 text-neutral-400 text-sm">
        <li>© 2023 Gathan Mahesa</li>
        <li>Cookie Declaration</li>
        <li>Privacy Statement</li>
        <li>Disclaimer</li>
      </ul>
      
    </footer>
  )
}

export default Footer
