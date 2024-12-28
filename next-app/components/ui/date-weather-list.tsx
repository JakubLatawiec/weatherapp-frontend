"use client"

import { CircularProgress, Divider, List, Skeleton } from "@mui/material";
import DateWeatherListItem from "./date-weather-list-item";
import React from "react";
import { useDailyWeatherForecast } from "@/utils/hooks/useDailyWeatherForecast";
import ErrorAlert from "../exceptions/error-alert";
import NoData from "../exceptions/no-data";

interface DateWeatherListProps {
    onDaySelect: (dayIndex: number)  => void;
}

const DateWeatherList: React.FC<DateWeatherListProps> = ({ onDaySelect }) => {
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
                    <DateWeatherListItem 
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

export default DateWeatherList;