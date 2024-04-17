import React from 'react';
import { Heart ,HeartBK} from './Icons';
const LikeBtn = ({userId,like,listId,pressHeart}) => {

  return (
    <div >
     {like || pressHeart ? <HeartBK size={25}/> : <Heart size={25} />}
    </div>
  );
}

export default LikeBtn;
