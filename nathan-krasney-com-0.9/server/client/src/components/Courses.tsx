import "./Courses.css";
import "./CoursesData.css";
import { Helmet } from "react-helmet";
import ICourse from "../Interfaces/ICourse";
import useFetch from "../hooks/useFetch";

const Courses = () => {
  const onlineCoursesArray: ICourse[] =
    useFetch("/data/onlinesCourses.json") ?? [];

  const onlineCourses = onlineCoursesArray.map((course, index) => (
    <div key={index} className="Course-online-1 courseOnline">
      <div className="course-img">
        <img
          src={course.imgSrc}
          alt="coursePic"
        />
        <a href={course.href} className="course-btn-enroll">
          Enroll
        </a>
      </div>
      <div className="course-name-text">
        <p>{course.courseName}</p>
      </div>
    </div>
  ));

  return (
    <div className="Courses">
      <Helmet>
        <title>Nathan Krasney | React Courses & Mentoring</title>
        <meta
          name="description"
          content="Join my unique online react courses. Learn the concepts of react and learn to learn. Contact me for more info"
        />
      </Helmet>
      <div className="Courses-main-container">
        <h1 className="Courses-online-title">Online Courses</h1>

        <div className="Courses-online-container coursesInnerContainer">
          {onlineCourses}
        </div>
      </div>
    </div>
  );
};

export default Courses;
