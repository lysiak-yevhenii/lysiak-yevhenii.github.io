import react_logo from './react.svg';
import salesforce_logo from './salesforce.svg';
import { useState } from "react";
import "./index.css";
import './App.css';

const content = [
  [
    "[Demo]"
  ],
  [
    "[Demo]"
  ],
  [
    "[Demo]"
  ]
];

function App () {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div>
      <header>
        <img src={react_logo} className="App-logo" alt="logo" />
        <img src={salesforce_logo} className="Salesforce-logo" alt="logo" />
        <div>
          <h1>Lysiak Yevhenii</h1>
          <p>Profile page</p>
        </div>
      </header>

      <div id="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            Tab 1
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            Tab 2
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            Tab 3
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


export default App;
