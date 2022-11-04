import { HiHome } from 'react-icons/hi'
import { FaUserAlt, FaShoppingBasket } from 'react-icons/fa'


export default function MobileMenu() {
    return (
        <div className="shadow-jj md:hidden flex justify-around items-center px-[20px] h-[55px] rounded-[10px] bg-white w-[95%] fixed bottom-[10px] left-[2.5%]">
            <button className='hover:bg-[#8045C61A] rounded-[10px] p-[5px]'>
                <HiHome color="#a67fd4" size={32} />
            </button>
            <button className='hover:bg-[#8045C61A] rounded-[10px] p-[5px]'>
                <FaShoppingBasket color="#e0e0e0" size={30} />
            </button>
            <button className='hover:bg-[#8045C61A] rounded-[10px] p-[5px]'>
                <FaUserAlt color="#e0e0e0" size={26} />
            </button>
        </div>
    )
}