import { Record } from 'immutable';

export interface Coord {
  Lat: number;
  Lon: number;
}

export interface Main {
  temp: number;
  pressure: number;
  humidity: number;
}

export interface Station {
  id: number;
  coord: Record<Coord>;
  main: Record<Main>;
}

export const CoordModel = Record<Coord>({
  Lat: 0,
  Lon: 0
});

export const MainModel = Record<Main>({
  temp: 0,
  humidity: 0,
  pressure: 0
});

export const StationModel = Record<Station>({
  id: -1,
  coord: new CoordModel(),
  main: new MainModel()
});
