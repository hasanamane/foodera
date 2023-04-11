import React from "react";
import p1 from "../../assets/1.png";
import p2 from "../../assets/2.png";
import "./PartCard.css";
function PartCard() {
  return (
    <div className="card">
      <div className="card-all">
        <div className="card-1">
          <img src={p1} className="pull-left img-responsive" />
          <div className="card-font">
            <h2>
              We pride ourselves on making real food from the best ingredients.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
              tellus.
            </p>
            <button className="btn-now"> Learn More </button>
          </div>
        </div>
        <div className="card-2">
          <img src={p2} className="pull-right img-responsive" />
          <div className="card-font card-f2">
            <h2>
              We pride ourselves on making real food from the best ingredients
              We pride ourselves on making real.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
              tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Etiam et purus a odio finibus bibendum in sit amet leo. Mauris
              feugiat erat tellus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Etiam et purus a odio finibus bibendum in sit
              amet leo. Mauris feugiat erat tellus.
            </p>
            <button className="btn-now"> Learn More </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartCard;
