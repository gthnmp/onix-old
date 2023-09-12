import Image from "next/image"
import { ProductInfo } from "../(types)/types"

const ProductCard = ({product} : {product : ProductInfo}) => (
  <div className="w-80 flex flex-col gap-8">
    <div className='h-80 w-full bg-neutral-500'>
      <Image src={product.image.src} alt={product.image.alt} width={1200} height={1200} className="w-full h-full object-cover" />
    </div>
    <div className="flex flex-col gap-4 pr-10">
      <h1 className='font-semibold text-3xl'>{product.name}</h1>
      <div className="flex gap-8 items-center font-medium text-lg">
        <div className="h-2 w-20 bg-black"/> 
        <span> Lorem ipsum dolor </span>
      </div>
      <p className='text-lg text-neutral-700'>
        {product.description.promotional}
      </p>
    </div>
  </div>
)

export default ProductCard
