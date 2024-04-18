import React from 'react';
import { useSelector } from 'react-redux';
const MyPage = () => {
  const{ userInfo }= useSelector(state => state.user);
 console.log(userInfo,'mypage')
  return (
    <div>
      <h3>{userInfo?.name}</h3>
    </div>
  );
}

export default MyPage;
