"use client"

import { ThemeContextProvider } from "@/context/theme-context";
import ChangeLocationBox from "../ui/location/location-modal";
import ChangeLocationButton from "../ui/change-location-button";
import ThemeSwitch from "../ui/theme-switch";
import {useState} from "react";
import { LocationProvider } from "@/context/location-context";
import LocationModal from "../ui/location/location-modal";

const NavBar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => setIsModalOpen(false);

    return (
        <>
        <nav className="w-full h-[48px] bg-red flex flex-row items-center justify-between">
            <p className="text-xl">Weather<span className="text-primary">App</span></p>
                <div className="flex flex-row justify-end items-center h-full">
                    <ThemeSwitch />
                    <hr className="w-[1px] min-h-full mx-[12px] bg-black dark:bg-white "/>
                    <ChangeLocationButton handleClick={handleModalOpen} />
                </div>
        </nav>
            <LocationModal 
                open={isModalOpen}
                onClose={handleModalClose}
            />
        </>
    )
}

export default NavBar;