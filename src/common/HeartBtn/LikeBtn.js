import React, { useState, useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { createLike, showLikeList} from '../../redux/Actions/likeAction';
import Alert from 'react-bootstrap/Alert';
import { Heart,HeartBK } from './Icons';
const LikeBtn = React.memo(({listId}) => {
  const dispatch = useDispatch();
  const userId = sessionStorage.getItem("userId");
  const [showAlert, setShowAlert] = useState(false);
  const [like,setLike]=useState(false)
 const likeList=useSelector(state=>state.like.likeList)

  useEffect(() => {
    const fetchLikeList = async () => {
      if (userId) {
        await dispatch(showLikeList(userId));
      }
    };

    fetchLikeList();
  }, [userId, dispatch]);

 useEffect(()=>{
  const result=likeList?.some(item=>item.listId===listId );
  setLike(result)
  
  console.log(result,'result')

 },[listId,likeList])



  const handleLikeClick = async () => {
   
    if (!userId) {
      setShowAlert(true);
      return;
    }
   
  await handleSaveClick ();
  };
  
  const handleSaveClick = async () => {
    console.log(listId, 'listId');
    const newLikeStatus = !like;
    await dispatch(createLike({ userId, like: newLikeStatus, listId }));
       setLike(newLikeStatus);
    
 };
 
  return (
    <div onClick={handleLikeClick}>
      {showAlert && <Alert>Please try to login first!</Alert>}
      {like ? <HeartBK size={20}/> : <Heart size={20}/>}
    </div>
  );
});

export default LikeBtn;

