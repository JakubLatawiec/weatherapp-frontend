import { dateFormatter } from '@/utils/formatters/dateFormatter';
import { useDailyWeatherForecast } from '@/utils/hooks/useDailyWeatherForecast';
import { mapWeathercodeToDescription } from '@/utils/mappers/weathercode-description-mapper';
import { mapWeathercodeToIcon } from '@/utils/mappers/weathercode-icon-mapper';
import Skeleton from '@mui/material/Skeleton';
import ErrorAlert from '../../exceptions/error-alert';
import NoData from '../../exceptions/no-data';
import { Icons } from '../../icons/icons';
import WeatherStat from './weather-stat';

interface SelectedDayWeatherForecastProps {
    selectedDayIndex: number;
}

const SelectedDayWeatherForecast: React.FC<SelectedDayWeatherForecastProps> = ({ selectedDayIndex }) => {
    const {data, error, isLoading} = useDailyWeatherForecast();

    const selectedDayData = data?.daily[selectedDayIndex];

    if (isLoading) {
        return (
            <Skeleton variant='rectangular' className='w-full h-[360px]' />
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

    const calcAverageTemperature = (tMin: number | undefined, tMax: number | undefined): string => {
        if (tMin === undefined || tMax === undefined) {
            return "N/A";
        }
        const avg = (tMin + tMax) / 2;
        return avg.toFixed(1);
    }

    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full flex flex-col justify-start">
                <p className='text-xl'>{`${data?.location.city}, ${data?.location.country}`}</p>
                <p className='dark:opacity-60 font-chakra'>{dateFormatter(selectedDayData?.date)}</p>
            </div>
            <p className="text-6xl mt-[32px] mb-[16px]">
                {`${calcAverageTemperature(selectedDayData?.temperatureMin, selectedDayData?.temperatureMax)}°C`}
            </p>
            <div className='flex flex-row items-center mb-[32px]'>
                <p className='font-chakra font-bold'>{mapWeathercodeToDescription(selectedDayData?.weatherCode)}</p>
                {mapWeathercodeToIcon(selectedDayData?.weatherCode, { className: "w-[24px] h-[24px] ml-[12px]"})}
            </div>
            
            <div className="w-full bg-secondary flex flex-row items-center justify-around py-[24px] font-chakra rounded-3xl">
                <WeatherStat 
                    icon={<Icons.minTemp />}
                    value={`${selectedDayData?.temperatureMin}°C`}
                    description="Minimum temperature"
                />
                <WeatherStat 
                    icon={<Icons.maxTemp />}
                    value={`${selectedDayData?.temperatureMax}°C`}
                    description="Maximum temperature"
                />
                <WeatherStat 
                    icon={<Icons.energyBolt className='w-[32px] h-[32px]' />}
                    value={`${selectedDayData?.solarEnergy}kWh`}
                    description="Aproximate solar energy"
                />
            </div>
        </div>
    )
}

export default SelectedDayWeatherForecast;