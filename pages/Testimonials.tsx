import styles from "styles/Testimonials.module.css";
import Head from 'next/head';
import {
  testimonial_category_student,
  testimonial_category_organization,
} from "src/logic/testimonialCategories";
import useFetch from "src/hooks/useFetch";
import ITestemonial from "src/Interfaces/ITestemonial";

const Testimonials = () => {
  const array: ITestemonial[] = useFetch("./data/testemonials.json") ?? [];

  const items = array.map((item, index) => {
    let elem;

    if (item.testimonial_category === testimonial_category_student) {
      elem = (
        <>
          <div className={styles.Testimonials_inner_container_img}>
            <a href={item.href}>
              <img
                src={item.img_src}
                alt="imgTest"
                className={styles.Testimonials_innerimg}
              />
            </a>
            <h4 className={styles.Testimonials_inner_name}>{item.name}</h4>
            <small className={styles.Testimonials_inner_job}>{item.job}</small>
          </div>

          <p className={styles.Testimonials_inner_desc}>{item.desc}</p>
        </>
      );
    } else if (
      item.testimonial_category === testimonial_category_organization
    ) {
      elem = (
        <>
          <h4 className={styles.Testimonials_inner_name}>{item.name}</h4>
          <img style={{ width: "100%" }} src={item.img_src} alt="" />
        </>
      );
    }
    return (
      <div key={index} className={styles.Testimonials_container}>
        <div className={styles.Testimonials_inner_container}>{elem}</div>
      </div>
    );
  });

  return (
    <div className={styles.Testimonials}>
      <Head>
        <title>Nathan Krasney | React Courses & Mentoring</title>
        <meta
          name="description"
          content="Check what web developers think about Nathan Krasney. Contact me for any question"
        />
      </Head>
      <h1 className={styles.Testimonials_title}>
        Success stories from students and organizations
      </h1>
      {items}
    </div>
  );
};

export default Testimonials;
