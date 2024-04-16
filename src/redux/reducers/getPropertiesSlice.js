import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../utils/api";

let initialState = {
  properties: [],
  detailProperty: null,
  isLoading: false,
  status: "idle",
  error: null,
};

export const fetchProperties = createAsyncThunk(
  "properties/fetchProperties",
  async (params) => {
    // Accept params object
    try {
      const response = await api.get("/properties", {
        params: {
          ...params, // Spread the params object here
          sort: "default", // Default sort
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchDetailProperty = createAsyncThunk(
  "properties/fetchDetailProperty",
  async (id, thunkAPI) => {
    try {
      console.log("Fetching detail property with ID:", id);
      const url = `/properties/${id}`;
      const response = await api.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const getPropertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = "succeeded";
        state.properties = action.payload;
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchDetailProperty.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDetailProperty.fulfilled, (state, action) => {
        state.isLoading = false;
        state.detailProperty = action.payload;
        console.log("detail product", action.payload);
      })
      .addCase(fetchDetailProperty.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default getPropertiesSlice.reducer;
export const getPropertiesAction = getPropertiesSlice.actions;
