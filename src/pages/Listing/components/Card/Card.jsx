import React ,{useState}from 'react';
import LikeBtn from '../../../../common/HeartBtn/LikeBtn';
import { useSelector } from 'react-redux';
const Card = ({itemId,rentRange,bedRange,address,zipCode,lat,lon}) => {
	const userId = sessionStorage.getItem("userId")
	const [pressHeart,setPressHeart]=useState(false)
	
	return (
		<ul>
			<li>{rentRange}</li>
			<li>{bedRange}</li>
			<li>{address}</li>
			<li>{zipCode}</li>
			<li>{lat}</li>
			<li>{lon}</li>
			<li onClick={()=>setPressHeart(!pressHeart)}>
				<LikeBtn userId={userId} like={false} listId={itemId} pressHeart={pressHeart}/>
			</li>
		</ul>
	);
}

export default Card;

