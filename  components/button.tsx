import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Button(){
  return(
    <div className="rounded-lg  p-3 w-full bg-[hsl(158,36%,37%)] text-white font-bold flex items-center justify-center space-x-3 cursor-pointer hover:bg-[hsl(158,42%,18%)]" >
       <AiOutlineShoppingCart />  <span>Add to Cart</span>
    </div>
  )
}