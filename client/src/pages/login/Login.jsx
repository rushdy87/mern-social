import './Login.css';

const Login = () => {
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo">SOCAIL</h3>
          <span className="login-desc">
            a social networking site that makes it easy for you to connect and
            share with family and friends online
          </span>
        </div>
        <div className="login-right">
          <div className="login-box">
            <input type="email" className="login-input" placeholder="Email" />
            <input
              type="password"
              className="login-input"
              placeholder="Password"
            />
            <button className="login-button">Log In</button>
            <span className="login-forgot">Forgot Password?</span>
            <button className="login-register-button">
              Create a new account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
