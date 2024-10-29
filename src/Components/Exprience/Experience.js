import React from "react";
import './Experience.css';

const Experience = () =>{

    return(

        <div className="exp_div">
            <div className="exp">Experience</div>

            <div className="exp_contents">

                <div className="company">
                        <div className="box_exp" style={{marginBottom:'30px'}}>
                            <h5>2015-2017</h5>
                            <h4>NOC Engineer Transmission</h4>
                            <h6>Tata Teleservices Ltd(TTSL), Noida</h6>
                            <small>Tasks:Troubleshooting,Alarm monitoring and fault diagnosis on Tellabs 8660.</small>
                        </div>
                </div>

                <div className="teaching">
                        <div className="box_exp" style={{marginBottom:'30px'}}>
                            <h5>2022-Present</h5>
                            <h4>Teaching</h4>
                            <h6>Private School/Home Tuition</h6>
                            <small>Tasks:Teach computer science(class 6 to 10) and Maths(class 4 to 8).</small>
                        </div>
                </div>
            </div>

            <hr className="exp_hr"></hr>
        </div>
    );
};

export default Experience;