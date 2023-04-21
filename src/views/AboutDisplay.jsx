import trainerCardBG from '../assets/trainer-card.png'

export default (props) => {
  return (
    <div>
      <p className='my-name'>EVAN WIOREK</p>
      <p className='job-title'>WEB DEVELOPER</p>
      <a href="http://evanwiorek.com" target='_blank' className='website-name'>EVANWIOREK.COM</a>
      <p className='links-text'>LINKS</p>
      <img src={trainerCardBG} alt="trainer card bg" className='trainer-card-bg'/>
    </div>
  )
}