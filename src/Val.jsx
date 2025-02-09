import { useState } from "react";
import Confetti from "react-confetti";

export default function Val(){

        const [position, setPosition] = useState({ x: 0, y: 0 });
        const handleHover = () => {
          const randomX = Math.random() * 200 - 100; 
          const randomY = Math.random() * 200 - 100;
          setPosition({ x: randomX, y: randomY });
        };

        const [image ,setimage] = useState("https://i.pinimg.com/originals/db/9a/31/db9a31068e5698b3affca6fed8b9b670.gif");

        const [heading ,setheading] = useState("Will you be my Valentine");

        const [firecracker ,setFirecracker] = useState(false);

        const Change =()=>{
            setimage( "https://media.tenor.com/pG5ZiSIOxesAAAAM/brown-line.gif");

            setheading("thank You");

            setFirecracker(true);
            setTimeout(()=> setFirecracker(false) ,10000);
        };

        
        return (
            <div className="maindiv">
              {firecracker && <Confetti width={window.innerWidth} height={window.innerHeight} />} 
              <h1>{heading}</h1>
              <img src={image} alt="Valentine" />
              <br />
              <button className="btn1" onClick={Change}>Yes</button>
              <button
                onClick={handleHover}
                style={{
                  position: "relative",
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  transition: "transform 0.1s ease-in-out",
                  cursor: "pointer",
                }}> No </button>
            </div>
          );
        }