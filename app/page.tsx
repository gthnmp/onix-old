
import Image from 'next/image'
import Header from './(component)/Header';
import BestProduct from './(component)/BestProduct';
import NewProduct from './(component)/NewProduct';
import MadeByOnix from './(component)/MadeByOnix';

import { ProductInfo } from './(types)/types';

import OnixLogo from '@/public/assets/icon/logo.png';
import product_info from './products.json'


const headlineProducts: ProductInfo[] = [product_info.fwb, product_info.senoparty, product_info.mexicola]
const highlightProducts: ProductInfo[] = [product_info.bento]
const newProducts: ProductInfo[] = [product_info.helena, product_info.gratitude, product_info.bento, product_info.scorpio]
const madeByOnix: ProductInfo[] = Object.values(product_info);
const reverseMadeByOnix: ProductInfo[] = madeByOnix.slice().reverse();

const Reasons = () => (
  <div className='w-screen h-40 flex flex-col gap-10 p-10 items-center justify-center'>
    <h1 className='text-3xl font-semibold'>
      Why people love ONIX
    </h1>
    <ul className='flex justify-between w-full font-normal text-xl'>
      <li className='flex flex-col items-center gap-4'> 
        <div className="w-8 h-8 rounded-full">
          <Image src={OnixLogo} alt="Onix Fragrance Logo" className='w-full h-full object-cover' />
        </div>
        We are fragrance creator 
      </li>
      <li className='flex flex-col items-center gap-4'> 
        <div className="w-8 h-8 rounded-full">
          <Image src={OnixLogo} alt="Onix Fragrance Logo" className='w-full h-full object-cover' />
        </div>
        Our fragrance are trusted by many people 
      </li>
      <li className='flex flex-col items-center gap-4'> 
        <div className="w-8 h-8 rounded-full">
          <Image src={OnixLogo} alt="Onix Fragrance Logo" className='w-full h-full object-cover' />
        </div>
        We create our product with love
      </li>
      <li className='flex flex-col items-center gap-4'> 
        <div className="w-8 h-8 rounded-full">
          <Image src={OnixLogo} alt="Onix Fragrance Logo" className='w-full h-full object-cover' />
        </div>
        Freeshipping on Indonesia
      </li>
    </ul>
  </div>
)

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col gap-32 bg-white pb-16">
      <Header items={headlineProducts} />
      <BestProduct items={highlightProducts}/>
      <NewProduct items={newProducts}/>
      <MadeByOnix items={reverseMadeByOnix}/>
      <Reasons />
    </main>
  )
}
