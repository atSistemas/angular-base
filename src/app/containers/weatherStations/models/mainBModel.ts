import { Record } from 'immutable';

export interface MainB {
  id?: number | string;
  name?: string;
};

export const MainBModel = Record<MainB>({
   id: 22, 
   name: 'Initial Name'
});

// export const MainBModelInitialState = new MainBModel();


// export const MainBModel = <MainB>{
//    id: 22, 
//    name: 'Initial Name'
// };

// export const MainBModelInitialState = <MainB>{
//    id: 22, 
//    name: 'Initial Name'
// };






// export interface MainModel {
//   id?: number | string;
//   name?: string;
// };

// export interface MainState {
//   main: MainModel;
// }

// export const MainInitialState = <MainModel>
//   { id: 22, name: 'Initial Name' };