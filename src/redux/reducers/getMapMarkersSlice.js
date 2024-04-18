import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

let initialState = {
	markers: [],
	status: 'idle',
	loading: true,
	error: null,
};

export const addMapMarkers = createAsyncThunk(
	'mapMarkers/addMapMarkers',
	async (data) => {
		const propertiesData = data;
		console.log('addMapMarkers', propertiesData);
		const markers = propertiesData?.map((property) => [
			{ lat: property.address.latitude, lng: property.address.longitude },
			property.name,
		]);
		return markers;
	}
);

const getMapMarkersSlice = createSlice({
	name: 'mapMarkers',
	initialState,

	extraReducers: (builder) => {
		builder
			.addCase(addMapMarkers.pending, (state) => {
				state.status = 'loading';
				state.loading = true;
				console.log('addMapMarkers.pending', state.status);
			})

			.addCase(addMapMarkers.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.loading = false;
				state.markers = action.payload;
				console.log('addMapMarkers.fulfilled', state.markers);
			})
			.addCase(addMapMarkers.rejected, (state, action) => {
				state.status = 'failed';
				state.loading = false;
				state.error = action.error.message;
				console.log('addMapMarkers.rejected', state.error);
			});
	},
});

export default getMapMarkersSlice.reducer;
export const getMapMarkersAction = getMapMarkersSlice.actions;
