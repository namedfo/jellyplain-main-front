import Image from "next/image";
import { useRouter } from 'next/router'
//
import { IoSearchSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
//
import logo from "../utils/logo.jpg";
import cart from "../utils/jj-cart.svg";

export default function Header() {
  
  const router = useRouter()
  
  return (
    <div className="w-full px-[15px] flex justify-between bg-white h-[60px] shadow-jj rounded-[10px]">
      <div className="w-[33%] flex items-center">
        <button className="bg-[#E7E9EB] hover:bg-[#D3D9DF] flex items-center text-[#444F58] rounded-[10px] py-[5px] px-[15px]">
          <IoSearchSharp size={20} />
          <span className="font-medium ml-[7px] text-[18px]">Поиск</span>
        </button>
      </div>
      <div className="w-[33%] flex justify-center">
        <button onClick={() => router.push('/')}>
          {/* Logo */}
        <Image className="cursor-pointer" width={60} height={60} src={logo} alt="" />
        </button>
      </div>
      <div className="w-[33%] flex items-center justify-end">
        <button className="hover:bg-[#E7E9EB] relative rounded-md p-[6px]">
          <div className="bg-[#ef7481] shadow-xl bottom-[-3px] left-[22px] text-[12px] px-[5px] absolute text-white rounded-[8px]">
          1
          </div>
          <Image width={28} height={28} src={cart} alt="" />
        </button>
        <button 
          onClick={() => router.push('/profile')}
          className="hover:bg-[#E7E9EB] rounded-md p-[6px] ml-[20px]">
          <FaRegUser color="#35404A" size={26} />
        </button>
      </div>
    </div>
  );
}
