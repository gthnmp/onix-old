import { LuArrowUpDown, LuListFilter, LuSearch } from 'react-icons/lu'
import Image, { StaticImageData } from 'next/image'
import { ProductInfo } from '../(types)/types'
import Senoparty from '@/public/assets/photography/senoparty-01.webp'
import Fwb from '@/public/assets/photography/mexicola-fwb-01.webp'
import Helena from '@/public/assets/photography/helena-01.webp'

interface JournalCardProps {
  title : string;
  image : {
    src : string | StaticImageData;
    alt : string;
  };
  description : string;
  href : string;
}

const journals: JournalCardProps[] = [
  {
    title:"Lorem ipsum dolor sit amet",
    image : {
      src : Senoparty,
      alt : "Lorem ipsum dolor sir amet",
    },
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href : "/",
  },
  {
    title:"Lorem ipsum dolor sit amet",
    image : {
      src : Fwb,
      alt : "Lorem ipsum dolor sir amet",
    },
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href : "/",
  },
  {
    title:"Lorem ipsum dolor sit amet",
    image : {
      src : Helena,
      alt : "Lorem ipsum dolor sir amet",
    },
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href : "/",
  },
  {
    title:"Lorem ipsum dolor sit amet",
    image : {
      src : Senoparty,
      alt : "Lorem ipsum dolor sir amet",
    },
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href : "/",
  },
]


const Header = () => (
  <header className="w-full h-96 flex flex-col gap-24 items-center justify-center">
    <h1 className="text-6xl font-semibold">Journal</h1>
    <ul className="flex font-normal text-2xl  w-full justify-between items-center relative">
      <li className="flex flex-col gap-4 items-center absolute left-1/3 -translate-x-1/2"> 
        <button className="font-semibold flex gap-4 items-center"> 
          All 
          <LuArrowUpDown />
        </button>
      </li>
      <li className="flex flex-col gap-4 items-center absolute left-2/3 -translate-x-1/2"> 
        <button className="font-semibold flex gap-4 items-center"> 
          All Categories
          <LuListFilter />
        </button>
      </li>
    </ul>
  </header>
)

const JournalCard = ({journal} : {journal : JournalCardProps}) => {
  return(
    <div className="w-80 flex flex-col gap-8">
      <div className='h-80 w-full bg-neutral-500'>
        <Image src={journal.image.src} alt={journal.image.alt} width={1200} height={1200} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-4 pr-10">
        <h1 className='font-semibold text-3xl'>{journal.title}</h1>
        <div className="flex gap-8 items-center font-medium text-lg">
          <div className="h-2 w-20 bg-black"/> 
          <span> Lorem ipsum dolor </span>
        </div>
        <p className='text-lg text-neutral-700'>
          {journal.description}
        </p>
      </div>
    </div>
  )
}

export default function Page () {
  return(
    <div className="w-screen h-full bg-white flex flex-col gap-16 pb-40">
      <Header />
      <main className="w-full h-max flex flex-col gap-32">
      <section className='w-full h-max flex'>
        <div className="w-2/5 bg-black min-h-screen">
        </div>
        <div className="w-3/5 h-max px-10 grid grid-cols-2 gap-y-16 auto-rows-max">
          {
            journals.map(content => (
              <JournalCard journal={content} />
            ))
          }
        </div>
      </section>
      </main>
    </div>
  )
}

