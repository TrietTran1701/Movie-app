import { useRouter } from 'next/router'
import Link from 'next/link'
import { AiOutlineHome } from "react-icons/ai";
import { BiCompass } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBookmarkCheck } from "react-icons/bs";
import { AiOutlineHistory } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";

interface SidebarProps {
  activeSidebar: boolean,
  setActiveSidebar: any,
}
const Sidebar = ({ activeSidebar, setActiveSidebar }: SidebarProps) => {

  const router = useRouter();
  console.log(router.pathname);
  return (

    <>
      <div className={`h-screen bg-dark-lighten top-0 fixed pl-8 z-50 text-white transition duration-300 shadow-md w-[70vw] md:max-w-[260px] flex flex-col justify-evenly -translate-x-full ${activeSidebar && 'translate-x-0'}`}>
        <div>
          <h2 className="font-semibold text-lg">MENU</h2>
        
            <div className="flex flex-col gap-6 mt-8 ml-4 text-gray-400">
            <Link href="/">
              <div className={`flex items-center cursor-pointer gap-6 mt-8 ml-4 ${router.pathname==='/' && '!text-red-500 font-medium border-r-4 border-red-500'} hover:text-white transition duration-300`}>
              <AiOutlineHome size={28}
                stroke="currentColor"
                fill="currentColor"
              />
              <p>Home</p>
          
              </div>
              </Link>

              <Link href="/explore">
              <div className={`flex items-center cursor-pointer gap-6 mt-8 ml-4 ${router.pathname==='/explore' && '!text-red-500 font-medium border-r-4 border-red-500'} hover:text-white transition duration-300`}>
              
        
              <BiCompass size={28}
                stroke="currentColor"
                fill="currentColor"
              />
              <p>Explore</p>
  
             
              </div>
              </Link>


              <Link href="/search">
              <div className={`flex items-center cursor-pointer gap-6 mt-8 ml-4 ${router.pathname==='/search' && '!text-red-500 font-medium border-r-4 border-red-500'} hover:text-white transition duration-300`}>
              
        
              <AiOutlineSearch size={28}
                stroke="currentColor"
                fill="currentColor"
              />
              <p>Search</p>
  
             
              </div>
              </Link>

              
            </div>

        </div>
        <div>
          <h2 className="font-semibold text-lg">PERSONAL</h2>
        </div>
        <div>
          <h2 className="font-semibold text-lg">GENERAL</h2>
        </div>
      </div>
      <div className={`bg-black/60 z-[5] fixed top-0 left-0 w-full h-full transition duration-300 ${activeSidebar ? "opacity-100 visible" : "opacity-0 invisible"}`
      }
        onClick={() => setActiveSidebar(false)}
      ></div>
    </>
  )
}

export default Sidebar