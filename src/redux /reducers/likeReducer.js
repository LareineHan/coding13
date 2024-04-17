import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  likeList:null,
  error:"",
  loading:false,
  newLike:null,
 }

 const likeSlice = createSlice({
  name:'like',
  initialState,
  reducers:{
    allRequest(state,action){
      state.likeList=null;
      state.loading=true;
      state.error=""
      
   
      },
      getLikeList:(state,action)=>{
        state.loading=false;
        state.likeList=action.payload;
        state.error=""
      },
      allError(state,action){
        state.error=action.payload;
      },
      createSuccessItem:(state,action)=>{
        state.loading=false;
        state.newLike = action.payload;
      },
      

  }

 })

 export const {allRequest,getLikeList,allError,createSuccessItem}=likeSlice.actions;
 export default likeSlice.reducer