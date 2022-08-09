import { FC } from "react";
// its empty import styles from "styles/ClickedTestimonial.module.css"

interface IProps{
  img_src:string;
  desc:string;
  href:string;
  testimonial_category:string;
}

const ClickedTestimonial : FC<IProps> = ({ img_src, desc, href ,testimonial_category}) => {
  return (
    <div>
      <p>{testimonial_category}</p>
      <a href={href}>
        <img src={img_src} className="img-fluid img-thumbnail" alt="testImg"/>
      </a>
      <p>{desc}</p>
    </div>
  );
};

export default ClickedTestimonial;
