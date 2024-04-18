import {createSuccessItem,allRequest,allError,getLikeList ,checkLike } from '../reducers/likeReducer';
import apibk from '../../utils/apibk';

export const createLike =({userId,like,listId})=>async(dispatch)=>{
  try{
    dispatch(allRequest())
    const res = await apibk.post('/like',{userId,like,listId})
    if(res.status !==200)throw new Error('error-createLike')
    console.log(userId,like,listId,'resLike')
    dispatch(createSuccessItem(res.data.data))
   
  }catch(error){
   console.log(error,'createLike-error')
  }
}

export const showLikeList=(userId)=>async(dispatch)=>{
  try{
    const res = await apibk.get(`/like/showAll/${userId}`)
    if(res.status !==200)throw new Error('showLikeList-error')
    dispatch(getLikeList(res.data.data))
  }catch(error){
    console.log(error,'showLikeList-error')
  }
}

export const checkLikeItem = (userId, listId) => async (dispatch) => {
  try {
    
    const res = await apibk.get(`/like/showAll/${userId}`);
    const list = res.data.data;
    const isLiked = list.some(item => item.listId === listId);
    console.log(isLiked,'actionIsLiked')
    dispatch(checkLike(isLiked));
  } catch (error) {
    console.error('checkLikeItem error', error);
  }
}


export const deleteLikeItem=({userId,listId})=>async(dispatch)=>{
  try{
    const res = await apibk.delete(`/like/delete/${userId}/${listId}`)
    console.log(res.data.data,'deletedItem')

  }catch(error){
    console.log(error,'deleteLikeItem')
  }
}