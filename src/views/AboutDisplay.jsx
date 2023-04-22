import trainerCardBG from '../assets/trainer-card.png'
import linkedIn from '../assets/linkedin.png'
import github from '../assets/github.png'

export default (props) => {
  return (
    <div>
      <p className='my-name'>EVAN WIOREK</p>
      <p className='job-title'>WEB DEVELOPER</p>
      <a href="http://evanwiorek.com" target='_blank' className='website-name'>EVANWIOREK.COM</a>
      <p className='links-text'>LINKS</p>
      <img src={trainerCardBG} alt="trainer card bg" className='trainer-card-bg'/>
      <img src={linkedIn} alt="LinkedIn" className='linked-in' />
      <img src={github} alt="github" className='github' />
    </div>
  )
}