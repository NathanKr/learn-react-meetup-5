import styles from "styles/Mentoring.module.css";
import Head from 'next/head';

const codeReviewIcon = "/icons/code-review.png";
const internetIcon = "/icons/internet.png";
const manualIcon = "/icons/manual.png";
const partnershipHandshakeIcon = "/icons/partnership-handshake.png";
const professionalIcon = "/icons/professional.png";
const qaIcon = "/icons/qa.png";

const Mentoring = () => {
  return (
    <div className={styles.Mentoring}>
      <Head>
        <title>Nathan Krasney | React Courses & Mentoring</title>
        <meta
          name="description"
          content="Junior web developer, join my mentoring program in the way to your first job as junior web developer. Contact me for more info"
        />
      </Head>
      <div className={styles.Mentoring_container}>
        <h1 className={styles.Mentoring_title}>So...</h1>
        <p className={styles.Mentoring_description}>
          You are out of college \ bootcamp and you are looking for a job as
          junior web developer. You are good but you are struggling to get a job
          .You need professional help from someone that have experience and have
          been there. I have been there and i am here as a mentor to help you :
        </p>

        <div className={styles.Mentoring_icons_container}>
          <div className={styles.icon_container}>
            <img
              className={styles.icon_container_img}
              src={codeReviewIcon}
              alt="Icon"
            />
            <p className={styles.icon_container_para}>Code Reviews</p>
          </div>
          <div className={styles.icon_container}>
            <img className={styles.icon_container_img} src={qaIcon} alt="Icon" />
            <p className={styles.icon_container_para}>Q&A Sessions</p>
          </div>
          <div className={styles.icon_container}>
            <img className={styles.icon_container_img} src={manualIcon} alt="Icon" />
            <p className={styles.icon_container_para}>
              Develpment projects guiding (final , self)
            </p>
          </div>
          <div className={styles.icon_container}>
            <img
              className={styles.icon_container_img}
              src={professionalIcon}
              alt="Icon"
            />
            <p className={styles.icon_container_para}>
              What and how to learn and get professional
            </p>
          </div>
          <div className={styles.icon_container}>
            <img
              className={styles.icon_container_img}
              src={partnershipHandshakeIcon}
              alt="Icon"
            />
            <p className={styles.icon_container_para}>Tips for getting a job</p>
          </div>
          <div className={styles.icon_container}>
            <img className={styles.icon_container_img} src={internetIcon} alt="Icon" />
            <p className={styles.icon_container_para}>Deploy your app to the cloud </p>
          </div>
        </div>
        <div style={{textAlign:'center'}}>
          <a href="https://mentorcruise.com/mentor/nathankrasney/">
            <img
              src="https://cdn.mentorcruise.com/img/banner/navy-mentoring-badge.svg"
              width="240"
              alt="MentorCruise"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mentoring;
