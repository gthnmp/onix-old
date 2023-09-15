import { ProductInfo } from "../(types)/types";
import Image from "next/image";

const Header = ({items} : {items : ProductInfo[]}) => {
  return (
    <header className="w-screen h-96 bg-neutral-900 text-white py-10 px-10 flex justify-around uppercase">
      {items.map((product) => (
        <div className='w-max h-full flex flex-col gap-2'>
          <div key={product.name} className="h-full w-auto aspect-[4/3] rounded overflow-hidden">
            <Image src={product.image.src} alt={product.image.alt} width={1200} height={1200} className="w-full h-full object-cover" />
          </div>
          <h2 className="font-medium text-xl flex flex-col">
            Onix {product.name} 
            <span className="font-light text-base">
              IDR {product.price}
            </span>
          </h2>
        </div>
      ))}
    </header>
  );
};

export default Header
