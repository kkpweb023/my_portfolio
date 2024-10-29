import React from "react";
import './Skills.css';


const Skills = () =>{

    return(

        <div className="skills">

            <div className="heading">My <span>Skills</span></div>

            <div className="skills-row">

            {/*=======================Coding Skills ==================*/}

                <div className="skills-column">
                    <div className="title">Coding Skills</div>

                    <div className="skills-box">
                        <div className="skills-content">

                            <div className="progress_div">
                                <div className="h_3">HTML <span>90%</span></div>
                                <div className="bar"><span></span></div>
                            </div>

                            <div className="progress_div">
                                <div className="h_3">CSS <span>70%</span></div>
                                <div className="bar"><span></span></div>
                            </div>


                            <div className="progress_div">
                                <div className="h_3">JavaScript <span>50%</span></div>
                                <div className="bar"><span></span></div>
                            </div>

                            <div className="progress_div">
                                <div className="h_3">ReactJS <span>65%</span></div>
                                <div className="bar"><span></span></div>
                            </div>


                            <div className="progress_div">
                                <div className="h_3">Python <span>40%</span></div>
                                <div className="bar"><span></span></div>
                            </div>


                        </div>
                    </div>

                </div>

            {/*=======================Teaching Skills ==================*/}


            <div className="skills-column">
                    <div className="title">Teaching Skills</div>

                    <div className="skills-box">
                        <div className="skills-content">

                            <div className="progress_div">
                                <div className="h_3">Computer Science <span>95%</span></div>
                                <div className="bar"><span></span></div>
                            </div>

                            <div className="progress_div">
                                <div className="h_3">Maths <span>75%</span></div>
                                <div className="bar"><span></span></div>
                            </div>


                            <div className="progress_div">
                                <div className="h_3">Science <span>50%</span></div>
                                <div className="bar"><span></span></div>
                            </div>

                            <div className="progress_div">
                                <div className="h_3">Hindi <span>70%</span></div>
                                <div className="bar"><span></span></div>
                            </div>


                            <div className="progress_div">
                                <div className="h_3">English <span>40%</span></div>
                                <div className="bar"><span></span></div>
                            </div>



                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Skills;