import "./LandingPage.css";
import { BsArrowRight } from "react-icons/bs";

export default function LandingPage() {
  return (
    <>
      <section className="landingPage-container main-container">
        <div className="landing-about-container">
          <div className="landing-about-content">
            Be a protocol, <br /> judge or a <br /> competitor
          </div>
          <div className="landing-about-white-box"></div>
          <div className="landing-about-boxes">
            <div className="landing-about-left-box">
              <h1 className="landing-about-box-heading">Start Competing</h1>
              <p className="landing-about-box-content">abekbjkabvjlblblk</p>
              <div className="landing-about-box-arrow"><BsArrowRight /></div>
            </div>
            <div className="landing-about-center-box">
              <h1 className="landing-about-center-box-heading">Send your Proposal</h1>
              <p className="landing-about-center-box-content">teguebkjsblbilbibkbk</p> 
              <div className="landing-about-box-arrow"><BsArrowRight /></div>
            </div>
            <div className="landing-about-right-box">
              <h1 className="landing-about-box-heading">Be a Judge</h1>
              <p className="landing-about-box-content">abekbjkabvjlblblk</p>
              <div className="landing-about-box-arrow"><BsArrowRight /></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
