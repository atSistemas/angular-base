import { Record } from 'immutable'

export interface ITemp {
  day: number
  min: number
  max: number
  night: number
  eve: number
  morn: number
}

export interface IForecast {
  dt: number
  temp: Record<ITemp>
}

export const TempModel = Record<ITemp>({
  day: 0,
  eve: 0,
  max: 0,
  min: 0,
  morn: 0,
  night: 0
})

export const ForecastModel = Record<IForecast>({
  dt: 0,
  temp: new TempModel()
})
