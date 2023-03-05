import { Topbar, Sidebar, Feed, Rightbar } from '../../components';
import './Profile.css';

const Profile = () => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <Topbar />
      <div className="profile-container">
        <Sidebar />
        <div className="profile-right">
          <div className="profile-right-top">
            <div className="profile-cover">
              <img
                src={`${publicFolder}post/1.jpeg`}
                alt=""
                className="profile-cover-image"
              />
              <img
                src={`${publicFolder}person/1.jpeg`}
                alt=""
                className="profile-user-image"
              />
            </div>
            <div className="profile-info">
              <h4 className="profile-info-name">Safak Kocaoglu</h4>
              <span className="profile-info-desc">Hello my to my world</span>
            </div>
          </div>
          <div className="profile-right-bottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
