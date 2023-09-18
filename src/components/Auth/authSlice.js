import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { registerAgency } from './authAPI';


const initialState = {
    agency: null,
    status: 'idle',
  };
  
  
  export const registerAgencyAsync = createAsyncThunk(
    'agency/registerAgency',
    async (agencyData) => {
      const response = await registerAgency(agencyData);
      return response.data;
    }
  );


  export const authSlice = createSlice({
    name: 'agency',
    initialState,
    reducers: {
      increment: (state) => {
        state.value += 1;
      },
     
    },
    
    extraReducers: (builder) => {
      builder
        .addCase(registerAgencyAsync.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(registerAgencyAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.agency = action.payload;
          }) ;
    },
  });
  

  export default authSlice.reducer;
