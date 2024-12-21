"use client";

import Switch from "@mui/material/Switch";
import {ThemeProvider} from "@mui/material/styles"
import { mui_light_theme, mui_dark_theme } from "@/utils/mui-theme";
import {useState, useEffect} from "react"

const ThemeSwitch = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const html = document.documentElement;
        if (isDarkMode) {
            html.classList.add("dark")
        }
        else {
            html.classList.remove("dark")
        }
    }, [isDarkMode])

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    }

    return (
        <ThemeProvider theme={isDarkMode ? mui_dark_theme : mui_light_theme}>
            <Switch checked={isDarkMode} onChange={toggleTheme}/>
        </ThemeProvider>
    )
}

export default ThemeSwitch;