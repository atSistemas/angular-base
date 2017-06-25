import { Record } from 'immutable';

export interface LazyModel{
  lazy?: String;
};

export interface LazyState {
  Lazy: LazyModel;
}

export const LazyInitialState =  Record<LazyModel>({
  lazy: 'Lazy view!'
});



// import { TypedRecord } from 'typed-immutable-record';
// import { makeTypedFactory } from 'typed-immutable-record';

// export interface LazyModel {
//   lazy: String;
// };

// export interface LazyState extends TypedRecord<LazyState>,
//   LazyModel {
// };

// const LazyModelFactory = makeTypedFactory<LazyModel, LazyState>({
//   lazy: 'Lazy view!',
// });

// export const LazyInitialState = LazyModelFactory();