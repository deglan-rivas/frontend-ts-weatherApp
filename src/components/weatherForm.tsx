import { countries } from "../data/countries";


export default function WeatherForm() {

  return (
    <form className="px-5 col-span-2 md:col-span-1 py-4 space-y-5">
      <div className="space-y-4">
        <label
          htmlFor="city"
          className="text-white block text-xl"
        >
          Ciudad:
        </label>
        <input
          id="city"
          name="city"
          type="text"
          className="w-full px-2 py-2 bg-transparent border-2 text-white border-white rounded-md placeholder:text-gray-400"
          placeholder="Ciudad"
        />
      </div>

      <div className="space-y-4">
        <label
          htmlFor="country"
          className="text-white block text-xl"
        >
          País:
        </label>
        <select
          name="country"
          id="country"
          className="w-full bg-transparent border-2 border-white rounded-md text-white py-2 px-2"
        >
          <option value="" disabled className="bg-black">-- Seleccione un País --</option>
          {
            countries.map((country) => (
              <option
                key={country.code}
                value={country.code}
                className="bg-black"
              >
                {country.name}
              </option>
            ))
          }
        </select>
      </div>

      <input
        type="submit"
        value="Consultar Clima"
        className="w-full py-2 bg-orange-500 text-white font-semibold uppercase rounded-md"
      />
    </form>
  )
}