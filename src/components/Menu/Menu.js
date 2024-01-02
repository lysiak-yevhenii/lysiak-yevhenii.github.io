import React from 'react';
import styles from './Menu.module.css';
import salesforce_logo from '../../salesforce.svg';
import react_logo from '../../react.svg';

const Menu = (props) => {

  const app_size = props['app-size'];

  const isMobile = app_size <= 480;

  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <img
          className={styles['Salesforce-logo']}
          style={{ wight: "50px", height: "50px" }}
          src={salesforce_logo}
          alt="Salesforce Log" />
        <div className={styles.hidden_panel}>
          <div className={styles.display}>
            {/* <iframe id="ytplayer" type="text/html" width="720" height="405" src="https://www.youtube.com/embed/qTv8lRXM6Tw" frameborder="0" allowfullscreen="" /> */}
          </div>
        </div>
      </div>
      <div className={styles.panel} style={!isMobile ? { top: "88px" } : { left: "18%" }}>
        <img className={styles['App-logo']} style={{ wight: "50px", height: "42px" }} src={react_logo} alt="React Logo" />
        <div className={styles.hidden_panel}>
          <div className={styles.display}>
            {/* <iframe id="ytplayer" type="text/html" width="720" height="405" src="https://www.youtube.com/embed/qTv8lRXM6Tw" frameborder="0" allowfullscreen="" /> */}
          </div>
        </div>
      </div>
    </div >
  );
}

export default Menu;