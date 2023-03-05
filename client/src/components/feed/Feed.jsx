import { useState, useEffect } from 'react';
import axios from 'axios';
import './Feed.css';
import { Share, Post } from '../';

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = username
          ? await axios.get(`/api/posts/profile/${username}`)
          : await axios.get('/api/posts/timeline/6400135ff296042274225df1');
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, [username]);

  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share />
        {posts.map((post) => {
          return <Post key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
