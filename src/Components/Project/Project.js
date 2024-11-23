import React from "react";
import "./Project.css";
import { FaUserGraduate } from "react-icons/fa";
import { WiDayThunderstorm } from "react-icons/wi";
import { TiShoppingCart } from "react-icons/ti";
import { FaTableCellsColumnLock } from "react-icons/fa6";

const Project = () => {
  return (
    <div className="pro_div" id="project">
            <div className="qutoes">"Management is,above all,apractice where art,science and craft meet."</div>
      <div className="pro">Project</div> 
  
      <div className="pro_contents">
        <div className="pro_box">
          <div className="round">
            <span className="icon"><FaUserGraduate /></span>
          </div>
            <h5>E-Learning</h5>
            <a href="https://kkpweb023.github.io/my_school/" target="_blank" rel="noreferrer">Visit Us</a>
        </div>

        <div className="pro_box">
          <div className="round">
          <span className="icon"><WiDayThunderstorm /></span>
           </div>
            <h5>Weather Forecast</h5>
            <a href="https://kkpweb023.github.io/reactJS/weather" target="_blank" rel="noreferrer">Visit Us</a>

        </div>

        <div className="pro_box">
          <div className="round">
          <span className="icon"><TiShoppingCart /></span>
          </div>
            <h5>E-Commerce</h5>
            <a href="https://kkpweb023.github.io/e_commerce/" target="_blank" rel="noreferrer">Visit Us</a>
        </div>

        <div className="pro_box">
          <div className="round">
          <span className="icon"><FaTableCellsColumnLock /></span>
          </div>
            <h5>Table Pagination</h5>
            <a href="https://kkpweb023.github.io/reactJS/tablePagi" target="_blank" rel="noreferrer">Visit Us</a>
        </div>
      </div>
      <hr className="pro_hr"></hr>
    </div>
  );
};
export default Project;
