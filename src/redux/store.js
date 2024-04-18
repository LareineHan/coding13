import { configureStore } from '@reduxjs/toolkit';
import getPropertiesSlice from './reducers/getPropertiesSlice';
import getMapMarkersSlice from './reducers/getMapMarkersSlice';
import getSearchPlaceSlice from './reducers/getSearchPlaceSlice';

const store = configureStore({
	reducer: {
		properties: getPropertiesSlice,
		mapMarkers: getMapMarkersSlice,
		searchPlace: getSearchPlaceSlice,
	},
});
export default store;
