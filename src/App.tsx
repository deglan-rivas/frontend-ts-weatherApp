import { useState } from "react"
import { z } from "zod"
import WeatherDisplay from "./components/WeatherDisplay"
import WeatherForm from "./components/WeatherForm"
import { Search } from "./types"

const GeoDataSchema = z.object({
  lat: z.number(),
  lon: z.number()
})
type GeoData = z.infer<typeof GeoDataSchema>

const WeatherSchema = z.object({
  name: z.string(),
  main: z.object({
    temp: z.number(),
    temp_max: z.number(),
    temp_min: z.number(),
  }),
})
export type Weather = z.infer<typeof WeatherSchema>

function App() {
  const initialWeather: Weather = {
    name: '',
    main: {
      temp: 0,
      temp_max: 0,
      temp_min: 0
    }
  }
  const [weather, setWeather] = useState<Weather>(initialWeather)
  const [errors, setErrors] = useState('')

  const fetchWeather = async (search: Search): void => {
    const apiKey = import.meta.env.VITE_API_KEY
    setErrors('')

    try {
      const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&limit=1&appid=${apiKey}`
      const result = await fetch(geoUrl)
      const data: GeoData[] = await result.json()
      const hasGeoData = GeoDataSchema.safeParse(data[0])
      // console.log(data)
      // console.log(hasGeoData)
      if (!hasGeoData.success) {
        setErrors("City and country not found")
        throw new Error("City and country not found")
      }

      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${hasGeoData.data.lat}&lon=${hasGeoData.data.lon}&appid=${apiKey}`
      const weatherResult = await fetch(weatherUrl)
      const weatherData = await weatherResult.json()
      const hasWeatherData = WeatherSchema.safeParse(weatherData)
      console.log(weatherData)
      console.log(hasWeatherData)
      if (!hasWeatherData.success) {
        setErrors("Latitude and longitude not found")
        throw new Error("Latitude and longitude not found")
      }
      setWeather(hasWeatherData.data)

    } catch (error) {
      console.log(error)
    } finally {
      console.log("finally")
    }
  }

  return (
    <div className="min-h-screen bg-[url(/bg_clima.jpg)]">
      <div className="container mx-auto">
        <h1 className="font-semibold py-10 text-3xl text-white text-center">
          Buscador de Clima
        </h1>
      </div>

      <div className="grid grid-cols-2 container mx-auto">
        <WeatherForm
          fetchWeather={fetchWeather}
        />
        <WeatherDisplay
          weather={weather}
        />
      </div>
    </div>
  )
}

export default App
