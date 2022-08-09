import styles from "styles/Contact.module.css";
import Head from "next/head";

const mailIcon = "/icons/mail.png";

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <Head>
        <title>Nathan Krasney | React Courses & Mentoring</title>
        <meta
          name="description"
          content="Contact me for details on online react courses, web development bootcamps and mentoring program for junior web developers"
        />
      </Head>

      <div className={styles.Contact_container}>
        <div className={styles.Contact_img_container}>
        {/* Contact-img does not exists */}
          <img src={mailIcon} alt="imgIcon"  />
        </div>

        <div className={styles.Contact_info_container}>
          <span className={styles.Contact_info_span}>
            Email:
            <span className={styles.Contact_email}>natankrasney@gmail.com</span>
          </span>
          <span className={styles.Contact_info_span}>
            <a
              className={styles.Contact_email_list}
              href="https://next-js-revue-signup.vercel.app/"
            >
              Register to My Email List
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
