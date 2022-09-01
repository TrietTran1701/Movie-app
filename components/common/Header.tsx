import useDarkMode from '../../hooks/useDarkMode'
import {BsMoon} from "react-icons/bs"
import {BsSun} from 'react-icons/bs'
import {useTheme} from 'next-themes'
const Header = () => {
  const {theme,setTheme} = useTheme();

  
  return (
    <div className="md:hidden">
      {theme==='dark'?(
        <BsSun className="cursor-pointer" onClick={() =>setTheme(theme==='dark'?'light':'dark')}/>
      ):(
        <BsMoon className="cursor-pointer" onClick={() =>setTheme(theme==='light'?'dark':'light')}/>
      )}
    </div>
  )
}

export default Header