import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import userListReducer from './user.reducer';

const allReducers = combineReducers ({
   auth: authReducer,
   userList: userListReducer
}) 

export default allReducers;