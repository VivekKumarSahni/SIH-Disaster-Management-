import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { checkAgency, checkUser, registerAgency, signOut } from './authAPI';


const initialState = {
    loggedInUser:null,
    loggedInAgency:null,
    status: 'idle',
    error:null,
  };
  
  
  export const registerAgencyAsync = createAsyncThunk(
    'agency/registerAgency',
    async (agencyData) => {
      const response = await registerAgency(agencyData);
      const { token } = response.data;

      // Store the token in localStorage
      localStorage.setItem('token', token);
      return response.data;
    }
  );



  export const checkUserAsync = createAsyncThunk(
    'user/checkUser',
    async (loginInfo, {rejectWithValue}) => {
     try{
      const response = await checkUser(loginInfo);
      return response.data;
      const { token } = response.data;

      // Store the token in localStorage
      localStorage.setItem('token', token);
     }catch(err){
        console.log(err);
        return rejectWithValue(err)
     }
  
    }
  );

  export const checkAgencyAsync = createAsyncThunk(
    'agency/checkAgency',
    async (loginInfo, {rejectWithValue}) => {
     try{
      const response = await checkAgency(loginInfo);
      return response.data;
      const { token } = response.data;

      // Store the token in localStorage
      localStorage.setItem('token', token);
     }catch(err){
        console.log(err);
        return rejectWithValue(err)
     }
  
    }
  );
  
  export const signOutAsync = createAsyncThunk(
    'agency/signOut',
    async () => {
      const response = await signOut();
      // The value we return becomes the `fulfilled` action payload
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
          // register
        .addCase(registerAgencyAsync.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(registerAgencyAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.loggedInAgency = action.payload;
          })
          // checkUser
          .addCase(checkUserAsync.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(checkUserAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.loggedInUser = action.payload;
          })
          .addCase(checkUserAsync.rejected, (state, action) => {
            state.status = 'idle';
            state.error = action.payload;
          })
          // checkAgency
          .addCase(checkAgencyAsync.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(checkAgencyAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.loggedInAgency = action.payload;
          })
          .addCase(checkAgencyAsync.rejected, (state, action) => {
            state.status = 'idle';
            state.error = action.payload;
          })
          // sign-out
          .addCase(signOutAsync.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(signOutAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.loggedInUser = null;
            state.loggedInAgency=null;
            state.agency = null
          })
    },
  });

  
export const selectloggedInUser = (state) => state.auth.loggedInUser;
export const selectloggedInAgency = (state) => state.auth.loggedInAgency;
export const selectError = (state) => state.auth.error;
  

  export default authSlice.reducer;
