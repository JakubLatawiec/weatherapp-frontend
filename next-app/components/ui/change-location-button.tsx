"use client";

import {IconButton} from "@mui/material"
import MapIcon from '@mui/icons-material/Map';

const ChangeLocationButton = () => {
    return (
        <div className="flex flex-row justify-end items-center">
            <p className="sm:block hidden font-chakra">Change location:</p>
            <IconButton className="sm:ml-[8px]">
                <MapIcon />
            </IconButton>
        </div>
        
    )
}

export default ChangeLocationButton;