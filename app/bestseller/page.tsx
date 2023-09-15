import Image from 'next/image'
import { LuArrowUpDown, LuListFilter, LuSearch } from 'react-icons/lu'
import product_info from '@/app/products.json'
import { ProductInfo } from '../(types)/types'
import HelenaHeroImage from '@/public/assets/photography/helena-01.webp'
import { Metadata } from 'next'

const listStructure = {
  first:[
    product_info.fwb,
    product_info.mexicola,
    product_info.senoparty
  ],
  second:{
    product : product_info.helena,
    hero_image : HelenaHeroImage 
  },
  third:[
    product_info.bento,
    product_info.scorpio
  ],
  fourth:[
    product_info.gratitude,
    product_info.chillinBaby
  ],
  fifth: [
    product_info.fwb_50ml,
    product_info.mexicola_50ml,
    product_info.senoparty_50ml
  ]
}

const StoreCard = ({product} : {product : ProductInfo}) => (
  <div className="w-full h-max flex flex-col gap-4">
    <div className="w-full h-auto aspect-[3/4]">
      <Image src={product.image.src} alt={"Kontol"} width={1200} height={1200} className='w-full h-full object-cover' />
    </div>
    <div className="flex flex-col gap-2">
      <div className="flex justify-between font-medium">
        <h1 className="text-2xl"> Onix {product.name} </h1>
        <span> IDR {product.price}</span>
      </div>
      <p className="text-neutral-700 text-lg"> {product.description.promotional} </p>
    </div>
  </div>
)

const Header = () => (
  <header className="w-full h-96 flex flex-col gap-24 items-center justify-center">
    <h1 className="text-6xl font-semibold">Best Seller</h1>
    <ul className="flex font-normal text-2xl  w-full justify-between items-center relative">
      <li className="flex flex-col gap-4 items-center absolute left-1/4 -translate-x-1/2"> 
        Look more spesific 
        <button className="font-semibold flex gap-4 items-center"> 
          All 
          <LuArrowUpDown />
        </button>
      </li>
      <li className="flex flex-col gap-4 items-center absolute left-1/2 -translate-x-1/2"> 
        Narrow down
        <button className="font-semibold flex gap-4 items-center"> 
          Filter 
          <LuListFilter />
        </button>
      </li>
      <li className="flex flex-col gap-4 items-center absolute left-3/4 -translate-x-1/2"> 
        Let us help!
        <button className="font-semibold flex gap-4 items-center"> 
          Search 
          <LuSearch />
        </button>
      </li>
    </ul>
  </header>
)


export const metadata: Metadata = {
  title : 'Best Selling - ONIX',
  description : 'Discover Onix Fragrance Indonesian - Your source for affordable and long-lasting fragrances based in Bandung. Trusted by celebrities. Boost your day with our elegant scents.',
  keywords:'Onix Fragrance Indonesia, Onix Fragrance, Indonesian fragrances, affordable scents, long-lasting perfumes, Bandung store, celebrity-endorsed fragrances, trusted fragrance',
  viewport:'width=device-width, initial-scale=1',
  creator:'Gathan Mahesa',
  colorScheme:'light',
}

export default async function Page () {
  const content = listStructure.second
  return(
    <div className="w-screen h-full bg-white flex flex-col gap-16">
      <Header />
      <main className="w-full h-full flex flex-col gap-20 pb-40">
        <section className="w-full h-max px-10">
          <ul className='flex w-full justify-between'>
            {
              listStructure.first.map(product => (
                <li className="w-[25rem]">
                  <StoreCard product={product}/>
                </li>
              ))
            }
          </ul>
        </section>
        
        <section className='w-full min-h-screen pr-10'>
          <div className='w-full h-full flex '>
            <div className="h-full w-1/2">
              <Image src={content.hero_image} alt={"Kontol"} className='w-full h-full object-cover' />
            </div>
            <div className="h-full w-1/2 flex flex-col gap-4">
              <div className="h-full w-full">
                <Image src={content.product.image.src} alt={"Kontol"} width={1200} height={1200} className='w-full h-full object-cover' />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between font-medium">
                  <h1 className="text-2xl"> Onix {content.product.name} </h1>
                  <span> IDR {content.product.price}</span>
                </div>
                <p className="text-neutral-700 text-lg"> {content.product.description.promotional} </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className='w-full min-h-screen px-10'>
          <ul className="flex justify-between">
            <li className='w-[25rem]'>
              <StoreCard product={listStructure.third[0]} />
            </li>
            <li className="w-[25rem] h-[30rem] flex flex-col justify-center items-center gap-8">
              <h1 className="text-6xl font-semibold text-center"> Never Lasting Scent </h1>
            </li>
            <li className="w-[25rem]">
              <StoreCard product={listStructure.third[1]} />
            </li>
          </ul>
        </section>

        <section className='w-full min-h-screen px-10'>
          <ul className="flex justify-around">
            <li className='w-[30rem]'>
              <StoreCard product={listStructure.fourth[0]} />
            </li>
            <li className="w-[30rem]">
              <StoreCard product={listStructure.fourth[1]} />
            </li>
          </ul>
        </section>

        <section className="w-full h-max px-10">
          <ul className='flex w-full justify-between'>
            {
              listStructure.fifth.map(product => (
                <li className="w-[25rem]">
                  <StoreCard product={product}/>
                </li>
              ))
            }
          </ul>
        </section>
      </main>
    </div>
  )
}
