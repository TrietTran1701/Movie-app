import { useRouter } from "next/router";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { BiCompass } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBookmarkCheck } from "react-icons/bs";
import { AiOutlineHistory } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { MdLogin } from "react-icons/md";
import useScreenSize from "../../hooks/useScreenSize";

interface SidebarProps {
  activeSidebar: boolean;
  setActiveSidebar: any;
}
const Sidebar = ({ activeSidebar, setActiveSidebar }: SidebarProps) => {
  const router = useRouter();
  const [isMobile] = useScreenSize();
  return (
    <>
      <div
        className={`h-screen shrink-0 text-black bg-white dark:bg-dark-theme top-0 fixed md:sticky md:bg-transparent md:shadow-none pl-8 z-50 dark:text-white transition duration-300 shadow-md w-[70vw] md:max-w-[260px] md:translate-x-0 md:border-r-1 border-black dark:border-white flex flex-col justify-evenly -translate-x-full ${
          activeSidebar && "translate-x-0"
        }`}
      >
        {!isMobile && (
          <img
            src="https://rb.gy/ulxxee"
            width={100}
            height={100}
            alt="logo"
            className="cursor-pointer object-contain mb-4"
          />
        )}
        <div className="mb-2">
          <h2 className="font-bold text-lg text-gray-500">MENU</h2>

          <div className="flex flex-col gap-2 ml-4 text-gray-400">
            <Link href="/">
              <div
                className={`flex items-center cursor-pointer gap-6 mt-8 ml-4 ${
                  router.pathname === "/" &&
                  "!text-red-500 font-medium border-r-4 border-red-500"
                } hover:text-black dark:hover:text-white transition duration-300`}
              >
                <AiOutlineHome
                  size={28}
                  stroke="currentColor"
                  fill="currentColor"
                />
                <p>Home</p>
              </div>
            </Link>

            <Link href="/explore">
              <div
                className={`flex items-center cursor-pointer gap-6 mt-8 ml-4 ${
                  router.pathname === "/explore" &&
                  "!text-red-500 font-medium border-r-4 border-red-500"
                } hover:text-black dark:hover:text-white transition duration-300`}
              >
                <BiCompass
                  size={28}
                  stroke="currentColor"
                  fill="currentColor"
                />
                <p>Explore</p>
              </div>
            </Link>
            <Link href="/search">
              <div
                className={`flex items-center cursor-pointer gap-6 mt-8 ml-4 ${
                  router.pathname === "/search" &&
                  "!text-red-500 font-medium border-r-4 border-red-500"
                } hover:text-black dark:hover:text-white transition duration-300`}
              >
                <AiOutlineSearch
                  size={28}
                  stroke="currentColor"
                  fill="currentColor"
                />
                <p>Search</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="mb-2">
          <h2 className="font-bold text-lg text-gray-500">PERSONAL</h2>

          <div className="flex flex-col gap-2 ml-4 text-gray-400">
            <Link href="/bookmark">
              <div
                className={`flex items-center cursor-pointer gap-6 mt-8 ml-4 ${
                  router.pathname === "/bookmark" &&
                  "!text-red-500 font-medium border-r-4 border-red-500"
                } hover:text-black dark:hover:text-white transition duration-300`}
              >
                <BsBookmarkCheck
                  size={28}
                  stroke="currentColor"
                  fill="currentColor"
                />
                <p>Bookmark</p>
              </div>
            </Link>

            <Link href="/history">
              <div
                className={`flex items-center cursor-pointer gap-6 mt-8 ml-4 ${
                  router.pathname === "/history" &&
                  "!text-red-500 font-medium border-r-4 border-red-500"
                } hover:text-black dark:hover:text-white transition duration-300`}
              >
                <AiOutlineHistory
                  size={28}
                  stroke="currentColor"
                  fill="currentColor"
                />
                <p>History</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="mb-2">
          <h2 className="font-bold text-lg text-gray-500">GENERAL</h2>

          <div className="flex flex-col gap-2  ml-4 text-gray-400">
            <Link href="/profile">
              <div
                className={`flex items-center cursor-pointer gap-6 mt-8 ml-4 ${
                  router.pathname === "/profile" &&
                  "!text-red-500 font-medium border-r-4 border-red-500"
                } hover:text-black dark:hover:text-white transition duration-300`}
              >
                <CgProfile
                  size={28}
                  stroke="currentColor"
                  fill="currentColor"
                />
                <p>Profile</p>
              </div>
            </Link>

            <Link href="/login">
              <div
                className={`flex items-center cursor-pointer gap-6 mt-8 ml-4 ${
                  router.pathname === "/login" &&
                  "!text-red-500 font-medium border-r-4 border-red-500"
                } hover:text-black dark:hover:text-white transition duration-300`}
              >
                <MdLogin size={28} stroke="currentColor" fill="currentColor" />
                <p>Login</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`bg-black/60 z-[5] fixed top-0 left-0 w-full h-full transition duration-300 md:opacity-0 md:invisible ${
          activeSidebar ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setActiveSidebar(false)}
      ></div>
    </>
  );
};

export default Sidebar;
