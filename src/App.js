import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

// UseEffect - run our code once at the beginning of the application 
// useEffect(() => { }, []);


// Forward the user to github login screen (we pass in the client ID)
// User in now on the github side and logs in (github/login)
// When user decides to login they get forwarded back to localhost:3000
// But localhost:3000/?code = codehere
// Use the code to get the access token (code can only be used once)



function App () {
  const CLIENT_ID = process.env.REACT_APP_GIT_CLIENT_ID;
  const CLIENT_SECRET = process.env.REACT_APP_GIT_CLIENT_SECRET;
  const [data, setData] = useState(null);
  const [code, setCode] = useState(null);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    setCode(urlParams.get('code'));
    console.log(code);
  }, []);

  const access_token_request = () => {
    const params = '?client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET + '&code=' + code;

    fetch('https://github.com/login/oauth/access_token' + params, { mode: 'no-cors', method: 'POST', headers: { "Accept": "application/json" } })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      });
  };

  const loginWithGithub = () => {
    console.log(CLIENT_ID);
    console.log(CLIENT_SECRET);
    //window.location.assign('https://github.com/login/oauth/authorize?client_id=' + CLIENT_ID);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={loginWithGithub}>
          Login With Github
        </button>
        {code && <button onClick={() => access_token_request()}>
          Access Token
        </button>}
        <p>
          Lysiak Yevhenii
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
