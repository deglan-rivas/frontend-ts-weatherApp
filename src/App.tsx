import WeatherForm from "./components/weatherForm"

function App() {

  return (
    <div className="min-h-screen bg-[url(/bg_clima.jpg)]">
      <div className="container mx-auto">
        <h1 className="font-semibold py-10 text-3xl text-white text-center">
          Buscador de Clima
        </h1>
      </div>

      <div className="grid grid-cols-2">
        <WeatherForm />
      </div>
    </div>
  )
}

export default App
