import classes from "./MeetupDetails.module.css"

const MeetupDetails = (props) => {
  return (
    <div className={classes.detail}>
      <img
        src={props?.image}
        alt='meetup-image'
      />
      <h1>First Meetup</h1>
      <address>Las Vegas</address>
      <p>Meetup hold at las vegas.</p>
    </div>
  )
}

export default MeetupDetails