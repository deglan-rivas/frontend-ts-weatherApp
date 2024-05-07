import type { Weather } from "../App"

interface WeatherDisplayProps {
  weather: Weather
}

export default function WeatherDisplay({ weather }: WeatherDisplayProps) {
  return (
    <div className="bg-white px-8 py-8 col-span-2 md:col-span-1 mx-5 rounded-md space-y-6">
      <p className="font-semibold text-3xl text-center">
        Clima de {weather.name}
      </p>
      <p className="font-bold text-7xl text-center">
        {weather.main.temp}&deg;C
      </p>
      <div className="flex justify-center gap-10">
        <p className="font-semibold text-xl">
          Min:
          <span className="font-normal">
            {weather.main.temp_min}&deg;C
          </span>
        </p>
        <p className="font-semibold text-xl">
          {weather.main.temp_max}:
          <span className="font-normal">
            10&deg;C
          </span>
        </p>
      </div>
    </div >
  )
}