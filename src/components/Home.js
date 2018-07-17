import React from "react";
const Home = () => {
  return (
    <div>
      <h1 className="display-1 text-center mb-5 mt-5">
        Bacon<span>
          <i class="fas fa-piggy-bank display-4" />
        </span>
      </h1>
      <div className="row">
        <div className="col-1" />
        <div className="container col-10">
          <h1 className="display-4 text-center text-secondary">
            An educational RPG to solve the problem of poor financial education
            in school leavers.
          </h1>
          <hr className="my-4" />
        </div>
        <div className="col-1" />
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-4 text-center">
            <i className="fas fa-chart-line display-3" />
            <h2 className="mt-2">Data</h2>
            <p>
              The game collects analytical data on player choices giving
              real-time visual feedback to the teacher.
            </p>
          </div>
          <div className="col-4 text-center">
            <i className="fas fa-question display-3" />
            <h2 className="mt-2">Realistic</h2>
            <p>Real life in-game decisions</p>
          </div>
          <div className="col-4 text-center">
            <i class="fas fa-plus display-3" />
            <h2 className="mt-2">Modern</h2>
            <p>
              Being a progressive web app, the game game be played by children
              even in remote areas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
