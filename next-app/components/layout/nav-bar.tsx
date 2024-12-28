"use client"

import ChangeLocationButton from "../ui/navbar/change-location-button";
import ThemeSwitch from "../ui/navbar/theme-switch";
import {useState} from "react";
import LocationModal from "../ui/location/location-modal";

const NavBar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => setIsModalOpen(false);

    return (
        <>
        <nav className="max-w-[1800px] w-full h-[48px] bg-red flex flex-row items-center justify-between">
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