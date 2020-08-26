import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
          <div className="enter">
            <h1>Log in</h1>
            <form className="form-login" noValidate>
              <div className="enter__login">
                <label htmlFor="username" className="enter__label">Login</label>
                <input type="text" className="enter__input" name="username" placeholder="login" noValidate/>
              </div>
              <div className="enter__password">
                <label htmlFor="password" className="enter__label">Password</label>
                <input type="password" className="enter__input" name="password" placeholder="password" noValidate/>
              </div>
              <div className="enter__button">
                <button type="submit" className="enter__btn">Sign up</button>
              </div>
            </form>
          </div>
      </div>
    </div>
  );
}

export default App;
