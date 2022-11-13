import { useRouter } from "next/router";
//
import { HiHome } from "react-icons/hi";
import { FaUserAlt, FaShoppingBasket } from "react-icons/fa";
// hooks
import { useTypedSelector } from "../hooks/useTypedSelector";
import useActions from "../hooks/useActions";

export default function MobileMenu() {
  const { isAuth } = useTypedSelector(state => state.user)

  const { setIsOpenAuth } = useActions()

  const router = useRouter();

  return (
    <div className="shadow-jj md:hidden flex justify-around items-center px-[20px] h-[55px] rounded-[10px] bg-white w-[95%] fixed bottom-[10px] left-[2.5%]">
      <button
        onClick={() => router.push("/")}
        className="hover:bg-[#8045C61A] rounded-[10px] p-[5px]"
      >
        <HiHome 
            color={router.pathname === "/" ? "#86368D" : '#DBD9D9'} 
            size={34}
        />
      </button>
      <button
        onClick={() => router.push("/cart")}
        className="hover:bg-[#8045C61A] rounded-[10px] p-[5px]"
      >
        <FaShoppingBasket 
            color={router.pathname === "/cart" ? "#86368D" : '#DBD9D9'}  
            size={32} 
        />
      </button>
      <button
        onClick={() => {
          if (!isAuth) {
            return setIsOpenAuth(true)
          }
          return router.push('/profile')
        }}
        className="hover:bg-[#8045C61A] rounded-[10px] p-[5px]"
      >
        <FaUserAlt 
            color={router.pathname === "/profile" ? "#86368D" : '#DBD9D9'}  
            size={28} 
        />
      </button>
    </div>
  );
}
