import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  likeList:null,
  error:"",
  loading:false,
  newLike:null,
  check:false,
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
      checkLike:(state,action)=>{
        state.check=action.payload
      }
     

  }

 })

 export const {updateLikeStatus,allRequest,getLikeList,allError,createSuccessItem,checkLike}=likeSlice.actions;
 export default likeSlice.reducer