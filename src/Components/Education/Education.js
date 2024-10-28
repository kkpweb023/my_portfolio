import React from "react";
import './Education.css';


const Education = () =>{

    return(

        <div className="edu_div">
            <div className="edu">Education</div>


            <div className="edu_contents">

                <div className="secondary">


                        <div className="box" style={{marginBottom:'30px'}}>
                            <h5>2007-2008</h5>
                            <h4>Secondary School</h4>
                            <h6>Kendriya Vidyalaya,Mau</h6>
                            <small>Grade:First class distinction.</small>
                        </div>


                        <div className="box">
                            <h5>2009-2010</h5>
                            <h4>Senior Secondary School</h4>
                            <h6>Kendriya Vidyalaya,Mau</h6>
                            <small>Grade:First class distinction.</small>
                        </div>

                </div>


                <div className="bachelor">

                        <div className="box" style={{marginBottom:'30px'}}>
                            <h5>2010-2014</h5>
                            <h4>Bachelor of technology</h4>
                            <h6>B.S.A College of Engineering and Technology College,Mathura</h6>
                            <small>Grade:First class distinction.</small>
                        </div>



                        <div className="box">
                            <h5>2018-2020</h5>
                            <h4>Diploma in Elementary Education(D.EL.ED.)</h4>
                            <h6>Baba Rampyare Singh Shikshan Prashikshan Sansthan,Azamgarh</h6>
                            <small>Grade:First class distinction.</small>
                        </div>


                </div>



            </div>
        </div>
    );
};

export default Education;