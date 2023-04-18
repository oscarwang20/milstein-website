import React, { Component } from "react";
import photo from "./group-dinner-2.svg";
import "./index.css";

const Index: React.FC = () => {
  return (
    <div>
      <div className="group-photo">
        <img className="photo" src={photo} alt="milstein" />
      </div>
      <div className="title">
        <p>Milstein Program Internship Resources</p>
      </div>
      <hr />
      <div className="description">
        <p>
          Welcome to the Milstein Program Internship Resources website! The goal
          of this site is to thoroughly catalog the extra-curricular experiences
          of Milstein Students, which includes paid and unpaid internships,
          research, fellowships, other academic opportunities for Milsteiners.
        </p>
      </div>
      <hr />
      <div className="madewith">
        <p>Made with &lt;3 by Milsteiners for Milsteiners</p>
      </div>
    </div>
  );
};

export default Index;
