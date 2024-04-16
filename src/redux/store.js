import { configureStore } from '@reduxjs/toolkit';
import getPropertiesSlice from './reducers/getPropertiesSlice';
import getMapMarkersSlice from './reducers/getMapMarkersSlice';

const store = configureStore({
	reducer: {
		properties: getPropertiesSlice,
		mapMarkers: getMapMarkersSlice,
	},
});
export default store;
