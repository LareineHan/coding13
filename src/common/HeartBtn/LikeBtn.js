import React, { useState, useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { createLike, deleteLikeItem } from '../../redux/Actions/likeAction';
import Alert from 'react-bootstrap/Alert';
import { Heart,HeartBK } from './Icons';
const LikeBtn = React.memo(({ likeList, listId, pressHeart }) => {
  const dispatch = useDispatch();
  const userId = sessionStorage.getItem("userId");
  const [showAlert, setShowAlert] = useState(!userId);
 
  console.log(likeList,'check')
  const [like,setLike]=useState(false)
  // 로그인 상태가 변경될 때만 showAlert 상태 업데이트
 useEffect(()=>{
  const result=likeList?.some(item=>item.listId===listId);
  setLike(result)
  console.log(result,'result')

 },[likeList,listId])

  useEffect(() => {
    setShowAlert(!userId);
  }, [userId]);

  const handleLikeClick = () => {
    const result=likeList?.some(item=>item.listId===listId);
    if (!result) {
      dispatch(createLike({ userId, like: true, listId }));
    } 
    if(result) {
      dispatch(deleteLikeItem({userId,listId}));
    }
   
  };

  return (
    <div onClick={()=>handleLikeClick()}>
      {showAlert && <Alert>Please try to login first!</Alert>}
      {like || pressHeart? <HeartBK size={30}/> : <Heart size={30}/>}
    </div>
  );
});

export default LikeBtn;

