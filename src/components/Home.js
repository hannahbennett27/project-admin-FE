import React from 'react';
const Home = () => {
  return (
    <div>
      <h1 className="display-1 text-center mb-5 mt-5">Credit Wise</h1>
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
            <i className="fas fa-chart-line display-3" />
            <h2 className="mt-2">Analysis</h2>
            <p>
              Collects data on player choices, giving real-time and
              retrospective visual feedback to the teacher
            </p>
          </div>
          <div className="col-4 text-center">
            <i className="fas fa-question display-3" />
            <h2 className="mt-2">Realistic</h2>

            <p>In-game circumstances and decision making mimic real life</p>
          </div>
          <div className="col-4 text-center">
            <i className="fas fa-plus display-3" />
            <h2 className="mt-2">Modern</h2>
            <p>
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
