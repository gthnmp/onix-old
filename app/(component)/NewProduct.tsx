import { ProductInfo } from "../(types)/types";
import ProductCard from "./ProductCard";
import Image from "next/image";

import Senoparty from '@/public/assets/fragrances/senoparty.webp';

const NewProduct = ({items} : {items : ProductInfo[]}) => {
  return(
    <section className='w-full h-full pl-10 flex flex-col gap-16' >
      <h1 className="text-6xl font-semibold"> What&apos;s new </h1>
      <div className='w-full h-[160vh] flex'>
        <div className="w-3/5 h-full">
          <ul className='h-full grid grid-cols-2 gap-y-16 auto-rows-max'>
            {
              items.map(product => (
                <li>
                  <ProductCard product={product} />
                </li>
              ))
            }
          </ul>
        </div>
        <div className="w-2/5 h-full bg-black text-white pl-24 flex flex-col gap-32">
          <div className='flex flex-col gap-16'>
            <div className='h-[30rem] w-full bg-neutral-500'>
              <Image src={Senoparty} alt="Mexicola" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-8 pr-10">
              <h1 className='font-semibold text-4xl'>Floral Elegance with a Caramelic Twist </h1>
              <div className="flex gap-8 items-center font-medium text-xl">
                <div className="h-2 w-20 bg-white"/> 
                <span> Our staff picks </span>
              </div>
              <p className='text-xl font-medium'>
                Indulge in the enchanting blend of saffron, white florals, and amber with Senoparty's Eau de Parfum. A fragrant journey awaits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewProduct
