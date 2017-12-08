import { Map } from 'immutable';

export function generateMap( data: any, model: any ) {
  // debugger;
  return data.reduce((acc, item) => {
    //debugger;
    return acc.set(item.id, new model(item));
  }, Map()
  );
}

export const generateImmutable = (data: any, Model: any) => (
  Object.keys(data).reduce((acc: Map<any, any>, key: any) => (
    acc.set(data[key].id, new Model(data[key]))
  ), Map<any, any>())
);

// import { Map } from 'immutable';

// export function generateMap( data, model ){
//   return data.reduce((acc, item) => {
//     return acc.set(item.id, new model(item));
//   }, new Map()
//   );
// }

// export function generateImmutable( data, model ){
//   return Object.keys(data).reduce( (acc, key) => {
//     let item = data[key];
//     return acc.set( item.id, new model(item) );
//   }, new Map()
//   );
// }