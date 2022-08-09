import { useState, useEffect } from "react";
import IEvent from "../Interfaces/IEvent";
import "./EventsSlide.css";

const EventsSlide = () => {
  const [EventsSildeArray, setEventsSildeArray] = useState<IEvent[]>([]);
  const eventsSlideJSON = "./data/eventSlide.json";

  const handleSetEventSlideArray = (dataFetch: IEvent[]) => {
    setEventsSildeArray(dataFetch);
  };

  useEffect(() => {
    fetch(eventsSlideJSON)
      .then((response) => response.json())
      .then((data) => handleSetEventSlideArray(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="EventsSlide">
      <div className="EventsSlide-container">
        {EventsSildeArray
          ? EventsSildeArray.map((eventS, index) => {
              const urlElem = eventS.url ? (
                <a href={eventS.url.href}>{eventS.url.text}</a>
              ) : null;

              return (
                <div key={index} className="EventsSlide-text">
                  <h5 className="EventsSlide-name">{eventS.title}</h5>
                  {urlElem}
                  <p className="EventsSlide-date">{eventS.startDt}</p>
                </div>
              );
            })
          : "Loading..."}
      </div>
    </div>
  );
};

export default EventsSlide;
