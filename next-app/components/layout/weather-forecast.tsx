"use client"

import { Tabs, Tab } from "@mui/material";
import {useState} from "react";
import WeekSummaryBox from "../ui/weather_forecast/weather-forecast-summary";
import DailyWeatherForecastList from "../ui/weather_forecast/daily-weather-forecast-list";
import SelectedDayWeatherForecast from "../ui/weather_forecast/selected-day-weather-forecast";

const WeatherForecast = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    }

    return (
        <div className="w-full h-full flex flex-col items-center max-w-[560px]">
            <SelectedDayWeatherForecast selectedDayIndex={selectedDayIndex} />
                <Tabs className="w-full mt-[32px]" value={activeTab} onChange={handleTabChange}>
                    <Tab className="dark:text-white text-black" label="Days list" />
                    <Tab className="dark:text-white text-black" label="Week summary" />
                </Tabs>
                {activeTab === 0 && <DailyWeatherForecastList onDaySelect={setSelectedDayIndex} />}
                {activeTab === 1 && <WeekSummaryBox />}
        </div>
    )
}

export default WeatherForecast;