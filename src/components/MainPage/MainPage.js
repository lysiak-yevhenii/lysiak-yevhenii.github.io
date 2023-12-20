import React, { useState } from 'react';
import styles from './MainPage.module.css';
import instagram_logo from '../../instagram.svg';
import youtube_logo from '../../youtube.svg';
import tiktok_logo from '../../tiktok.svg';

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

const MainPage = () => {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div className={styles.content}>
      <header>
        <div>
          <h1>Lysiak Yevhenii</h1>
          <p>Profile page</p>
        </div>
        <a href="https://www.instagram.com/lysiak.yevhenii/"><img src={instagram_logo} alt="Instagram Logo"></img></a>
        <a href="https://www.youtube.com/@Lysiak.Yevhenii"><img src={youtube_logo} alt="YouTube Logo"></img></a>
        <a href="https://www.tiktok.com/@jenuaz__ua"><img src={tiktok_logo} alt="TikTok Logo"></img></a>
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
    </div>);
}

export default MainPage;