import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createLike,
  showLikeList,
  updateSavedLikes,
} from "../../redux/Actions/likeAction";
import { Alert, Button, Overlay, Tooltip } from "react-bootstrap";
import { Heart, HeartBK } from "./Icons";
import "./HeartBtn.css";
const LikeBtn = React.memo(({ listId }) => {
  const dispatch = useDispatch();
  const userId = sessionStorage.getItem("userId");
  const [showAlert, setShowAlert] = useState(false);
  const [like, setLike] = useState(false);
  const target = useRef(null);
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
      setShowAlert(!showAlert);
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
  console.log(target, "target");
  return (
    <>
      <div ref={target} onClick={() => handleLikeClick()}>
        {/* {showAlert && <Alert>Please try to login first!</Alert>} */}
        {!like ? (
          <span>
            <Heart size={20} />{" "}
          </span>
        ) : (
          <span>
            <HeartBK size={20} />
          </span>
        )}
      </div>
      <Overlay target={target.current} show={showAlert} placement="bottom">
        {(props) => (
          <Tooltip id="overlay-example" {...props} className="tooltip">
            Please try to Login First!
          </Tooltip>
        )}
      </Overlay>
    </>
  );
});

export default LikeBtn;
