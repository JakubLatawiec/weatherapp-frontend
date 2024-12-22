import { Icons } from '../icons/icons';
import WeatherStat from './weather-stat';

const SelectedDayWeather = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full flex flex-col justify-start">
                <p className='text-xl'>Kraków, Poland</p>
                <p className='dark:opacity-60 font-chakra'>22.12.2024</p>
            </div>
            <p className="text-6xl mt-[32px] mb-[16px]">20&deg;C</p>
            <p className='mb-[32px] font-chakra font-bold'>Thunderstorm</p>
            <div className="w-full bg-secondary flex flex-row items-center justify-around py-[24px] font-chakra rounded-3xl">
                <WeatherStat 
                    icon={<Icons.minTemp />}
                    value="15&deg;C"
                    description="Minimum temperature"
                />
                <WeatherStat 
                    icon={<Icons.maxTemp />}
                    value="25&deg;C"
                    description="Maximum temperature"
                />
                <WeatherStat 
                    icon={<Icons.energyBolt className='w-[32px] h-[32px]' />}
                    value="20kWh"
                    description="Aproximate solar energy"
                />
            </div>
        </div>
    )
}

export default SelectedDayWeather;