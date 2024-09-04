interface IFooter {
  className?: string;
}
const Footer = (props: IFooter) => {
  const { className } = props;
  return (
    <div className={className}>
      <div className="about">
        <h2>About</h2>
        <p>
          Ezitech Institute provides a platform for newcomers to launch their IT
          and freelancing careers. Our emphasis on practical information
          technology courses that are career and work oriented makes us the top
          computer institute in Rawalpindi, Islamabad, Pakistan.
        </p>
      </div>
      <div className="popular">
        <h2>Popular Courses</h2>
        <p>
          Ezitech Institute provides a platform for newcomers to launch their IT
          and freelancing careers. Our emphasis on practical information
          technology courses that are career and work oriented makes us the top
          computer institute in Rawalpindi, Islamabad, Pakistan.
        </p>
      </div>
      <div className="pages">
        <h2>Pages</h2>
        <ul>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Ezicoding</a>
          </li>
          <li>
            <a href="#">Internship</a>
          </li>
          <li>
            <a href="#">Our Services</a>
          </li>
        </ul>
      </div>
      <div className="contact">
        <h2>Contact</h2>
        <span>
          Westridge 1, Office #304-B Peshawar Road, Rawalpindi, Pakistan
        </span>
        <span>+92 3455555396</span>
        <span>info@ezitech.org</span>
      </div>
      <span className="copyright">
        Copyright © 2024 Ezitech Institute | Design & Develop by{" "}
        <a href="#">Eziline Software House</a>
      </span>
    </div>
  );
};

export default Footer;
