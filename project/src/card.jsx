import React from "react";
import "./card.css"; // Make sure to include your CSS file
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import lab from "./lab.png"
import anal from "./anal.png"

function Card({ image, title, description }) {
  return (
    <>
      {title == "Laboratory" ? (
        <div className='flip-card1'>
          <div className='flip-card-inner1'>
            <div className='flip-card-front1'>
              <img
                id={title == "Laboratory" ? 1 : 2}
                // decoding="async" 
                sizes="112px" 
                src={lab}
                // srcset="https://framerusercontent.com/images/e8VxvljeGAmE0Lr3gXvzqZ0jo8.png?scale-down-to=512 512w,https://framerusercontent.com/images/e8VxvljeGAmE0Lr3gXvzqZ0jo8.png 598w" src="https://framerusercontent.com/images/e8VxvljeGAmE0Lr3gXvzqZ0jo8.png?scale-down-to=512" 
                alt={title}
                style={{marginTop: "90px", width: "10c0px", height: "100px" }}
              />
              <h1>{title}</h1>
            </div>
            <div className='flip-card-back1'>
            <Link to="/ring" style={{color: "white",fontWeight: "normal", textDecoration: "none" }}> {/* Use the 'to' prop for React Router */}
            <h1>{title}</h1>
              <p>{description}</p>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className='flip-card2'>
          <div className='flip-card-inner2'>
            <div className='flip-card-front2'>
            <img
                id={title == "Laboratory" ? 1 : 2}
                // decoding="async" 
                sizes="112px" 
                src={anal}
                // srcset="https://framerusercontent.com/images/InJLb5H5zY5lac8vbYff8VMWCU.png" 
                alt={title}
                style={{ marginTop: "70px" , width: "120px", height: "120px" }}
              />
              <h1>{title}</h1>
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
