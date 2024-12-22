"use client"

import { Divider, List } from "@mui/material";
import DateWeatherListItem from "./date-weather-list-item";
import { ThemeContextProvider } from "@/context/theme-context";

const DateWeatherList = () => {
    return (
        <List className="w-full">
            <DateWeatherListItem />
            <Divider />
            <DateWeatherListItem />
            <Divider />
            <DateWeatherListItem />
            <Divider />
            <DateWeatherListItem />
            <Divider />
            <DateWeatherListItem />
            <Divider />
            <DateWeatherListItem />
            <Divider />
            <DateWeatherListItem />
        </List>
    )
}

export default DateWeatherList;