import { useLocation } from "@/context/location-context";
import { useQuery } from "@tanstack/react-query";
import { fetchWeatherForecast } from "../fetchers/fetchWeatherForecast";

interface WeatherForecastSummaryResponse {
    location: {
        country: string;
        city: string;
    };
    summary: {
        averagePressure: number;
        averageSunshineTime: number;
        temperatureMin: number;
        temperatureMax: number;
        weekSummary: string;
    };
}

const useWeatherForecastSummary = () => {
    const { location } = useLocation();
    return useQuery({
        queryKey: ["fetch-weather-forecast-summary", location],
        queryFn: () => fetchWeatherForecast<WeatherForecastSummaryResponse>(
            "summary", 
            {
                latitude: location.latitude, 
                longitude: location.longitude
            }),
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });
}

export {useWeatherForecastSummary}