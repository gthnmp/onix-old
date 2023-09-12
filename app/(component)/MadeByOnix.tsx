import { ProductInfo } from "../(types)/types"
import Image from "next/image"

const MadeByOnix = ({items} : {items : ProductInfo[]}) => {
  return(
    <section className='w-full h-full flex flex-col gap-16 text-black'  >
      <h1 className="text-6xl font-semibold px-10"> Made by Onix </h1>
      <ul className="w-full h-full grid grid-flow-col overflow-auto scroll-auto gap-x-8 px-10 py-5">
        {
          items.map(product => (
            <li className='w-full h-full'>
              <div className="h-max w-[25rem] flex flex-col gap-4">
                <div className='w-full h-[35rem] bg-blue-500'>
                  <Image src={product.image.src} alt={product.image.alt} width={1200} height={1200} className="w-full h-full object-cover"/>
                </div>

                <div className="flex flex-col gap-4">
                  <div className='flex justify-between items-center text-2xl'>
                    <h1 className="font-medium"> ONIX : {product.name} </h1> 
                    <span className="font-normal text-lg"> IDR {product.price} </span>
                  </div>
                  <p className="text-neutral-500 text-xl ">
                    {product.description.promotional}
                  </p>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default MadeByOnix
