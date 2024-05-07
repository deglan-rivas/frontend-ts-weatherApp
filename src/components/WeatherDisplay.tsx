import type { Weather } from "../App";
import { convertKelvinToCelsius } from "../utils";
import Error from "./Error";

interface WeatherDisplayProps {
  weather: Weather
  errors: string
}

export default function WeatherDisplay({ weather, errors }: WeatherDisplayProps) {
  return (
    <>
      {
        errors ? (
          <Error> {errors}</Error >
        ) : (
          <div className="bg-white px-8 py-8 col-span-2 md:col-span-1 mx-5 rounded-md space-y-6 flex flex-col justify-center items-center">
            <p className="font-semibold text-3xl text-center">
              Clima de {weather.name}
            </p>
            <p className="font-bold text-7xl text-center">
              {convertKelvinToCelsius(weather.main.temp)}&deg;C
            </p>
            <div className="flex justify-center gap-10">
              <p className="font-semibold text-xl">
                Min:
                <span className="font-normal">
                  {convertKelvinToCelsius(weather.main.temp_min)}&deg;C
                </span>
              </p>
              <p className="font-semibold text-xl">
                Max:
                <span className="font-normal">
                  {convertKelvinToCelsius(weather.main.temp_max)}&deg;C
                </span>
              </p>
            </div>
          </div >
        )
      }
    </>

  )
}