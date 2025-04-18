import instagram_logo from "../../instagram.svg";
import youtube_logo from "../../youtube.svg";
import tiktok_logo from "../../tiktok.svg";
import salesforce_logo from "../../salesforce.svg";

const Header = () => {
  return (
    <header>
      <div>
        <h1>Lysiak Yevhenii</h1>
        <hr />
        <p>Profile page</p>
      </div>
      {/* <div className={styles['social-pages-ref']}>
          <a href="https://www.instagram.com/lysiak.yevhenii/"><img style={isMobile ? { wight: "50px", height: "30px" } : { wight: "50px", height: "50px" }} src={instagram_logo} alt="Instagram Logo"></img></a>
          <a href="https://www.youtube.com/@Lysiak.Yevhenii"><img style={isMobile ? { wight: "50px", height: "30px" } : { wight: "50px", height: "50px" }} src={youtube_logo} alt="YouTube Logo"></img></a>
          <a href="https://www.tiktok.com/@jenuaz__ua"><img style={isMobile ? { wight: "50px", height: "30px" } : { wight: "50px", height: "50px" }} src={tiktok_logo} alt="TikTok Logo"></img></a>
          <a href="https://lisyakyevhenii-dev-ed.my.site.com/"><img style={isMobile ? { wight: "50px", height: "30px" } : { wight: "50px", height: "50px" }} src={salesforce_logo} alt="SF Logo"></img></a>
        </div> */}
    </header>
  );
};

export default Header;
