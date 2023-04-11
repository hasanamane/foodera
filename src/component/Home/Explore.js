import React from "react";
import "./Explore.css";
import card1 from '../../assets/01.jpg';
import card2 from '../../assets/02.jpg';
import card3 from '../../assets/03.jpg';
import Button  from "./Button";
function Explore() {
  return (
    <div className="Explore">
      <div className="Explore-section">
        <h2 className="h2-Title">Explore Our Foods</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
          purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
          tellus. Far far away, behind the word mountains, far from the
          countries Vokalia and Consonantia, there live the blind texts.
          Separated they live in Bookmarksgrove.
        </p>
      </div>
      <div className="Explore-card">
        <div  className="card-section">
            <img src={card1} title="Card1"/>
            <h2>Rainbow Vegetable Sandwich</h2>
            <p>Time: 15 - 20 Minutes | Serves: 1</p>
            <h1 className="parse-new">$10.50<del className="parse-old">$11.70</del></h1>
            <Button  data="Order Now"/>
        </div>
      
        <div className="card-section">
            <img src={card2} title="Card1"/>
            <h2>Rainbow Vegetable Sandwich</h2>
            <p>Time: 15 - 20 Minutes | Serves: 1</p>
            <h1 className="parse-new">$10.50<del className="parse-old">$11.70</del></h1>
            <Button  data="Order Now"/>
        </div>
        <div className="card-section">
            <img src={card3} title="Card1"/>
            <h2>Rainbow Vegetable Sandwich</h2>
            <p>Time: 15 - 20 Minutes | Serves: 1</p>
            <h1 className="parse-new">$10.50<del className="parse-old">$11.70</del></h1>
            <Button  data="Order Now"/>
        </div>
      </div>
    </div>
  );
}

export default Explore;
