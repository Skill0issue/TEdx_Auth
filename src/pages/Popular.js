import React from "react";
import { Link } from "react-router-dom";
import Popular1 from "../Images/popular-1.jpg";
import Popular2 from "../Images/popular-2.jpg";

 const Popular = () => {
  const HoverDisplay = (id)=>{
      const Hover = document.querySelector(id);

      Hover.style.setProperty('display','initial');
  }
  const NoHoverDisplay = (id)=>{
      const Hover = document.querySelector(id);
      Hover.style.setProperty('display','none');
  }
  return (
    <div className="Popular-stuff">
    <h1 className="PopularHeading">Most Popular Blogs To Date</h1>
      <section className="Popular-box">
        <Link to="/Blog/1" className="Popular1" onMouseEnter={()=>  HoverDisplay('.About1')} onMouseLeave={()=> NoHoverDisplay('.About1')} >
          <div className="Bg1" style={{backgroundImage:`url(${Popular1})`}}>
            <span className="About1">
              <h1 id="About1" >Popular-1</h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cum
              hic animi, laboriosam tenetur nesciunt, velit iusto vel quis
              debitis omnis blanditiis magnam quos. Sed impedit explicabo,
              nesciunt harum doloremque error ipsam repudiandae porro illo
              dolorum magni labore, nisi consequuntur autem? Vero minus officia
              consequuntur beatae aperiam laborum culpa asperiores?
            </span>
          </div>
        </Link>
        <Link to="/Blog/2" className="Popular2" onMouseEnter={()=> HoverDisplay('.About2')} onMouseLeave={()=> NoHoverDisplay('.About2')} >
          <div className="Bg2" style={{backgroundImage:`url(${Popular2})`}}>
            <span className="About2">
            <h1 id="About2" >Popular-2</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cum
              hic animi, laboriosam tenetur nesciunt, velit iusto vel quis
              debitis omnis blanditiis magnam quos. Sed impedit explicabo,
              nesciunt harum doloremque error ipsam repudiandae porro illo
              dolorum magni labore, nisi consequuntur autem? Vero minus officia
              consequuntur beatae aperiam laborum culpa asperiore
            </span>
          </div>
        </Link>
      </section>
      <section className="Sign_In_button">
        <Link to="/SignIn" className="Svg_Section">
          <svg className="pointers"           
           width="120"
            height="100"
            viewBox="0 0 120 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Frame 1" >
              <g id="LightGroupLeft">
                <path
                  id="Light1Left"
                  opacity="0.7"
                  d="M14.3827 28.6961C14.3827 26.3867 16.8827 24.9434 18.8827 26.0981L50.3827 44.2846C52.3827 45.4393 52.3827 48.3261 50.3827 49.4808L18.8827 67.6673C16.8827 68.822 14.3827 67.3786 14.3827 65.0692L14.3827 28.6961Z"
                />
              </g>
              <g id="DarkGroupLeft">
                <path
                  id="Dark1Left"
                  opacity="0.7"
                  d="M34.3827 28.6961C34.3827 26.3867 36.8827 24.9434 38.8827 26.0981L70.3827 44.2846C72.3827 45.4393 72.3827 48.3261 70.3827 49.4808L38.8827 67.6673C36.8827 68.822 34.3827 67.3786 34.3827 65.0692L34.3827 28.6961Z"
                />
                <path
                  id="Dark2Left"
                  opacity="0.7"
                  d="M14.3827 28.6961C14.3827 26.3867 16.8827 24.9434 18.8827 26.0981L50.3827 44.2846C52.3827 45.4393 52.3827 48.3261 50.3827 49.4808L18.8827 67.6673C16.8827 68.822 14.3827 67.3786 14.3827 65.0692L14.3827 28.6961Z"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_1_2">
                <rect width="120" height="100" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p>Sign In</p>
          <svg className="pointers" 
            width="120"
            height="100"
            viewBox="0 0 120 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Frame 1">
              <g id="LightGroupRight">
                <path
                  id="Light1Right"
                  opacity="0.7"
                  d="M96.3827 65.0692C96.3827 67.3786 93.8827 68.822 91.8827 67.6673L60.3827 49.4808C58.3827 48.3261 58.3827 45.4393 60.3827 44.2846L91.8827 26.0981C93.8827 24.9434 96.3827 26.3868 96.3827 28.6962L96.3827 65.0692Z"
                />
              </g>
              <g id="DarkGroupRight">
                <path
                  id="Dark1Right"
                  opacity="0.7"
                  d="M75.3827 65.0692C75.3827 67.3786 72.8827 68.822 70.8827 67.6673L39.3827 49.4808C37.3827 48.3261 37.3827 45.4393 39.3827 44.2846L70.8827 26.0981C72.8827 24.9434 75.3827 26.3868 75.3827 28.6962L75.3827 65.0692Z"
                />
                <path
                  id="Dark2Right"
                  opacity="0.7"
                  d="M96.3827 65.0692C96.3827 67.3786 93.8827 68.822 91.8827 67.6673L60.3827 49.4808C58.3827 48.3261 58.3827 45.4393 60.3827 44.2846L91.8827 26.0981C93.8827 24.9434 96.3827 26.3868 96.3827 28.6962L96.3827 65.0692Z"
                />
              </g>
            </g>
          </svg>
        </Link>
      </section>
    </div>
  );
};

export default Popular;
