// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import { SignIn } from "./signin";
// import { SignUp } from "./signup";
import "./pages.css";

export function PagesContainerHeader() {
  return (
    <div className="container">
  
        <header className="header">
          <p>Welcome To</p>
          <span className="header-infinity">
            <img
              className="infinity-logo"
              src="https://www.seekpng.com/png/full/437-4374997_infinity-red-web-design-favicon-infinity.png"
              alt="loading"
            />
            <h1>INFINITY</h1>
          </span>
        </header>
        <p className="left-container-about">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
        
      {/* <div className="right-container"></div> */}
    </div>
  );
}


export function PagesContainerFooter() {
  

}