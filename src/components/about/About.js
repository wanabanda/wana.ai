import "./about.css";
import Me from "../../img/a.print.gif";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img src={Me} alt="" className="about-img" />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About me</h1>
        <p className="about-desc">
          I first gained interest in tech from the movies hacker(1998). Since
          then I have read books on java and completed game development course
          on udemy. I am currenlty studying full stack development with
          BlackCodher. I'm into computer interaction,machine learning and game
          developemnt. In my free time, i take care of my plants and play video
          games.
        </p>
      </div>
    </div>
  );
};

export default About;
