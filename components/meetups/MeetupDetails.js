import classes from "./MeetupDetails.module.css"

const MeetupDetails = ({ image, title, description, address }) => {
  return (
    <div className={classes.detail}>
      <div className={classes.imageContainer}>
        <img
          src={image}
          alt='meetup-image'
        />
      </div>
      <div className={classes.contentContainer}>
        <h1>{title}</h1>
        <address>{address}</address>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default MeetupDetails