import { Record, Map } from 'immutable';

export interface Main {
  id?: number | string;
  name?: string;
};

export const MainModel = Record<Main>({
   id: 22, 
   name: 'Initial Name'
});



// export interface MainModel {
//   id?: number | string;
//   name?: string;
// };

// export interface MainState {
//   main: MainModel;
// }

// export const MainInitialState = <MainModel>
//   { id: 22, name: 'Initial Name' };