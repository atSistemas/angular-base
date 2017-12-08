import { Weather } from "../../weather/models";
import { WeatherStation } from "../../weather/models/WeatherStationModel";


export const selectStationSelected = (state: Weather): number => (
  state.stationSelected
)