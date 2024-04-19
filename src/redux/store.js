import { configureStore } from '@reduxjs/toolkit';
import getPropertiesSlice from './reducers/getPropertiesSlice';
import getMapMarkersSlice from './reducers/getMapMarkersSlice';
import authReducer from './reducers/authReducer';
import likeReducer from './reducers/likeReducer';
import getSearchPlaceSlice from './reducers/getSearchPlaceSlice';
import getUserLocationSlice from './reducers/getUserLocationSlice';
const store = configureStore({
	reducer: {
		properties: getPropertiesSlice,
		mapMarkers: getMapMarkersSlice,
		user: authReducer,
		like: likeReducer,
		searchPlace: getSearchPlaceSlice,
		userLocation: getUserLocationSlice,
		showUserLocation: getUserLocationSlice,
	},
});
export default store;
