import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

let initialState = {
	userLocation: '',
	showUserLocation: false,
	status: 'idle',
	toggleStatus: 'idle',
	error: null,
};

export const addUserLocation = createAsyncThunk(
	'userLocation/addUserLocation',
	async (data) => {
		return data;
	}
);
export const toggleShowUserLocation = createAsyncThunk(
	'userLocation/toggleShowUserLocation',
	async (data) => {
		return data;
	}
);

const getUserLocationSlice = createSlice({
	name: 'userLocation',
	initialState,

	extraReducers: (builder) => {
		builder
			.addCase(addUserLocation.pending, (state) => {
				state.status = 'loading';
				console.log('addUserLocation.pending', state.status);
			})
			.addCase(addUserLocation.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.userLocation = action.payload;
				console.log('addUserLocation.fulfilled', state.userLocation);
			})
			.addCase(addUserLocation.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
				console.log('addUserLocation.rejected', state.error);
			});
		builder
			.addCase(toggleShowUserLocation.pending, (state) => {
				state.toggleStatus = 'loading';
				console.log('toggleShowUserLocation.pending', state.status);
			})
			.addCase(toggleShowUserLocation.fulfilled, (state, action) => {
				state.toggleStatus = 'succeeded';
				state.showUserLocation = action.payload;
				console.log('toggleShowUserLocation.fulfilled', state.showUserLocation);
			})
			.addCase(toggleShowUserLocation.rejected, (state, action) => {
				state.toggleStatus = 'failed';
				state.error = action.error.message;
				console.log('toggleShowUserLocation.rejected', state.error);
			});
	},
});

export default getUserLocationSlice.reducer;
export const getUserLocationAction = getUserLocationSlice.actions;
