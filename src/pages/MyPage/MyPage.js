import React ,{useEffect,useState}from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { showLikeList } from '../../redux/Actions/likeAction';
import ListingCardItem from '../../common/ListingCard/ListingCardItem/ListingCardItem';
import { Container,Row,Col } from 'react-bootstrap';
import { useGetPropertiesQuery } from '../../hooks/useGetProperties';
import './MyPage.css'
import { Heart } from '../../common/HeartBtn/Icons';
import { Link } from 'react-router-dom';
import { responsive } from '../../utils/responsive';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slide from './Silde';
const MyPage = () => {
  const userId = sessionStorage.getItem('userId');
  const name= sessionStorage.getItem('name');
  const {savedLike} = useSelector(state => state.like);
  const userLocation = useSelector((state) => state.userLocation.userLocation);
  const searchParams = {
    location: userLocation || "New York",
    minRent: "1000",
    maxRent: "8000",
    page: "1",
    sort: "default",
    // Add other params here
  };
  const { data, isLoading, isError } = useGetPropertiesQuery(searchParams);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showLikeList(userId));
  }, [dispatch,userId]);
 

  if(isLoading) return <h1>Loading...</h1>
  if(isError) return <h1>Error...</h1>
  if (!data || data.length === 0) {
    return null;
  }
  
 
  return (
    <Container style={{marginTop:'100px'}}>
    <h2 className='MyPage_name' >{name?.toUpperCase()}'s PAGE</h2>
    <h3 className='MyPage_title'>My Favorit List</h3>
   
    {savedLike.length===0 
    && 
    <div className='empty'>

    <Heart size={100}/>
    <h5>좋아요 누르신 아이템이 없습니다.</h5>
    <Link className='MyPage_link' to='/'> Home </Link>

    <div  style={{display:'flex',flexDirection:'row'}}>
   
    </div>
    </div>
    }
    
   
      <Row style={{marginTop:'20px'}} >
        {savedLike?.map((item) => (
       
          <Col className='MyPage-card' key={item.listId} xs={12} md={6} lg={4}>
         
            <ListingCardItem id={item.listId} />
          </Col>
        ))}
      </Row>
      <h2 className='recom'>Prime listings</h2>
      <Slide data={data.data} />
      
    </Container>
  );
}

export default MyPage;
