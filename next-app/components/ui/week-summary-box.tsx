import { Icons } from "../icons/icons"
import WeatherStat from "./weather-stat"

const WeekSummaryBox = () => {
    return (
        <div className="w-full mt-[24px] font-chakra flex flex-wrap justify-center gap-[24px]">
            <WeatherStat
                className="bg-secondary !w-[116px] !py-[16px] !mx-[0px] rounded-3xl" 
                icon={<Icons.minTemp />}
                value="11&deg;C"
                description="Minimum temperature"
            />
            <WeatherStat
                className="bg-secondary !w-[116px] !py-[16px] !mx-[0px] rounded-3xl" 
                icon={<Icons.maxTemp />}
                value="33&deg;C"
                description="Maximum temperature"
            />
            <WeatherStat
                className="bg-secondary !w-[116px] !py-[16px] !mx-[0px] rounded-3xl" 
                icon={<Icons.sun className='w-[28px] h-[28px]' />}
                value="1h24m"
                description="Avg. sun exposition"
            />
            <WeatherStat
                className="bg-secondary !w-[116px] !py-[16px] !mx-[0px] rounded-3xl" 
                icon={<Icons.airPressure />}
                value="1122hPa"
                description="Average air pressure"
            />
        </div>
    )
}

export default WeekSummaryBox