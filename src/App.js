import logo from './logo.svg';
import './App.css';

// Forward the user to github login screen (we pass in the client ID)
// User in now on the github side and logs in (github/login)
// When user decides to login they get forwarded back to localhost:3000
// But localhost:3000/?code = codehere
// Use the code to get the access token (code can only be used once)



function App () {
  const CLIENT_ID = process.env.REACT_APP_GIT_CLIENT_ID;

  const loginWithGithub = () => {
    window.location.assign('https://github.com/login/oauth/authorize?client_id=' + CLIENT_ID);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={loginWithGithub}>
          Login With Github
        </button>
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
