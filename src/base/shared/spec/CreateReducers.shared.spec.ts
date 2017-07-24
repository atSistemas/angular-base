// import { expect } from 'chai';
// import { createReducer } from '../CreateReducer';
// import { ActionTypes } from '../../actions';
// import { Main, MainModel } from '../../models';
// // import { MainModel, MainInitialState } from '../../models';

// describe('shared / CreateReducer', () => {

//   describe('CreateReducer', () => {

//     it('should return type builder object', () => {

//       const login = (state, data) => { 
//         return state;
//       };

//       const success = (state, action) => {
//         return Object.assign({}, state, {payload: action.payload});
//       };
     
//       let actionHandlers = {
//         [ActionTypes.LOGIN]: login,
//         [ActionTypes.CLICK]: 'click',
//         [ActionTypes.MAIN_SUCCESS]: success
//       };
            
//       const MainReducer = createReducer<Main>(actionHandlers, MainModel);
      
//       let expectMainReducer = MainReducer(undefined, undefined);
//       let result = new MainModel();
//       expect(expectMainReducer).to.deep.equal(result);

//       expectMainReducer = MainReducer(1, undefined);
//       expect(expectMainReducer).to.deep.equal(result);

//       expectMainReducer = MainReducer({id:1, name:'First'}, {type:'LOGIN'})
//       result = new MainModel({id:1, name:'First'});
//       expect(expectMainReducer).to.deep.equal(result);

//       expectMainReducer = MainReducer({id:1, name:'First'}, {type:'CLICK'})
//       result = new MainModel({id:1, name:'First'});
//       expect(expectMainReducer).to.deep.equal(result);

//       expectMainReducer = MainReducer({id:2, name:'Second'}, {type:'MAIN_SUCCESS', payload: 500})
//       let result1 = {id:2, name:'Second', payload: 500};
//       expect(expectMainReducer).to.deep.equal(result1);
             
//     });

//   });
 
// });
