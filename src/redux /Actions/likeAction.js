import { createSuccessItem,allRequest,allError,getLikeList } from '../reducers/likeReducer';
import apibk from '../../utils/apibk';

export const createLike =({userId,like,listId})=>async(dispatch)=>{
  try{
    dispatch(allRequest())
    const res = await apibk.post('/like',{userId,like,listId})
    if(res.status !==200)throw new Error('error-createLike')
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

export const deleteLikeItem=(itemId)=>async(dispatch)=>{
  try{
    const res = await apibk.delete(`/like/delete/${itemId}`)
    console.log(res.data.data,'deletedItem')

  }catch(error){
    console.log(error,'deleteLikeItem')
  }
}