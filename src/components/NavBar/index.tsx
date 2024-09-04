import Button from "../Button";

interface INavBar {
  className?: string;
  logo: string;
}
const NavBar = (props: INavBar) => {
  const { className, logo } = props;
  return (
    <>
      <div className={className}>
        <div className="top-bar">
          <span>+92 3455555396</span>
          <span>
            Westridge 1, Office #304-B Peshawar Road, Rawalpindi, Pakistan
          </span>
          <span>Mon - Fri 8.00 - 20.00</span>

          <a href="">
            <i>icons</i>
          </a>
          <a href="">
            <i>icons</i>
          </a>
          <a href="">
            <i>icons</i>
          </a>
          <a href="">
            <i>icons</i>
          </a>
          <a href="">
            <i>icons</i>
          </a>
          <div className="btn">
            <Button />
            <Button />
          </div>
        </div>
        <nav className="bar">
          <strong className="logo">
            <img src={logo} alt={logo} />
          </strong>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Certifications</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Seminars</a>
            </li>
            <li>
              <a href="#">Tech blogs</a>
            </li>
            <li>
              <a href="#">IPortal Login</a>
            </li>
          </ul>
          <div className="btn">
            <Button />
            <Button />
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
