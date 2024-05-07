import WeatherDisplay from "./components/WeatherDisplay"
import WeatherForm from "./components/WeatherForm"
import { Search } from "./types"

function App() {
  const fetchWeather = (search: Search): void => {
    console.log('fetching from weather api', search)
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
