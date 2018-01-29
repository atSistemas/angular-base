export const OWM_API_URL = 'http://api.openweathermap.org/data/2.5';
export const OWM_API_KEY = '3cc68ed2bf53673eaf25aae12fb16469';

export const OWM_API_FORECAST = (lat: number, lon: number): string => (
  createURL(`/forecast/daily?lat=${ lat }&lon=${ lon }&cnt=8&lang=es&units=metric`)
);
export const OWM_API_STATION = () => (
  createURL('/box/city?bbox=-9,36.6,2.22,43,10')
);

const createURL = (method: string): string => (
  OWM_API_URL + method + `&appid=${ OWM_API_KEY }`
);