import { configureStore } from '@reduxjs/toolkit';
import getPropertiesSlice from './reducers/getPropertiesSlice';
import authReducer from './reducers/authReducer';
const store = configureStore({
	reducer: {
		properties: getPropertiesSlice,
		user:authReducer,
	},
});
export default store;
