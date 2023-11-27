"use client"
import React from 'react'
import {CiDark, CiLight} from "react-icons/ci"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeComp = () => {

  const [mounted, setMounted] = useState(false)
  const { systemTheme,theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const themeMode = theme === "system" ? "systemTheme" : "theme"
  return (
    <div>{mounted}<CiDark className='cursor-pointer' size={25}/><CiLight className='cursor-pointer' size={25}/></div>
  )
}

export default ThemeComp