import "./Background.css";
import video1 from "../../assets/video1.mp4";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";

export const Background = ({ playStatus, heroCount }) => {
  console.log("Rendering Background:", { playStatus, heroCount });

  if (playStatus) {
    return (
      <video className="background fade-in" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={image1} className="background fade-in" alt="Hero 0" />;
  } else if (heroCount === 1) {
    return <img src={image2} className="background fade-in" alt="Hero 1" />;
  } else {
    return <img src={image3} className="background fade-in" alt="Hero 2" />;
  }
};
