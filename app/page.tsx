import Image from 'next/image'
import Fwb from '@/public/assets/fragrances/fwb.webp';
import Senoparty from '@/public/assets/fragrances/senoparty.webp';
import Mexicola from '@/public/assets/fragrances/mexicola.webp';
import Bento from '@/public/assets/fragrances/bento.webp';
import OnixLogo from '@/public/assets/icon/logo.png';
import SmoothScroll from './(component)/smoothscroll';
import Footer from './(component)/footer';

const images = [
  { name: 'Fwb', src: Fwb, alt: "Picture of Onix's FWB Fragrance", label:"Onix FWB", price:"IDR 99.000" },
  { name: 'Senoparty', src: Senoparty, alt: "Picture of Onix's FWB Fragrance",label:"Onix Senoparty", price:"IDR 99.000" },
  { name: 'Mexicola', src: Mexicola, alt: "Picture of Onix's FWB Fragrance",label:"Onix Mexicola", price:"IDR 99.000" },
];

const bestProducts = [
  {
    name : "Call Me Bento",
    description: "A fragrant symphony of white florals atop an amber, woody, and musky base. Elevate your senses today.",
    image : {
      src: Bento,
      alt : "Picture of Onix fwb"
    },
    href : "/"
  },
]

const Header = () => {
  return (
    <header className="w-screen h-96 bg-neutral-900 text-white py-10 px-10 flex justify-around uppercase">
      {images.map((image) => (
        <div className='w-max h-full flex flex-col gap-2'>
          <div key={image.name} className="h-full w-auto aspect-[4/3] rounded overflow-hidden">
            <Image src={image.src} alt={image.alt} className="w-full h-full object-cover" />
          </div>
          <h2 className="font-medium text-xl flex flex-col">
            {image.label} 
            <span className="font-light text-base">
              {image.price}
            </span>
          </h2>
        </div>
      ))}
    </header>
  );
};

const BestProduct = () => {
  return(
    <ul className="w-full h-screen p-10 pr-0 flex gap-8">
      {
        bestProducts.map(product => (
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
            <p className="text-2xl font-light"><strong>{product.description}</strong></p>
            </div>
            <div className='w-full h-full bg-slate-300'>
              <Image src={product.image.src} alt={product.image.alt} className="w-full h-full object-cover"/>
            </div>
          </li>
        ))
      }
    </ul>
  )
}

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
    <SmoothScroll>
      <main className="w-full h-full flex flex-col gap-8 bg-white pb-16">
        <Header />
        <BestProduct />
        <Reasons />
      </main>
    </SmoothScroll>
  )
}
