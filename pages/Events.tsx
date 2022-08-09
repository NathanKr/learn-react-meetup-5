import Event from "./Event";
import { Helmet } from "react-helmet";
import "./Events.css";
import useFetch from "../hooks/useFetch";
import IEvent, { IUrl } from "../Interfaces/IEvent";

const Events = () => {
  const events: IEvent[] = useFetch("/data/eventSlide.json") ?? [];

  const elements = events.map((item, index) => {
    return (
      <Event
        key={index}
        startDt={item.startDt}
        title={item.title}
        desc={item.desc}
        location={item.location}
        url={
          item.url ? { href: item.url.href, text: item.url.text } : undefined
        }
      />
    );
  });

  return (
    <div className="Events">
      <Helmet>
        <title>Nathan Krasney | React Courses & Mentoring</title>
        <meta
          name="description"
          content="Web developer , register to these react events. Number of sits is limited. Contact me for more info"
        />
      </Helmet>
      <h1 className="Events-title">Upcoming Events</h1>
      <div className="Events-container">{elements}</div>
    </div>
  );
};

export default Events;
