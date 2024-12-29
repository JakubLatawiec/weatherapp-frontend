"use client";

import {createContext, ReactNode, useContext, useState, useMemo, useEffect} from "react";
import { ThemeProvider } from "@mui/system";
import { mui_light_theme } from "@/utils/mui/mui-light-theme";
import { mui_dark_theme } from "@/utils/mui/mui-dark-theme";
import { CssBaseline } from "@mui/material";

interface ThemeContextProps {
    isDarkMode: boolean;
    toogleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useThemeContext must be used within a ThemeContextProvider");
    }
    return context;
}

const ThemeContextProvider = ({children}: {children: ReactNode}) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window !== "undefined" && window.matchMedia) {
            setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
        }
    }, [])

    const toogleTheme = () => setIsDarkMode(prev => !prev);

    const value = useMemo(
        () => ({
            isDarkMode,
            toogleTheme
        }),
        [isDarkMode]
    );

    return (
        <ThemeContext.Provider value={value}>
            <ThemeProvider theme={isDarkMode? mui_dark_theme : mui_light_theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export {ThemeContextProvider, useThemeContext};