import { ProductInfo } from "../(types)/types";
import Image from "next/image";

const BestProduct = ({items} : {items : ProductInfo[]}) => {
  return(
    <ul className="w-full h-screen p-10 pr-0 flex gap-8">
      {
        items.map(product => (
          <li key={product.name} className="flex gap-8">
            <div className="w-1/2 flex flex-col gap-4">
            <h1 className="text-8xl font-semibold">{product.name}</h1>
            <div className="flex gap-4 items-center">
              <ul className="flex gap-1">
                <div className="w-8 h-2 bg-black "/>
                <div className="w-8 h-2 bg-neutral-300 "/>
                <div className="w-8 h-2 bg-neutral-300 "/>
                <div className="w-8 h-2 bg-neutral-300 "/>
              </ul>
              <span className="text-lg">Product Highlights</span>
            </div>
            <p className="text-2xl font-light"><strong>{product.description.promotional}</strong></p>
            </div>
            <div className='w-full h-full bg-slate-300'>
              <Image src={product.image.src} alt={product.image.alt} width={product.image.dimension.w} height={product.image.dimension.h} className="w-full h-full object-cover"/>
            </div>
          </li>
        ))
      }
    </ul>
  )
}

export default BestProduct
