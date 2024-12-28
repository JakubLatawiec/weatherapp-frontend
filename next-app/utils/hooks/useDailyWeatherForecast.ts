import { useLocation } from "@/context/location-context";
import { useQuery } from "@tanstack/react-query";
import { fetchWeatherForecast } from "../fetchers/fetchWeatherForecast";

interface DailyWeatherForecastResponse {
    location: {
        country: string;
        city: string;
    };
    daily: {
        date: string;
        weatherCode: number;
        temperatureMin: number;
        temperatureMax: number;
        solarEnergy: number;
    }[];
}

const useDailyWeatherForecast = () => {
    const { location } = useLocation();
    return useQuery({
        queryKey: ["fetch-daily-weather-forecast", location],
        queryFn: () => fetchWeatherForecast<DailyWeatherForecastResponse>(
            "daily", 
            {
                latitude: location.latitude, 
                longitude: location.longitude
            }),
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });
}

export {useDailyWeatherForecast}