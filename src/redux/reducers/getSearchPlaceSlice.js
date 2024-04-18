import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

let initialState = {
	searchPlace: null,
	status: 'idle',
	error: null,
};

export const addSearchPlace = createAsyncThunk(
	'searchPlace/addSearchPlace',
	async (data) => {
		const searchResult = data;
		return searchResult;
	}
);

const getSearchPlaceSlice = createSlice({
	name: 'searchPlace',
	initialState,

	extraReducers: (builder) => {
		builder
			.addCase(addSearchPlace.pending, (state) => {
				state.status = 'loading';
				console.log('addSearchPlace.pending', state.status);
			})
			.addCase(addSearchPlace.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.searchPlace = action.payload;
				console.log('addSearchPlace.fulfilled', state.searchPlace);
			})
			.addCase(addSearchPlace.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
				console.log('addSearchPlace.rejected', state.error);
			});
	},
});

export default getSearchPlaceSlice.reducer;
export const getSearchPlaceAction = getSearchPlaceSlice.actions;
