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
  
  const specs = {
    volume : product.volume,
    bpom : product.BPOM,
  } 

  return(
    <div className="w-screen h-full bg-white">
      {
        product ? (
          <div className="w-full h-full flex flex-col gap-32 pb-32">
            <header className="w-full h-screen flex">
              <div className="w-3/5 h-full">
                <Image src={product.image_src} alt={product.image_alt} width={1200} height={1200} className="w-full h-full object-cover" />
              </div>
              <div className="w-2/5 h-full flex items-center px-10 relative">
                <div className="flex flex-col gap-8">
                  <h1 className="text-6xl font-semibold"> Onix {product.name} </h1>
                  <div className="flex items-center gap-8">
                    <div className="h-2 w-20 bg-black"/>
                    <span className="text-lg"> IDR {product.price}</span>
                  </div>
                  <div className="flex flex-col gap-2 font-medium absolute left-0 bottom-32">
                    <Link href="/" className="text-lg bg-black text-white w-32 h-16 grid place-items-center"> Buy now </Link>
                    <Link href="/" className="text-lg bg-black text-white w-32 h-16 grid place-items-center"> Add to bag </Link>
                  </div>
                </div>
              </div>
            </header>
            <main className="w-full h-max">
              <section className="w-full h-96 bg-green-500">
                <ul className="">
                  

                </ul>
              </section>

            </main>
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
