import { Metadata } from "next"
import { PrismaClient } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"
import { BsArrowLeft } from 'react-icons/bs'

const prisma = new PrismaClient()

type Product =  {
  id : number,
  name : string,
  price: number,
  volume: string,
  BPOM: string,
  image_src: string,
  image_alt: string,
  desc_promo: string,
  desc_general: string

}
export async function generateMetadata({ params }: { params : { name : string }}): Promise<Metadata> {
  return {
    title: `${params.name} - Onix Fragrance`
  }
}

const getProduct = async (product_name : string) => {
  const res = await prisma.product.findFirst({
    where : { name : product_name }
  })
  return res 
}

export default async function Page ({params} : {params : { name : string }}){
  const product = await getProduct(params.name) as Product;
  return(
    <div className="w-screen h-full bg-white">
      {
        product ? (
          <div className="w-full h-full">
            <header className="w-full h-[150vh] flex">
              <div className="w-3/5 h-full">
                <Image src={product.image_src} alt={product.image_alt} width={1200} height={1200} className="w-full h-full object-cover" />
              </div>
              <div className="w-2/5 h-full">
                <div className="flex flex-col gap-8 h-screen justify-center">
                  <h1 className="text-6xl font-semibold"> Onix FWB </h1>
                  <Link className="bg-black text-white px-2 py-4 rounded-md text-xl text-center" href="/"> Checkout </Link>
                </div>
              </div>
            </header>
          </div>
        ) : (
          <div className="w-full h-screen grid place-items-center">
            <div className="flex flex-col items-center gap-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-4xl font-medium"> Page Not found </h1>
              <Link className="px-6 py-3 rounded-md bg-black text-white flex gap-2 items-center" href="/collections"> <BsArrowLeft/> See other collections </Link>
            </div>
          </div>
        )
      }
    </div>
  )
}
