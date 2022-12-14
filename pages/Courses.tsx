import stylesCourses from "styles/Courses.module.css";
import stylesCoursesData from "styles/CoursesData.module.css";
import ICourse from "src/Interfaces/ICourse";
import Head from "next/head";
import Image from "next/image";
import { FC } from "react";

interface IProps {
  courses: ICourse[];
}

export async function getStaticProps() {
  //local
  let props: IProps = {
    courses: [],
  };

  const host =
    process.env.NODE_ENV == "development"
      ? "http://localhost:3000"
      : "https://learn-react-meetup-5-pre.vercel.app";
      
  const res = await fetch(`${host}/api/courses`);
  props.courses = await res.json();

  return {
    props, // will be passed to the page component as props
  };
}

const Courses: FC<IProps> = ({ courses }) => {
  const onlineCourses = courses.map((course, index) => (
    <div key={index} className={stylesCoursesData.courseOnline}>
      <div className={stylesCoursesData.course_img}>
        {/* <img src={course.imgSrc} alt="coursePic" /> */}
        {/* todo : there is still a vertical space which needs to be closed 
            also no width\height with layout fill might also be an options. 
            But using Image bring better performance check e.g lazy loading 
            and size downloaded*/}
        <Image src={course.imgSrc} alt="coursePic" height={198} width={382} />
        <a href={course.href} className={stylesCoursesData.course_btn_enroll}>
          Enroll
        </a>
      </div>
      <div className={stylesCoursesData.course_name_text}>
        <p>{course.courseName}</p>
      </div>
    </div>
  ));

  const onlineCoursesClassName = `${stylesCourses.Courses_online_title} ${stylesCourses.coursesInnerContainer}`;
  return (
    <div className={stylesCourses.Courses}>
      <Head>
        <title>Nathan Krasney | React Courses & Mentoring</title>
        <meta
          name="description"
          content="Join my unique online react courses. Learn the concepts of react and learn to learn. Contact me for more info"
        />
      </Head>
      <div className={stylesCourses.Courses_main_container}>
        <h1 className={stylesCourses.Courses_online_title}>Online Courses</h1>

        <div className={onlineCoursesClassName}>{onlineCourses}</div>
      </div>
    </div>
  );
};

export default Courses;
