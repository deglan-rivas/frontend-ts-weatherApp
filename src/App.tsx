import { useState } from "react"
import WeatherDisplay from "./components/WeatherDisplay"
import WeatherForm from "./components/WeatherForm"
import { Search } from "./types"

function App() {
  const initialWeather: Search = {
    city: '',
    country: '',
  }
  const [weather, setWeather] = useState<Search>(initialWeather)

  const fetchWeather = async (search: Search): void => {
    const apiKey = import.meta.env.VITE_API_KEY

    try {
      const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&limit=1&appid=${apiKey}`
      const result = await fetch(geoUrl)
      const data = await result.json()
      console.log(data)
    } catch (error) {
      console.log("error")
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

      <div className="grid grid-cols-2">
        <WeatherForm
          fetchWeather={fetchWeather}
        />
        <WeatherDisplay />
      </div>
    </div>
  )
}

export default App
