import { Map } from 'immutable';

export function generateMap( data, model ) {
  // debugger;
  return data.reduce((acc, item) => {
    //debugger;
    return acc.set(item.id, new model(item));
  }, Map()
  );
}

export function generateImmutable( data, model ) {
  return Object.keys(data).reduce( (acc, key) => {
    const item = data[key];
    return acc.set( item.id, new model(item) );
  }, Map()
  );
}

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