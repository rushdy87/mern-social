import './Register.css';

const Register = () => {
  return (
    <div className="register">
      <div className="register-wrapper">
        <div className="register-left">
          <h3 className="register-logo">SOCAIL</h3>
          <span className="register-desc">
            a social networking site that makes it easy for you to connect and
            share with family and friends online
          </span>
        </div>
        <div className="register-right">
          <div className="register-box">
            <input
              type="text"
              placeholder="Username"
              className="register-input"
            />
            <input
              type="email"
              placeholder="Email"
              className="register-input"
            />
            <input
              type="password"
              placeholder="Password"
              className="register-input"
            />
            <input
              type="password"
              placeholder="Password Again"
              className="register-input"
            />

            <button className="register-button">Sign Up</button>

            <button className="register-login-button">
              Login to your account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
