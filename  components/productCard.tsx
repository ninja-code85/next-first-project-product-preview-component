import Image from "next/image";
import Button from "./button";


export default function Page(){
  return(
  <div className="bg-[hsl(30,38%,92%)] min-h-screen flex items-center justify-center p-5  ">
    <div className="md:flex max-w-[600px] max-w-2xl  ">
    <div>
      <Image src={"/images/image-product-mobile.jpg"}
      alt="product image"
      width={500}
      height={500}
      className="rounded-tl-lg rounded-tr-lg md:hidden"
      />
      <Image src={"/images/image-product-desktop.jpg"}
      alt="product desk img"
      className="md:block hidden  object-cover rounded-tl-lg rounded-bl-lg"
      width={300}
      height={300}
      />
    </div>
    <div className="text-black bg-white p-6 space-y-6 rounded-bl-lg rounded-br-lg md:w-1/2">
      <p className="text-gray-400 tracking-widest">PERFUME</p>
      <h1 className="font-extrabold text-2xl ">Gabrielle Essence Eau De Parfum</h1>
      <p className="text-gray-400">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
      <div className="flex space-x-5 items-center">
        <h1 className="font-extrabold text-3xl text-[hsl(158,36%,37%)]">$149.99</h1>
        <span className="text-sm line-through text-gray-400 ">$6999</span>
      </div>
      <Button/>
    </div>
    </div>

  </div>
  )
}
