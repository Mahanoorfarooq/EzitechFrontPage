import React from "react";
import Button from "../../../components/Button";
interface IOfferCard {
  className?: string;
  heading: string;
  label: string;
  image: string;
  btnText: string;
}
const OfferCard = (props: IOfferCard) => {
  const { className, heading, label, image, btnText } = props;
  return (
    <div className={className}>
      <div className="top">
        <h1>{heading}</h1>
        <img src={image} alt={image} />
        <span>{label}</span>
      </div>
      <div className="bottm">
        <span>
          <i>Employment- Hybrid</i>
        </span>
        <span>
          <i>Location- Rawalpindi</i>
        </span>
        <span>
          <i>Job Type- Full Time Part Time</i>
        </span>
        <Button>{btnText}</Button>
      </div>
    </div>
  );
};

export default OfferCard;
