const fetchWeatherForecast = async<T>(
    endpoint: string,
    params: Record<string, any>
) : Promise<T> => {
    const query = new URLSearchParams(params).toString();
    const url = `https://localhost:7064${endpoint}?${query}`;

    const response = await fetch(url);

    if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData?.error || "Failed to fetch weather forecast data!";
        throw new Error(errorMessage);
    }

    return response.json();
}

export {fetchWeatherForecast};