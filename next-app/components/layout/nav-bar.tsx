"use client"

import { ThemeContextProvider } from "@/context/theme-context";
import ChangeLocationButton from "../ui/change-location-button";
import ThemeSwitch from "../ui/theme-switch";

const NavBar = () => {
    return (
        
        <nav className="w-full h-[48px] bg-red flex flex-row items-center justify-between">
            <p className="text-xl">Weather<span className="text-primary">App</span></p>
            <ThemeContextProvider>
                <div className="flex flex-row justify-end items-center h-full">
                    <ThemeSwitch />
                    <hr className="w-[1px] min-h-full mx-[12px] bg-black dark:bg-white "/>
                    <ChangeLocationButton />
                </div>
            </ThemeContextProvider>
        </nav>
    )
}

export default NavBar;