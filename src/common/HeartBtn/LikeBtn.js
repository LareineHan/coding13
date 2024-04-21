import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createLike,
  showLikeList,
  updateSavedLikes,
} from "../../redux/Actions/likeAction";
import Alert from "react-bootstrap/Alert";
import { Heart, HeartBK } from "./Icons";

const LikeBtn = React.memo(({ listId }) => {
  const dispatch = useDispatch();
  const userId = sessionStorage.getItem("userId");
  const [showAlert, setShowAlert] = useState(false);
  const [like, setLike] = useState(false);

  const savedLike = useSelector((state) => state.like.savedLike) || {
    savedLike: [],
  };
  console.log(savedLike, "savedLike");
  useEffect(() => {
    const fetchLikeList = async () => {
      if (userId) {
        await dispatch(showLikeList(userId));
      }
    };

    fetchLikeList();
  }, [userId]);

  useEffect(() => {
    const isLiked = savedLike.some((item) => item.listId === listId);
    setLike(isLiked);
  }, [savedLike, listId]);

  const handleLikeClick = async () => {
    if (!userId) {
      setShowAlert(true);
      return;
    }

    await handleSaveClick();
  };

  const handleSaveClick = async () => {
    const newLikeStatus = !like;
    await dispatch(createLike({ userId, like: newLikeStatus, listId }));
    dispatch(updateSavedLikes({ userId, like: newLikeStatus, listId }));
    setLike(newLikeStatus);
  };

  return (
    <div className="likeBtn" onClick={handleLikeClick}>
      {showAlert && <Alert>Please try to login first!</Alert>}
      {!like ? (
        <Heart size={20} color="#4C4E5D" />
      ) : (
        <HeartBK size={20} color="#4C4E5D" />
      )}
    </div>
  );
});

export default LikeBtn;
