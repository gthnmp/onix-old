import {BsSearch} from 'react-icons/bs'
import { Metadata } from 'next'

const support = {
  contact : [
    {
      question : "Consectetur adipiscing elit?",
      answer : `Lorem ipsum dolor sit amet\n\n consectetur adipiscing elit.\n\n Sed ultrices, mauris in auctor tincidunt, \nturpis lorem bibendum nisi, vel vehicula justo ipsum eu purus. Maecenas vel magna nec justo convallis sollicitudin. Nulla facilisi. Nullam consectetur, purus nec volutpat fermentum, eros tellus rhoncus sapien.`
    },
    
    {
      question : "Sed ultrices, mauris in auctor tincidunt?",
      answer : `Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed ultrices, mauris in auctor tincidunt, \nturpis lorem bibendum nisi, vel vehicula justo ipsum eu purus. Maecenas vel magna nec justo convallis sollicitudin. Nulla facilisi. Nullam consectetur, purus nec volutpat fermentum, eros tellus rhoncus sapien.`
    },
    
    {
      question : "Lorem ipsum dolor sit amet?",
      answer : `turpis lorem bibendum nisi, vel vehicula justo ipsum eu purus. Maecenas vel magna nec justo convallis sollicitudin. Nulla facilisi. Nullam consectetur, purus nec volutpat fermentum, eros tellus rhoncus sapien.`
    }
  ]
}

export const metadata: Metadata = {
  title : 'Customer Service - ONIX',
  description : 'Discover Onix Fragrance Indonesian - Your source for affordable and long-lasting fragrances based in Bandung. Trusted by celebrities. Boost your day with our elegant scents.',
  keywords:'Onix Fragrance Indonesia, Onix Fragrance, Indonesian fragrances, affordable scents, long-lasting perfumes, Bandung store, celebrity-endorsed fragrances, trusted fragrance',
  viewport:'width=device-width, initial-scale=1',
  creator:'Gathan Mahesa',
  colorScheme:'light',
}

export default async function Page () {
  return(
    <div className="w-screen h-full bg-white">
      <header className="w-full h-96 bg-neutral-900 text-white grid place-items-center ">
        <div className="flex flex-col justify-center items-center gap-16">
          <h1 className="text-8xl font-semibold">
            Support
          </h1>
          <form className="border-b-white border-b-[1px] py-1">
            <input type="text" className="bg-transparent placeholder:text-white text-2xl" placeholder='ask a question...' />
            <button type="submit"> <BsSearch /> </button>
          </form>
        </div>
      </header>
      <main className='w-full min-h-screen bg-white flex'>
        <div className="w-1/4 h-auto grid grid-flow-row">
          <button className='h-full w-full border-[1px] border-neutral-300'>Contact</button>
          <button className='h-full w-full border-[1px] border-neutral-300'>How to order</button>
          <button className='h-full w-full border-[1px] border-neutral-300'>FAQ</button>
          <button className='h-full w-full border-[1px] border-neutral-300'>Terms of Use</button>
          <button className='h-full w-full border-[1px] border-neutral-300'>Privacy Policy</button>
          <button className='h-full w-full border-[1px] border-neutral-300'>Payment Option</button>
          <button className='h-full w-full border-[1px] border-neutral-300'>Shipping</button>
        </div>
        <section className='w-3/4 h-max p-20'>
          <ul className='flex flex-col gap-8'>
            {
              support.contact.map((ask, index) => (
                <li key={index} className="flex flex-col gap-2">
                  <span className="text-3xl font-medium"> {ask.question} </span>
                  <div dangerouslySetInnerHTML={{__html:ask.answer.replace(/\n/g, `<br/>`)}} className="text-xl font-normal"/>
                </li>
              ))
            }
          </ul>
        </section>
      </main>
    </div>
  )
}
