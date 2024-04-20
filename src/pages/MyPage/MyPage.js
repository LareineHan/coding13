import React ,{useEffect}from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { showLikeList } from '../../redux/Actions/likeAction';
import ListingCardItem from '../../common/ListingCard/ListingCardItem/ListingCardItem';
import { Container,Row,Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CopyUrlBtn } from '../../common/ShareBtn/ShareBtn';
import './MyPage.css'
const MyPage = () => {
  const userId = sessionStorage.getItem('userId');
  const name= sessionStorage.getItem('name');
  const {savedLike} = useSelector(state => state.like);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(showLikeList(userId));
  }, [dispatch,userId]);
  const goToDetailPage=(id)=>{
    try{
      return navigate(`/properties/${id}`);
    }catch(error){
      console.log(error,'goToDetailPage-error')
    }
  }
  
 
  return (
    <Container style={{marginTop:'100px'}}>
    <h2 className='MyPage_name' >{name?.toUpperCase()}'s PAGE</h2>
    <h3 className='MyPage_title'>My Favorit List</h3>
    <CopyUrlBtn/>
    {savedLike.length===0 && <h5>There is no saved list</h5>}
   
      <Row style={{marginTop:'20px'}} >
        {savedLike?.map((item) => (
       
          <Col className='MyPage-card' key={item.listId} xs={12} md={6} lg={4}>
         
            <ListingCardItem id={item.listId} />
          </Col>
        ))}
      </Row>
      
      
    </Container>
  );
}

export default MyPage;
