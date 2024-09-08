import { useState } from "react";
import SignupForm from "./signup";
import Loginform from "./login";

function Header({ onLoginStatusChange }) {
  const [login, setLogin] = useState(false);
  const [signform, Setsignform] = useState(false);
  const [logform, Setlogform] = useState(false);
  const [username, setUsername] = useState('');

  const signupClicked = () => {
    Setsignform((prevState) => !prevState);
    Setlogform(false);
  };

  const loginClicked = () => {
    Setlogform((prevState) => !prevState);
    Setsignform(false);
  };

  const handleLoginSuccess = (username) => {
    setUsername(username);
    setLogin(true);
    Setlogform(false);
    Setsignform(false);
    onLoginStatusChange(true);  // Notify parent component about login status
  };

  return (
    <>
      {signform && <SignupForm onSignupSuccess={handleLoginSuccess} />}
      {logform && <Loginform onLoginSuccess={handleLoginSuccess} />}

      <div className="head">
        <img className="logo" src="logo.svg" alt="" />

        {!login && <div className="home">
          <img src="home.svg" alt="" className="hm" />
          <p>Home</p>
        </div>}

        <div className="hotel">
          <img src="hotel.svg" alt="" className="hot" />
          <p>Hotel</p>
        </div>

        <div className="travel">
          <img src="plane.svg" alt="" className="tra" />
          <p>Travel</p>
        </div>

        <div className="food">
          <img src="food.svg" alt="" className="foo" />
          <p>Food</p>
        </div>
        
        <div className="logsi">
          {login ? (
            <button className="idlog">{username}</button>
          ) : (
            <>
              <button onClick={loginClicked}>
                <p>Login</p>
              </button>
              <button onClick={signupClicked}>
                <p>Signup</p>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
