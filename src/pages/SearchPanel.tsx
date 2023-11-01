import React, { useContext } from "react";
import background from "../assets/images/Cloud-background.png";
import { IconCurrentLocation, IconMapPinFilled,IconSunHigh,IconMoon } from "@tabler/icons-react";
import { Popover } from "@headlessui/react";
import Searcher from "../components/UI/Searcher";
import WeatherContext from "../context/Weather.Context";
import { setCurrentLocation } from "../services";
import Temperature from "../components/UI/Temparature";
import { weatherConditionsIcons } from "../components/UI/WeatherCard";


const SearchPanel = ({theme, setTheme}: any) => {
  const { weatherData, isMetric } = useContext(WeatherContext);
  const { setWeatherData,  setNextDaysWeatherData, locationRef } = useContext(WeatherContext);
 

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  
  return (
    <React.Fragment>
        <Popover className="relative ">
          <section className="dark:bg-gray-800 h-full relative overflow-hidden z-0 lg:min-w-[400px] bg-blue-600">
            <img
              src={background}
              alt=""
              className="absolute  top-16 lg:top-28 opacity-10 min-w-[160%] -z-10"
            />
            <div className=" flex flex-col">
              <div className="flex justify-between w-full p-5">
                <Popover.Button className="dark:bg-gray-500 bg-indigo-800 py-1.5 px-2 text-white outline-none" data-cy="search-bar-button">
                  Search for places
                </Popover.Button>
                <div className="flex space-x-2">
                  <div className="w-10 h-10 rounded-full dark:bg-gray-500 bg-indigo-800 flex justify-center items-center">
                    <IconCurrentLocation
                      className="text-white cursor-pointer"
                      onClick={() => {
                        setCurrentLocation({
                          locationRef,
                          setWeatherData,
                          isMetric,
                          setNextDaysWeatherData,
                        });
                      }}
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full dark:bg-gray-500 bg-indigo-800 flex justify-center items-center">
                    {theme === "light" ? (
                      <IconMoon
                        className="text-white cursor-pointer"
                        onClick={toggleTheme}
                      />
                    ) : (
                      <IconSunHigh
                        className="text-white cursor-pointer"
                        onClick={toggleTheme}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-10 lg:h-screen md:h-screen">
                <div>
                  {weatherData &&
                    weatherData.weather &&
                    weatherConditionsIcons[weatherData.weather[0].icon] && (
                      <img
                        src={
                          weatherConditionsIcons[weatherData.weather[0].icon][0]
                        }
                        alt=""
                        className="w-full"
                      />
                    )}
                </div>
                <div className="flex flex-col gap-5 text-white">
                  <div>
                    <p className="text-[5rem] lg:text-[6rem] md:text-[9rem]">
                      <Temperature value={weatherData?.main?.temp!} />
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-[3rem]">
                      {weatherData?.weather[0].main}
                    </p>
                  </div>
                  <div className="text-center flex justify-center items-center space-x-3">
                    <IconMapPinFilled size={32} />
                    <p className="text-[2rem]">{weatherData?.name}</p>
                  </div>
                </div>
              </div>
              {/* display he search bar */}
              <Searcher />               
            </div>            
          </section>
        </Popover>
    </React.Fragment>
  );
};

export default SearchPanel;
