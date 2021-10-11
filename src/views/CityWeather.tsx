import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { WeatherIcon } from "weather-react-icons";
import { getForcastsForDaysByCity } from "utils/api";
import { Flex, Text, SimpleGrid, HStack } from "@chakra-ui/react";
import dayjs from "dayjs";

const CityWeather = () => {
  const [weatherData, setWeatherData] = useState<any>(null);

  const { name } = useParams<{ name?: string }>();

  useEffect(() => {
    getForcastsForDaysByCity(name).then((data) => {
      setWeatherData(data.list);
    });
  }, [name]);

  return (
    <div className="App">
      {!weatherData ? (
        <div>Loading...</div>
      ) : (
        <Flex
          bg="white"
          mt="8"
          padding="5px"
          borderRadius="md"
          boxShadow="sm"
          flexDir="column"
        >
          <Flex
            w="full"
            bg="polar"
            py="50px"
            alignItems="center"
            flexDir="column"
          >
            <Text fontSize="3xl"  fontWeight="hairline">Today</Text>
            <HStack spacing="30px" mt="20px" alignItems="flex-start">
              <Text fontSize="8xl" color="iceberg">
                <WeatherIcon iconId={weatherData[0].weather[0].id} name="owm" />
              </Text>
              <Flex flexDir="column">
                <Text fontSize="5xl" fontWeight="bold">
                  {weatherData[0].temp.day} °
                </Text>
                <Text fontSize="2xl" fontWeight="hairline">
                  {weatherData[0].weather[0].main}
                </Text>
              </Flex>
            </HStack>
          </Flex>
          <SimpleGrid columns={{base:1,md:2,lg:4}} spacing="5px" mt="5px">
            {weatherData.slice(1, weatherData.length).map((weather: any) => {
              const day = dayjs.unix(weather.dt).format("ddd");
              return (
                <Flex
                  w="full"
                  key={weather.dt}
                  bg="polar"
                  py="10px"
                  alignItems="center"
                  flexDir="column"
                >
                  <Text fontSize="3xl" fontWeight="hairline" mb="5px">{day}</Text>
                  <Text fontSize="7xl" color="iceberg">
                    <WeatherIcon iconId={weather.weather[0].id} name="owm" />
                  </Text>
                  <Text fontSize="xl" fontWeight="bold">
                    {weather.temp.day}°
                  </Text>
                </Flex>
              );
            })}
          </SimpleGrid>
        </Flex>
      )}
    </div>
  );
};

export default CityWeather;
