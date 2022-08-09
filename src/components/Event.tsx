import styles from "styles/Event.module.css";
import { FC } from "react";
import IEvent from "src/Interfaces/IEvent";

const eventPagePic = "/images/eventPage-pic.jpg";

const Event: FC<IEvent> = ({ startDt, title, desc, location, url }) => {
  const dateTime = startDt;
  const urlElem = url ? <a href={url.href}>{url.text}</a> : null;

  return (
    <div className={styles.Event}>
      <div className={styles.Event_img_container}>
        <img src={eventPagePic} alt="event" className={styles.Event_img} />
        <div className={styles.Event_img_inner_container}>
          <h5 className={styles.Event_date}>{dateTime}</h5>
        </div>
      </div>

      <div className={styles.Event_desc_container}>
        {/* Event-name does not exist */}
        <h4>{title}</h4>
        {/* {urlElem}
        Event-desc does not exist */}
        <p>{desc}</p>
        <small>Location : {location}</small>
      </div>
    </div>
  );
};

export default Event;
