import React from "react";
interface ICourses {
  className?: string;
  image: string;
  content: string;
  price: string;
}
const Courses = (props: ICourses) => {
  const { className, image, content, price } = props;
  return (
    <div className={className}>
      <img src={image} alt={image} />
      <p>{content}</p>
      <span>{price}</span>
    </div>
  );
};

export default Courses;
