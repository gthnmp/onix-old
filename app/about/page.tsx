import HeroImageStore from '@/public/assets/photography/store.webp'
import Image from 'next/image'
import {BiSolidRightArrow} from 'react-icons/bi'

export default function Page () {
  return(
    <div className="w-screen min-h-screen bg-white flex flex-col gap-32">
      <header className="w-full h-max flex">
        <div className="w-3/5 bg-black h-screen">
          <Image src={HeroImageStore} alt="Photography of Onix Official Store" className="w-full h-full object-cover" />
        </div>
        <div className="relative w-2/5 bg-white h-screen px-10 flex flex-col justify-center gap-8">
          <div className="absolute flex flex-col gap-8 px-10 top-1/3 -translate-y-1/2">
            <span className="uppercase text-sm font-medium flex items-center gap-4"> About <BiSolidRightArrow /></span>
            <h1 className="text-6xl font-semibold"> Welcome to ONIX </h1>
            <div className="flex gap-4 items-center text-xl tracking-wide">
              <div className='h-1 w-10 bg-black'/>
              Seulawah Raya No. 3, Jakarta
            </div>
          </div>
        </div>
      </header>
      <main className="w-full h-max flex flex-col gap-32">
        <section className="w-full h-60 grid place-items-center">
          <h1 className="w-1/2 text-6xl font-semibold text-center tracking-wide leading-tight"> A home for fragrance that boost your day </h1>
        </section>
        
        <section className="w-full h-[150vh]">
          <Image src={HeroImageStore} alt="store" className="w-full h-full object-cover"/>
        </section>
        
        <section className="w-full h-screen flex">
          <div className="w-3/4 h-full px-20 text-xl font-normal flex gap-16 leading-loose">
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
          </div>
          <div className="w-1/4 h-full bg-black">
          </div>
        </section>
      </main>
    </div>
  )
} 
