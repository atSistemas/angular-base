import { Record } from 'immutable'

export interface ICoord {
  Lat: number
  Lon: number
}

export interface IMain {
  temp: number
  pressure: number
  humidity: number
}

export interface IStation {
  id: number
  coord: Record<ICoord>
  main: Record<IMain>
}

export const CoordModel = Record<ICoord>({
  Lat: 0,
  Lon: 0
})

export const MainModel = Record<IMain>({
  humidity: 0,
  pressure: 0,
  temp: 0
})

export const StationModel = Record<IStation>({
  coord: new CoordModel(),
  id: -1,
  main: new MainModel()
})
