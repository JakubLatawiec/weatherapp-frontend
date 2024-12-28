import WeatherForecast from "@/components/layout/weather-forecast";
import PageWrapper from "@/components/wrappers/page-wrapper";

const Home = () => {
  return (
    <PageWrapper>
      <WeatherForecast />
    </PageWrapper>
  );
}

export default Home;