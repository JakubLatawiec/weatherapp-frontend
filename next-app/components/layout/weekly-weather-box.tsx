"use client"

import { Tabs, Tab } from "@mui/material";
import DateWeatherList from "../ui/date-weather-list";
import SelectedDayWeather from "../ui/selected-day-weather";
import {useState} from "react";
import { ThemeContextProvider } from "@/context/theme-context";

const WeeklyWeatherBox = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    }

    return (
        <div className="w-full flex flex-col items-center max-w-[560px]">
            <SelectedDayWeather />
            <ThemeContextProvider>
                <Tabs className="w-full mt-[32px]" value={activeTab} onChange={handleTabChange}>
                    <Tab className="dark:text-white text-black" label="Days" />
                    <Tab className="dark:text-white text-black" label="Summary" />
                </Tabs>
                {activeTab === 0 && <DateWeatherList />}
                {activeTab === 1 && <p>Second</p>}
            </ThemeContextProvider>
        </div>
    )
}

export default WeeklyWeatherBox;