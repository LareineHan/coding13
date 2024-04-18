import { createSlice } from '@reduxjs/toolkit';
const initialState = {
 userInfo:null,
 error:"",
 loading:false

}

const authSlice=createSlice({
  name:'auth',
  initialState,
  reducers:{
   allRequest(state,action){
   state.userInfo=null;
   state.loading=true;
   state.error=""

   },
    loginSuccess:(state,action)=>{
      state.loading=false;
      state.userInfo=action.payload
    },
    allError(state,action){
      state.error=action.payload
    }
  
  }
})

export const { loginSuccess , allRequest , allError} = authSlice.actions; 
export default authSlice.reducer


