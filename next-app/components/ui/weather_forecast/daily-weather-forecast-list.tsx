"use client"

import { Divider, List, Skeleton } from "@mui/material";
import React from "react";
import { useDailyWeatherForecast } from "@/utils/hooks/useDailyWeatherForecast";
import ErrorAlert from "../../exceptions/error-alert";
import NoData from "../../exceptions/no-data";
import DailyWeatherForecastListItem from "./daily-weather-forecast-list-item";

interface DailyWeatherForecastListProps {
    onDaySelect: (dayIndex: number)  => void;
}

const DailyWeatherForecastList: React.FC<DailyWeatherForecastListProps> = ({ onDaySelect }) => {
    const { data, isLoading, error} = useDailyWeatherForecast();

    if (isLoading) {
        return (
            <Skeleton variant='rectangular' className='w-full h-[300px]' />
        )
    }

    if (error) {
        return (
            <>
                <ErrorAlert message={error.message} />
                <NoData />
            </>
        );
    }

    return (
        <List className="w-full">
            {data?.daily.map((day, index) => (
                <React.Fragment key={day.date}>
                    <DailyWeatherForecastListItem 
                        date={day.date}
                        weatherCode={day.weatherCode}
                        temperatureMin={day.temperatureMin}
                        temperatureMax={day.temperatureMax}
                        onClick={() => onDaySelect(index)}
                    />
                    {index < data.daily.length - 1 && <Divider />}
                </React.Fragment>
            ))}
        </List>
    )
}

export default DailyWeatherForecastList;