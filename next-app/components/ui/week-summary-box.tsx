import { timeFormatter } from "@/utils/formatters/timeFormatter";
import { useWeatherForecastSummary } from "@/utils/hooks/useWeatherForecastSummary"
import { Alert, CircularProgress, Skeleton, Snackbar } from "@mui/material";
import Divider from "@mui/material/Divider";
import ErrorAlert from "../exceptions/error-alert";
import NoData from "../exceptions/no-data";
import { Icons } from "../icons/icons"
import WeatherStat from "./weather-stat"

const WeekSummaryBox = () => {
    const {data, error, isLoading} = useWeatherForecastSummary();

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
        <div className="w-full mt-[24px] flex flex-col justify-start items-center">
            <div className="w-full font-chakra flex flex-wrap justify-center gap-[24px]">
                <WeatherStat
                    className="bg-secondary !w-[116px] !py-[16px] !mx-[0px] rounded-3xl" 
                    icon={<Icons.minTemp />}
                    value={`${data?.summary.temperatureMin}°C`}
                    description="Minimum temperature"
                />
                <WeatherStat
                    className="bg-secondary !w-[116px] !py-[16px] !mx-[0px] rounded-3xl" 
                    icon={<Icons.maxTemp />}
                    value={`${data?.summary.temperatureMax}°C`}
                    description="Maximum temperature"
                />
                <WeatherStat
                    className="bg-secondary !w-[116px] !py-[16px] !mx-[0px] rounded-3xl" 
                    icon={<Icons.sun className='w-[28px] h-[28px]' />}
                    value={timeFormatter(data?.summary.averageSunshineTime ?? 0)}
                    description="Avg. sun exposition"
                />
                <WeatherStat
                    className="bg-secondary !w-[116px] !py-[16px] !mx-[0px] rounded-3xl" 
                    icon={<Icons.airPressure />}
                    value={`${data?.summary.averagePressure.toFixed(0)}hPa`}
                    description="Average air pressure"
                />
            </div>
            <Divider className="w-full mt-[24px]"/>
            <div className="w-full mt-[24px] text-center font-chakra">
                <p>{data?.summary.weekSummary}</p>
            </div>
        </div>
    )
}

export default WeekSummaryBox