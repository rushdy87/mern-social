import { useState, useEffect } from 'react';
import { MoreVert } from '@mui/icons-material';
import axios from 'axios';
import './Post.css';

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState(null);

  const { desc, img, date, userId, comment } = post;

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get(`/api/users/${userId}`);
      setUser(data);
    };
    fetchUser();
  }, [userId]);

  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img
              src={publicFolder + user?.profilePicture}
              alt=""
              className="post-profile-image"
            />
            <span className="post-username">{user?.username}</span>
            <span className="post-date">{date}</span>
          </div>
          <div className="post-top-right">
            <MoreVert />
          </div>
        </div>
        <div className="post-center">
          {desc && <span className="post-text">{desc}</span>}
          <img src={img} alt="" className="post-image" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            <img
              className="like-icon"
              src={`${publicFolder}like.png`}
              onClick={likeHandler}
              alt=""
            />
            <img
              className="like-icon"
              src={`${publicFolder}heart.png`}
              onClick={likeHandler}
              alt=""
            />
            <span className="post-like-counter">{like} people like it</span>
          </div>
          <div className="post-bottom-right">
            <span className="post-comment-text">{comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
