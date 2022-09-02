import {useState,useEffect} from "react"
import {BsMoon} from "react-icons/bs"
import {BsSun} from 'react-icons/bs'
import {useTheme} from 'next-themes'
import Sidebar from "./Sidebar"
const Header = () => {
  const {systemTheme,theme,setTheme} = useTheme();
  const [mounted,setMounted] = useState(false);
  useEffect(() =>{
    setMounted(true)
  },[])
  const renderThemeChanger = ()=>{
    if(!mounted) return null;
    const currentTheme = theme === 'system'?systemTheme:theme;

    if(currentTheme==='dark'){
      return (
       <BsSun size={22} role='button' onClick = {()=>setTheme('light')} /> 
      )

    }
    else{
      return(
        <BsMoon size={22} role='button' onClick = {() => setTheme('dark')} />
      )
    }
  }

  return (
    <header className="flex md:hidden items-center justify-between py-5 dark:text-white">
      <img src="https://rb.gy/ulxxee" width={100} height={100} alt='logo' className="cursor-pointer object-contain"/>
     <div className="flex items-center gap-5">
     
     {renderThemeChanger()}
      </div> 
      
     <Sidebar /> 
    </header>
  )
}

export default Header