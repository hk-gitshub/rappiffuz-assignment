import UsersData from "./components/userData/UsersData";
import LoginPage from "./components/pages/LoginPage";
import Signup from "./components/pages/SigninPage";
import "./App.css";

import { useState } from "react";

function App() {
  const [input, setInput] = useState({ email: "", password: "" });
  const [loginStatus, setLoginStatus] = useState(false)
  const [loginOrSignUp, setLoginOrSignUp] = useState(false);


  return (
    <div className="App">
      <div>
        {loginStatus ? <UsersData setLoginStatus={setLoginStatus} />
          :
          <div className="container">
            <div className={!loginOrSignUp ? "slider-login" :"slider-signup"}></div>
            <div className="btn">
              <button className="login" onClick={()=>setLoginOrSignUp(false)}>Login</button>
              <button className="signup" onClick={()=>setLoginOrSignUp(true)}>Signup</button>
            </div>
            <div className="form-section">
              {!loginOrSignUp
                ?
                <LoginPage setLoginStatus={setLoginStatus} loginStatus={loginStatus} input={input} setInput={setInput} />
                :
                <Signup setLoginStatus={setLoginStatus} loginStatus={loginStatus} input={input} setInput={setInput} />
              }
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
