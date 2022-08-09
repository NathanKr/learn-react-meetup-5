import Event from "src/components/Event";
import Head from 'next/head';
import styles from "styles/Events.module.css";
import useFetch from "src/hooks/useFetch";
import IEvent, { IUrl } from "src/Interfaces/IEvent";

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
    <div className={styles.Events}>
      <Head>
        <title>Nathan Krasney | React Courses & Mentoring</title>
        <meta
          name="description"
          content="Web developer , register to these react events. Number of sits is limited. Contact me for more info"
        />
      </Head>
      <h1 className={styles.Events_title}>Upcoming Events</h1>
      <div className={styles.Events_container}>{elements}</div>
    </div>
  );
};

export default Events;
