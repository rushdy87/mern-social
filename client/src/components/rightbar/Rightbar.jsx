import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Rightbar.css';
import { Users } from '../../dummyData';
import { Online } from '../';

const Rightbar = ({ user }) => {
  const [friends, setfriends] = useState([]);

  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    if (user) {
      const getFriends = async () => {
        try {
          const res = await axios.get(`/api/users/friends/${user._id}`);
          setfriends(res.data);
        } catch (error) {
          console.log(error);
        }
      };
      getFriends();
    }
  }, [user]);

  const renderFrinds = friends.map((friend) => {
    return (
      <Link
        to={`/profile/${friend?.username}`}
        key={friend?._id}
        className="link"
      >
        <div className="rightbar-following">
          <img
            src={
              friend?.profilePicture ||
              `${publicFolder}person/blank-profile.png`
            }
            alt=""
            className="rightbar-following-image"
          />
          <span className="rightbar-following-username">
            {friend?.username}
          </span>
        </div>
      </Link>
    );
  });

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthday-container">
          <img
            src={`${publicFolder}gift.png`}
            alt=""
            className="birthday-image"
          />
          <span className="birthday-text">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src={`${publicFolder}ad.png`} alt="" className="rightbar-ad" />
        <h4 className="rightbar-title">Online Friends</h4>
        <ul className="rightbar-friend-list">{renderOnlineFriends}</ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbar-title">User Information</h4>
        <div className="rightbar-info">
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">City:</span>
            <span className="rightbar-info-value">{user?.city}</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">From:</span>
            <span className="rightbar-info-value">{user?.from}</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">Relationship:</span>
            <span className="rightbar-info-value">
              {user?.relationship === 1
                ? 'Single'
                : user?.relationship === 2
                ? 'Married'
                : ''}
            </span>
          </div>
        </div>
        <h4 className="rightbar-title">User friends</h4>
        <div className="rightbar-followings">{renderFrinds}</div>
      </>
    );
  };

  const renderOnlineFriends = Users.map((user) => {
    return <Online key={user.id} user={user} />;
  });

  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
