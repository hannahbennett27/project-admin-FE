import React from "react";
import creditwise from "../images/credit-wise-logo-final.png";

const Home = () => {
  return (
    <div>
      {/* <h1 className="display-1 text-center mb-5 mt-5">Credit Wise</h1> */}
      <img src={creditwise} className="mx-auto d-block mb-3 mt-3" />
      <div className="row">
        <div className="col-1" />
        <div className="container col-10">
          <h1 className="display-4 text-center text-secondary">
            An educational role-playing game; introducing school classrooms to
            financial responsibility and helping to solve the problem of poor
            financial know-how in school leavers
          </h1>
          <hr className="my-4" />
        </div>
        <div className="col-1" />
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-4 text-center">
            <i className="fas fa-chart-line display-3 brandicon" />
            <h2 className="mt-2 brandicon">Analysis</h2>
            <p className="brandfont">
              Collects data on player choices, giving real-time and
              retrospective visual feedback to the teacher
            </p>
          </div>
          <div className="col-4 text-center">
            <i className="fas fa-question display-3 brandicon" />
            <h2 className="mt-2 brandicon">Realistic</h2>

            <p className="brandfont">
              In-game circumstances and decision making mimic real life
            </p>
          </div>
          <div className="col-4 text-center">
            <i className="fas fa-plus display-3 brandicon" />
            <h2 className="mt-2 brandicon">Modern</h2>
            <p className="brandfont">
              A Progressive Web App; playable by children online and offline,
              even in remote areas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
