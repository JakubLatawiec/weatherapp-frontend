"use client";

import Switch from "@mui/material/Switch";
import {ThemeProvider} from "@mui/material/styles"
import { mui_light_theme, mui_dark_theme } from "@/utils/mui/mui-theme";
import {useState, useEffect} from "react"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useThemeContext } from "@/context/theme-context";

const ThemeSwitch = () => {
    const {isDarkMode, toogleTheme} = useThemeContext();

    useEffect(() => {
        const html = document.documentElement;
        if (isDarkMode) {
            html.classList.add("dark")
        }
        else {
            html.classList.remove("dark")
        }
    }, [isDarkMode]);

    return (
        <div className="flex flex-row justify-end items-center">
            <p className="hidden sm:block font-chakra">Dark mode:</p>
            <Switch 
                checked={isDarkMode} 
                onChange={toogleTheme}
                className="mr-0 sm:mr-[-8px]"
            />
            <DarkModeIcon className="ml-[-4px] block sm:hidden"/>
        </div>
    )
}

export default ThemeSwitch;