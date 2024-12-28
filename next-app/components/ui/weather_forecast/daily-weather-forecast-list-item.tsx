import { dateFormatter } from '@/utils/formatters/dateFormatter';
import { mapWeathercodeToIcon } from '@/utils/mappers/weathercode-icon-mapper';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

interface DailyWeatherForecastListItemProps {
    date: string;
    weatherCode: number;
    temperatureMin: number;
    temperatureMax: number;
    onClick: () => void;
}

const DailyWeatherForecastListItem: React.FC<DailyWeatherForecastListItemProps> = 
({
    date,
    weatherCode,
    temperatureMin,
    temperatureMax,
    onClick
}) => {
    const WeatherIcon = mapWeathercodeToIcon(weatherCode, { className: "w-[24px] h-[24px]" });

    return (
        <ListItem>
            <ListItemButton className='flex items-center w-full' onClick={onClick}>
                <ListItemText className='w-[40%]' primary={dateFormatter(date)}/>
                <ListItemText className='w-[20%] flex flex-row justify-center items-center opacity-60' primary={`${temperatureMin}°C`}/>
                <ListItemText className='w-[20%] flex flex-row justify-center items-center' primary={`${temperatureMax}°C`}/>
                <ListItemIcon className='w-[20%] flex flex-row justify-end items-center text-black dark:text-white'>
                    {WeatherIcon}
                </ListItemIcon>
            </ListItemButton>
        </ListItem>
    )
}

export default DailyWeatherForecastListItem;