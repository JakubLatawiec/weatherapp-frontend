const API_URL = process.env.API_URL;
const API_PORT = process.env.API_PORT;

const fetchWeatherForecast = async<T>(
    endpoint: string,
    params: Record<string, any>
) : Promise<T> => {
    const query = new URLSearchParams(params).toString();
    const url = `${API_URL}:${API_PORT}/weatherforecast/${endpoint}?${query}`;

    const response = await fetch(url);

    if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData?.error || "Failed to fetch weather forecast data!";
        throw new Error(errorMessage);
    }

    return response.json();
}

export {fetchWeatherForecast};