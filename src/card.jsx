import React from "react";
import "./card.css"; // Make sure to include your CSS file

function Card({ image, title, description }) {
  return (
    <>
      {title == "Laboratory" ? (
        <div className='flip-card1'>
          <div className='flip-card-inner1'>
            <div className='flip-card-front1'>
              <img
                id={title == "Laboratory" ? 1 : 2}
                src={image}
                alt={title}
                style={{ width: "300px", height: "300px" }}
              />
              <h1>{title}</h1>
              <p></p>
            </div>
            <div className='flip-card-back1'>
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className='flip-card2'>
          <div className='flip-card-inner2'>
            <div className='flip-card-front2'>
              <img
                id={title == "John Doe222" ? 1 : 2}
                src={image}
                alt={title}
                style={{ width: "300px", height: "300px" }}
              />
              <h1>{title}</h1>
              <p></p>
            </div>
            <div className='flip-card-back2'>
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
