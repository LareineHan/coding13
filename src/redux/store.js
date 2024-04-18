import { configureStore } from '@reduxjs/toolkit';
import getPropertiesSlice from './reducers/getPropertiesSlice';
import getMapMarkersSlice from './reducers/getMapMarkersSlice';
import getSearchPlaceSlice from './reducers/getSearchPlaceSlice';
import getUserLocationSlice from './reducers/getUserLocationSlice';

const store = configureStore({
	reducer: {
		properties: getPropertiesSlice,
		mapMarkers: getMapMarkersSlice,
		searchPlace: getSearchPlaceSlice,
		userLocation: getUserLocationSlice,
		showUserLocation: getUserLocationSlice,
	},
});
export default store;
