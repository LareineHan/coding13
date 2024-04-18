import { configureStore } from '@reduxjs/toolkit';
import getPropertiesSlice from './reducers/getPropertiesSlice';
import getMapMarkersSlice from './reducers/getMapMarkersSlice';
import authReducer from './reducers/authReducer';
import likeReducer from './reducers/likeReducer';
const store = configureStore({
	reducer: {
		properties: getPropertiesSlice,
		mapMarkers: getMapMarkersSlice,
		user:authReducer,
		like:likeReducer,
	},
});
export default store;
