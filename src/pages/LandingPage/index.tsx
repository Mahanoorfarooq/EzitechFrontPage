import Button from "../../components/Button";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Courses from "../../module/LandingPage/Courses";
import OfferCard from "../../module/LandingPage/OfferCard";
import Tile from "../../module/LandingPage/Tile";
import laptop from "../../assets/laptop.png";
import mobile from "../../assets/mobile.png";
import "./style.css";
import logo from "../../assets/white-1.png";
import ML from "../../assets/1.png";
import BlockChain from "../../assets/2blockchain.png";
import Amazon from "../../assets/3amazon.png";
import Cyber from "../../assets/4cybersecuritu.png";
import Development from "../../assets/5development.png";
import Design from "../../assets/6design.png";

import gaming from "../../assets/gaming.png";
import architecture from "../../assets/architecture.png";
import ios from "../../assets/ios.png";
import Marketing from "../../assets/marketing.png";
import d3 from "../../assets/3d.png";
import animation from "../../assets/animation.png";

const tileContent = [
  {
    image: ML,
    text: "Ml & AI",
  },
  {
    image: BlockChain,
    text: "Block Chain",
  },
  {
    image: Amazon,
    text: "Amazon",
  },
  {
    image: Cyber,
    text: "Cyber Security",
  },
  {
    image: Development,
    text: "Development",
  },
  {
    image: Design,
    text: "Designing",
  },
  {
    image: gaming,
    text: "Gaming",
  },
  {
    image: architecture,
    text: "Architecture",
  },
  {
    image: ios,
    text: "IOS & AND",
  },
  {
    image: Marketing,
    text: "Marketing",
  },
  {
    image: d3,
    text: "3D",
  },
  {
    image: animation,
    text: "Animation",
  },
];
const leftCard = [
  {
    image: "",
    content: "From Novice to Expert, The complete JavaScript Course 2024!",
    price: "PKR7,600",
  },
  {
    image: "",
    content: "The Complete Guide to React (incl Hooks, React Router, Redux)",
    price: "PKR 8,000",
  },
  {
    image: "",
    content: "Sell Fiverr Gigs Like the top 1% in Freelancing in 2024",
    price: "PKR 4,500",
  },
  {
    image: "",
    content:
      "The complete Bootcamp 2024: Nodejs, Expressjs, Mongo DB, and more",
    price: "PKR13,000",
  },
];
const rightCard = [
  {
    image: "",
    content: "YouTube ads and Google ads",
    price: "PKR5,000",
  },
  {
    image: "",
    content: "Search Engine Optimization (SEO)",
    price: "PKR 6,000",
  },
  {
    image: "",
    content: "Advance Digital Marketing",
    price: "PKR 6,500",
  },
  {
    image: "",
    content: "Linkedin Orientation",
    price: "PKR5,000",
  },
  {
    image: "",
    content: "Content Marketing and Copy writing",
    price: "PKR5,000",
  },
];
const LandingPage = () => {
  return (
    <>
      <NavBar logo={logo} className="navbar" />

      <div className="banner">
        <h1>Learn the Fundamentals with our Experts in Web Design</h1>
        <h2>Use Effective Learning to Reach Your Potential</h2>
        <div className="search">
          <input type="text" placeholder="Search courses..." />
          <Button />
        </div>
        <h3>Explore our most useful products </h3>
        <div className="tabs">
          <a href="">EZIBLOGS</a>
          <a href="">EZIPOS</a>
          <a href="">EZICODING</a>
        </div>
      </div>

      <div className="section2">
        <h1 className="section-heading">How it works?</h1>
        <div className="images">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div className="tiles">
          {tileContent &&
            tileContent?.map((items, index) => (
              <Tile
                key={index}
                image={items.image}
                text={items.text}
                onTileClick={() => {}}
              />
            ))}
        </div>

        <div>
          <h1>Limited Time Summer Courses Bundles!</h1>
          <span>Note : All these have recorded Lectures</span>
          <div className="left">
            <h3>Web Development courses with industrial projects</h3>
            <span>4 Courses</span>
            {leftCard &&
              leftCard?.map((items) => (
                <Courses
                  image={items.image}
                  content={items.content}
                  price={items.price}
                />
              ))}
            <span>PKR10,000</span>
            <span>PKR10,000</span>
          </div>
          <div className="right">
            <h3>Digital Marketing Mastery Learn for the best</h3>
            <span>6 Courses</span>
            {rightCard &&
              rightCard?.map((items) => (
                <Courses
                  image={items.image}
                  content={items.content}
                  price={items.price}
                />
              ))}
            <span>PKR8,000</span>
            <span>PKR32,000</span>
          </div>
        </div>

        <div>
          <h1>Perfect Internship For You</h1>
          <div>
            <OfferCard
              heading="HTML/CSS JavaScript"
              label="Ezitech Institute"
              btnText="Read More"
              image=""
            />
          </div>
          <div>
            <OfferCard
              heading="Graphic Designing"
              label="Ezitech Institute"
              btnText="Read More"
              image=""
            />
          </div>
          <div>
            <OfferCard
              heading="Digital Marketing"
              label="Ezitech Institute"
              btnText="Read More"
              image=""
            />
          </div>
          <div>
            <OfferCard
              heading="Flutter Development"
              label="Ezitech Institute"
              btnText="Read More"
              image=""
            />
          </div>
          <div>
            <OfferCard
              heading="Machine Leaning"
              label="Ezitech Institute"
              btnText="Read More"
              image=""
            />
          </div>
          <div>
            <OfferCard
              heading="MERN Development"
              label="Ezitech Institute"
              btnText="Read More"
              image=""
            />
          </div>
          <Button>Load More</Button>
        </div>
      </div>

      <div>
        <div className="leftpanel">
          <img src={mobile} alt={mobile} />
        </div>
        <div className="rightpanel">
          <h1>
            Learning <span>anytime</span> from anywhere
          </h1>
          <p>
            Increase the mobility level with Eziline Technologies LMS App. Take
            your courses in your pocket and access them whenever you want
            without any limits. Make your learning more engaging and more
            productive using modern LMS app.
          </p>
          <Button>Coming Soon</Button>
          <Button>Google Play</Button>
        </div>
      </div>

      <div>
        <h1>It's time to start investing in yourself</h1>
        <img src={laptop} alt={laptop} />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
