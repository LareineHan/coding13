import {createSuccessItem,allRequest,saveAllLike } from '../reducers/likeReducer';
import apibk from '../../utils/apibk';

export const createLike =({userId,like,listId})=>async(dispatch)=>{
  try{
    dispatch(allRequest())
    const res = await apibk.post('/like',{userId,like,listId})
    if(res.status !==200)throw new Error('error-createLike')
    console.log(res.data.data,'resLike')
    dispatch(createSuccessItem(res.data.data))
   dispatch(updateSavedLikes({userId,like,listId}))
  }catch(error){
   console.log(error,'createLike-error')
  }
}

export const showLikeList = (userId) => async (dispatch, getState) => {
  try {
    const res = await apibk.get(`/like/showAll/${userId}`);
    if (res.status !== 200) throw new Error('showLikeList-error');
    
    let serverLikes = res.data.data.filter(item => item.like === true);
    console.log(serverLikes, 'serverLikes')
serverLikes.map(item=>dispatch(updateSavedLikes(item)))
    
  } catch (error) {
    console.log(error, 'showLikeList-error');
  }
}



export const updateSavedLikes = (newLike) => (dispatch, getState) => {
  const currentLikes = getState().like.savedLike;

  // newLike가 이미 savedLike 배열에 있는지 확인
  if (!currentLikes.some(item => item.listId === newLike.listId && item.like===true)) {
    const updatedLikes = [...currentLikes, newLike];
    dispatch(saveAllLike(updatedLikes));
  }
}

