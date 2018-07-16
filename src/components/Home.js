import React from "react";

const Home = () => {
  return (
    <div>
      <h1 className="display-1 text-center">Team Name</h1>
      <div className="row">
        <div className="col-1" />
        <div className="jumbotron col-10">
          <h1 className="display-4">About TeamName</h1>
          <p className="lead">
            An educational RPG to solve the problem of poor financial education
            in school leavers. A progressive web app, the game collects
            analytical data on player choices giving real-time visual feedback
            to the teacher.
          </p>
          <hr className="my-4" />
        </div>
        <div className="col-1" />
      </div>
      <div className="row">
        <div className="col-4 text-center">
          <h2>Brand 1</h2>
        </div>
        <div className="col-4 text-center">
          <h2>Brand 2</h2>
        </div>
        <div className="col-4 text-center">
          <h2>Brand 3</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
