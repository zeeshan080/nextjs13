"use client"
import { SunDim } from 'lucide-react';
import { MoonIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState,useEffect } from 'react';

type Props = {}

export default function Mode({}: Props) {
    const {theme, setTheme}= useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
      setMounted(true)
    }, [])

    if(!mounted){
        return null
    }
    
  return (
    <button onClick={() => {setTheme(theme === 'dark' ? 'light': 'dark')}}>
        {
            theme === "dark" ? <MoonIcon className='w-5 h-5'/> :  <SunDim className='w-5 h-5'/>
        }
       
        
        </button>
  )
}