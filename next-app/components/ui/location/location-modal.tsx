"use client";

import { Button, Modal } from "@mui/material";
import Map from "./map";
import { useEffect, useState } from "react"
import { useLocation } from "@/context/location-context";
import LocationInput from "./location-input";
import { Location } from "@/types/location";

interface LocationModalProps {
    open: boolean,
    onClose: () => void;
}

const LocationModal: React.FC<LocationModalProps> = ({open, onClose}) => {
    const {location, setLocation} = useLocation();

    const [tempLocation, setTempLocation] = useState<Location>({
        latitude: location.latitude,
        longitude: location.longitude
    });

    const [errors, setErrors] = useState<{ [key in keyof Location]: boolean }>({
        latitude: false,
        longitude: false
    })

    useEffect(() => {
        if (open) {
            setTempLocation(location);
            setErrors({ 
                latitude: false, 
                longitude: false 
            });
        }
    }, [open, location])

    const handleApply = () => {
        setLocation(
            parseFloat(tempLocation.latitude.toFixed(6)), 
            parseFloat(tempLocation.longitude.toFixed(6))
        );
        onClose();
    }

    const handleLocationChange = (key: keyof Location, value: number) => {
        setTempLocation(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const handleErrorChange = (key: keyof Location, hasError: boolean) => {
        setErrors(prev => ({
            ...prev,
            [key]: hasError
        }));
    };

    const handleMapClick = (latitude: number, longitude: number) => {
        setTempLocation({
            latitude: parseFloat(latitude.toFixed(6)),
            longitude: parseFloat(longitude.toFixed(6))
        });
    }

    const isApplyDisabled = Object.values(errors).some((hasError) => hasError);

    return (
        <Modal 
            open={open} 
            onClose={onClose} 
        >
            <div className="w-[80%] max-w-[560px] bg-secondary font-chakra flex flex-col items-center justify-start p-[24px] rounded-3xl dark:text-white text-black">
                <p className="text-lg font-russo">Change location</p>
                <div className="w-full flex flex-col items-center mt-[16px]">
                    <LocationInput
                        label="Latitude"
                        initialValue={tempLocation.latitude}
                        onValid={value => handleLocationChange("latitude", value)}
                        onError={hasError => handleErrorChange("latitude", hasError)}
                        min={-90}
                        max={90}
                        className="w-[200px]"
                    />
                    <LocationInput
                        label="Longitude"
                        initialValue={tempLocation.longitude}
                        onValid={value => handleLocationChange("longitude", value)}
                        onError={hasError => handleErrorChange("longitude", hasError)}
                        min={-180}
                        max={180}
                        className="w-[200px] mt-[16px]"
                    />
                </div>
                <div className="w-full h-[300px] mt-[36px]">
                    <Map
                         latitude={tempLocation.latitude}
                         longitude={tempLocation.longitude}
                         onMapClick={handleMapClick}
                    />
                </div>
                <Button
                    sx={{marginTop: "24px"}} 
                    className="mt-[24px]" 
                    variant="contained"
                    onClick={handleApply}
                    disabled={isApplyDisabled}
                >
                    APPLY
                </Button>
            </div>
        </Modal>
    )
}

export default LocationModal;