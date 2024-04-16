import { configureStore } from '@reduxjs/toolkit';
import getPropertiesSlice from './reducers/getPropertiesSlice';

const store = configureStore({
	reducer: {
		properties: getPropertiesSlice,
	},
});
export default store;
