import stylesCourses from "styles/Courses.module.css";
import stylesCoursesData from "styles/CoursesData.module.css";
import ICourse from "src/Interfaces/ICourse";
import useFetch from "src/hooks/useFetch";
import Head from "next/head";

const Courses = () => {
  const onlineCoursesArray: ICourse[] =
    useFetch("/data/onlinesCourses.json") ?? [];

  // Course-online-1 does not exist
  const onlineCourses = onlineCoursesArray.map((course, index) => (
    <div key={index} className={stylesCoursesData.courseOnline}>
      <div className={stylesCoursesData.course_img}>
        <img src={course.imgSrc} alt="coursePic" />
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

        <div className={onlineCoursesClassName}>
          {onlineCourses}
        </div>
      </div>
    </div>
  );
};

export default Courses;
