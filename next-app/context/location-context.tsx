"use client";

import { createContext, useState, useEffect, useContext } from "react"
import { Location } from "@/types/location";

type LocationContextType = {
    location: Location;
    setLocation: (latitude: number, longitude: number) => void;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

const LocationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [location, setLocationState] = useState<Location>({latitude: 0, longitude: 0});

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const {latitude, longitude} = position.coords;
                    setLocationState({latitude, longitude});
                },
                () => {
                    console.warn("Geolocation not available or denied.")
                }
            );
        }
    }, []);

    const setLocation = (latitude: number, longitude: number) => {
        setLocationState({latitude, longitude});
    }

    return (
        <LocationContext.Provider value={{location, setLocation}}>
            {children}
        </LocationContext.Provider>
    )
}

const useLocation = (): LocationContextType => {
    const context = useContext(LocationContext);
    if (!context) {
        throw new Error("useLocation must be used within a LocationProvider")
    }
    return context;
}

export {LocationProvider, useLocation};