import trainerCardBG from "../assets/trainer-card.png";
import linkedIn from "../assets/linkedin.png";
import github from "../assets/github.png";
import email from "../assets/email.png";
import youtube from "../assets/youtube.png";
import resume from "../assets/resume.png";
import website from "../assets/website.png";

export default (props) => {
  return (
    <div className="about-display">
      <p className="my-name">EVAN WIOREK</p>
      <p className="job-title">WEB DEVELOPER</p>
      <a href="http://evanwiorek.com" target="_blank" className="website-name">
        EVANWIOREK.COM
      </a>
      <p className="links-text">LINKS</p>
      <img
        src={trainerCardBG}
        alt="trainer card bg"
        className="trainer-card-bg"
      />
      <div className="contact-link linked-in d-flex flex-column align-items-center">
        <a target="_blank"
          href="https://www.linkedin.com/in/evan-wiorek-082900104/">
          <img src={linkedIn} alt="LinkedIn"/>
        </a>
        <span>LinkedIn</span>
      </div>
      <div className="contact-link github d-flex flex-column align-items-center">
        <a target="_blank" href="https://github.com/EvanWiorek/">
          <img src={github} alt="github" />
        </a>
        <span>GitHub</span>
      </div>
      <div className="contact-link email d-flex flex-column align-items-center">
        <a target="_blank" href="mailto:wiorek.evan@gmail.com">
          <img src={email} alt="email" />
        </a>
        <span>Email</span>
      </div>
      <div className="contact-link website d-flex flex-column align-items-center">
        <a target="_blank" href="https://evanwiorek.com/">
          <img src={website} alt="website" />
        </a>
        <span>Website</span>
      </div>
      <div className="contact-link resume d-flex flex-column align-items-center">
        <a
          target="_blank"
          href="https://docs.google.com/document/d/1tZlbV8r2pbCLak3IxiGfJN4ycTAuYcPlBnHfAlfiX-s/edit?usp=sharing"
        >
          <img src={resume} alt="resume" />
        </a>
        <span>Resume</span>
      </div>
      <div className="contact-link youtube d-flex flex-column align-items-center">
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCNUWx9gwErzmWxj81x7OL6w"
        >
          <img src={youtube} alt="youtube"/>
        </a>
        <span>YouTube</span>
      </div>
      <div className="about-paragraphs">
        <p>
          I made this out of love for Pokemon; specifically for Pokemon Red.
          This brought much joy for me as a child, and to this day I can't help
          but feel warm when hearing the Pallet Town theme, or seeing the
          "retro" aesthetics of a GameBoy. So I thought, why not combine my love
          of coding with nostalgia and boom!
        </p>
        <p>
          This was made using the <a href="https://pokeapi.co/">Pokemon API</a>{" "}
          and built by me using React. I modified an image of a DMG, then styled
          everything just right to display as it does here.
        </p>
        <p>
          I am open for work, and would love to help you out! Please feel free
          to reach me using my links above. Thank you for taking the time to
          check this out!
        </p>
      </div>
      <div className="scroll-down">Scroll down!</div>
    </div>
  );
};
