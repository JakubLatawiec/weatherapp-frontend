"use client";

import {IconButton} from "@mui/material"
import MapIcon from '@mui/icons-material/Map';

interface ChangeLocationButtonProps {
    handleClick: () => void;
}

const ChangeLocationButton: React.FC<ChangeLocationButtonProps> = ({handleClick}) => {
    return (
        <div className="flex flex-row justify-end items-center">
            <p className="sm:block hidden font-chakra font-medium dark:font-light">Change location:</p>
            <IconButton className="sm:ml-[8px]" onClick={handleClick}>
                <MapIcon />
            </IconButton>
        </div>
        
    )
}

export default ChangeLocationButton;