"use client"

import { Tabs, Tab } from "@mui/material";
import DateWeatherList from "../ui/date-weather-list";
import SelectedDayWeather from "../ui/selected-day-weather";
import {useState} from "react";
import WeekSummaryBox from "../ui/week-summary-box";

const WeeklyWeatherBox = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    }

    return (
        <div className="w-full h-full flex flex-col items-center max-w-[560px]">
            <SelectedDayWeather selectedDay={selectedDayIndex} />
                <Tabs className="w-full mt-[32px]" value={activeTab} onChange={handleTabChange}>
                    <Tab className="dark:text-white text-black" label="Days list" />
                    <Tab className="dark:text-white text-black" label="Week summary" />
                </Tabs>
                {activeTab === 0 && <DateWeatherList onDaySelect={setSelectedDayIndex} />}
                {activeTab === 1 && <WeekSummaryBox />}
        </div>
    )
}

export default WeeklyWeatherBox;