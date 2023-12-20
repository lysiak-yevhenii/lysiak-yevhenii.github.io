import React from 'react';
import styles from './Menu.module.css';
import salesforce_logo from '../../salesforce.svg';
import react_logo from '../../react.svg';

const Menu = () => {
  return (
    <div className={styles.container}>
      <div id={styles.panel}>
        <img className={styles['Salesforce-logo']} style={{ wight: "50px", height: "50px" }} src={salesforce_logo} alt="Salesforce Log" />
        <div id={styles.hidden_panel}>
          <div class={styles.display}>
            {/* <iframe id="ytplayer" type="text/html" width="720" height="405" src="https://www.youtube.com/embed/qTv8lRXM6Tw" frameborder="0" allowfullscreen="" /> */}
          </div>
        </div>
      </div>
      <div id={styles.panel} style={{ top: "88px" }}>
        <img className={styles['App-logo']} style={{ wight: "50px", height: "42px" }} src={react_logo} alt="React Logo" />
        <div id={styles.hidden_panel}>
          <div class={styles.display}>
            {/* <iframe id="ytplayer" type="text/html" width="720" height="405" src="https://www.youtube.com/embed/qTv8lRXM6Tw" frameborder="0" allowfullscreen="" /> */}
          </div>
        </div>
      </div>
    </div >
  );
}

export default Menu;