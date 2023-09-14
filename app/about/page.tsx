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
            <p className="w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p className="w-full py-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
          </div>
          <div className="w-1/4 h-full bg-black p-16 text-neutral-100 flex flex-col gap-8">
            <div className="w-full h-auto aspect-[3/4]">
              <Image src={HeroImageStore} alt="Store" className="w-full h-full object-cover" />
            </div>
            <h1 className='font-semibold'> Onix Fragrance Indonesia Store </h1>
            <p> Onix's flagship store is located at Seulawah Raya No. 3, Jakarta </p>
            <p>
              Seulawah Raya No.3, Cipinang Melayu, Kec. Makasar, Daerah Khusus Ibukota Jakarta 13620
            </p>
          </div>
        </section>

        <section className="w-full h-[200vh] grid grid-cols-11 grid-rows-6">
          <div className="col-start-1 col-end-7 row-span-4 bg-green-500 w-full h-full">
            <Image src={HeroImageStore} alt="Store" className="w-full h-full object-cover" />
          </div>

          <div className="col-start-2 col-end-6 row-start-5 row-span-1 w-full h-full pt-8">
            <p className="text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          <div className="col-start-8 col-span-3 row-span-2 bg-green-500 w-full h-full">
            <Image src={HeroImageStore} alt="Store" className="w-full h-full object-cover" />
          </div>

          <div className="col-start-8 col-span-3 row-start-4 row-span-2 bg-green-500 w-full h-full">
            <Image src={HeroImageStore} alt="Store" className="w-full h-full object-cover" />
          </div>
        </section>
      </main>
    </div>
  )
} 
