import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../utils/api';

let initialState = {
	properties: [],
	status: 'idle',
	error: null,
};

export const fetchProperties = createAsyncThunk(
	'properties/fetchProperties',
	async (params) => {
		// Accept params object
		try {
			const response = await api.get('/properties', {
				params: {
					...params, // Spread the params object here
					sort: 'default', // Default sort
				},
			});
			return response.data;
		} catch (error) {
			throw error;
		}
	}
);

const getPropertiesSlice = createSlice({
	name: 'properties',
	initialState,

	extraReducers: (builder) => {
		builder
			.addCase(fetchProperties.pending, (state) => {
				state.status = 'loading';
			})

			.addCase(fetchProperties.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.properties = action.payload;
			})
			.addCase(fetchProperties.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export default getPropertiesSlice.reducer;
export const getPropertiesAction = getPropertiesSlice.actions;
