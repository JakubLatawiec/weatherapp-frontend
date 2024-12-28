"use client";

import {createContext, ReactNode, useContext, useState, useMemo} from "react";
import { ThemeProvider } from "@mui/system";
import { mui_light_theme, mui_dark_theme } from "@/utils/mui/mui-theme";

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
    const [isDarkMode, setIsDarkMode] = useState(true);

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
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export {ThemeContextProvider, useThemeContext};