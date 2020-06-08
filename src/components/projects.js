import React from "react";
import "./style.css";
import logo from "../images/logo.jpg";
function Projects() {
  return (
    <div className="section">
      <div className="row">
        <div className="col-xs-3" style={{ borderRadius: "50px!important" }}>
          <img
            src={logo}
            alt="Skill"
            style={{ borderRadius: "50%!important" }}
          />
        </div>
        <div className="col-xs-9">
          <div className="ptitle">
            <h1>Projects</h1>{" "}
          </div>

          <div className="pbody">
            <h1> About Projects</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;