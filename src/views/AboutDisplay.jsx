import trainerCardBG from '../assets/trainer-card.png'
import linkedIn from '../assets/linkedin.png'
import github from '../assets/github.png'
import email from '../assets/email.png'
import youtube from '../assets/youtube.png'

export default (props) => {
  return (
    <div className='about-display'>
      <p className='my-name'>EVAN WIOREK</p>
      <p className='job-title'>WEB DEVELOPER</p>
      <a href="http://evanwiorek.com" target='_blank' className='website-name'>EVANWIOREK.COM</a>
      <p className='links-text'>LINKS</p>
      <img src={trainerCardBG} alt="trainer card bg" className='trainer-card-bg'/>
      <a target='_blank' href="https://www.linkedin.com/in/evan-wiorek-082900104/"><img src={linkedIn} alt="LinkedIn" className='linked-in' /></a>
      <a target='_blank' href="https://github.com/EvanWiorek/"><img src={github} alt="github" className='github' /></a>
      <a target='_blank' href="mailto:wiorek.evan@gmail.com"><img src={email} alt="email" className='email' /></a>
      <a target='_blank' href="https://evanwiorek.com/"><img src={github} alt="website" className='website' /></a>
      <a target='_blank' href="https://docs.google.com/document/d/1XQz5mrmH2t0Qfg0P4-Rmm8_S1ALkwh4STLKqkjwvuDM/edit?usp=sharing"><img src={github} alt="resume" className='resume' /></a>
      <a target='_blank' href="https://www.youtube.com/channel/UCNUWx9gwErzmWxj81x7OL6w"><img src={youtube} alt="youtube" className='youtube' /></a>
      <div className='about-paragraphs'>
        <p>I made this out of love for Pokemon; specifically for Pokemon Red. This brought much joy for me as a child, and to this day I can't help but feel warm when hearing the Pallet Town theme, or seeing the "retro" aesthetics of a GameBoy. So I thought, why not combine my love of coding with nostalgia and boom!
        </p>
        <p>This was made using the <a href="https://pokeapi.co/">Pokemon API</a> and built by me using React. I modified an image of a DMG, then styled everything just right to display as it does here.</p>
        <p>I am open for work, and would love to help you out! Please feel free to reach me using my links above. Thank you for taking the time to check this out!</p>
      </div>
      <div className='scroll-down'>Scroll down!</div>
    </div>
  )
}