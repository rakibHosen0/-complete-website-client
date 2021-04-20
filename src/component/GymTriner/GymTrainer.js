import React from "react";
import images from "../../assets/images/gymtrianer.png";
import "./GymTriner.css";

const GymTrainer = () => {
  return (
    <section className="bg p-5">
      <h1 className="text-center  "> GYM TRAINER</h1>
      <div className="row  d-flex align-items-center  justify-content-between">
        <div className="col-md-6 col-sm-12">
          <img
            className="img-fluid d-flex align-items-center p-5"
            src={images}
            alt=""
          />
        </div>
        <div className="col-md-6 col-sm-12 p-5">
          <h3>
            Everything to Expect Your <br />
            First Time With a Personal Trainer
          </h3>
        </div>
      </div>
    </section>
  );
};

export default GymTrainer;
