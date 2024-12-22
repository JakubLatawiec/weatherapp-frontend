"use client"

import { ThemeContextProvider } from "@/context/theme-context";
import ChangeLocationButton from "../ui/change-location-button";
import ThemeSwitch from "../ui/theme-switch";

const NavBar = () => {
    return (
        
        <nav className="w-full h-[48px] bg-red flex flex-row items-center justify-between">
            <p>WA</p>
            <ThemeContextProvider>
                <div className="flex flex-row justify-end items-center">
                    <ThemeSwitch />
                    <ChangeLocationButton />
                </div>
            </ThemeContextProvider>
        </nav>
    )
}

export default NavBar;