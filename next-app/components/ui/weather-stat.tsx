interface WeatherStatProp {
    icon: React.ReactNode;
    value: string;
    description: string;
}

const WeatherStat: React.FC<WeatherStatProp> = ({icon, value, description}) => {
    return (
        <div className="flex flex-col items-center w-[80px] mx-[8px] text-center">
            <div className="w-[32px] h-[32px] flex items-center justify-center">
                {icon}
            </div>
            <p className="mt-[4px] text-xl font-bold">{value}</p>
            <p className="dark:opacity-60 opacity-100 text-sm">{description}</p>
        </div>
    )
}

export default WeatherStat;