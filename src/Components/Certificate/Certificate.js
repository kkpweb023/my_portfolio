import React from "react";
import './Certificate.css';


const Certificate = () =>{

    return(

        <div className="cert_div" id="certificate">
            <div className="cert">Certificate</div>


            <div className="cert_contents">

                <div className="first_cert">


                        <div className="boxs" style={{marginBottom:'10px'}}>
                            <h4>Electronism - Mega Quiz certificate</h4>
                            <h6>BSACET,Mathura</h6>
                            <small>Year:2011</small>
                        </div>


                        <div className="boxs" style={{marginBottom:'10px'}}>
                            <h4>PG Diploma in Automation Research & Technology</h4>
                            <h6>ARTLAB and SOFCON,NOIDA</h6>
                            <small>Year:2014</small>
                        </div>


                        <div className="boxs">
                            <h4>CCNA - Routing and Switching</h4>
                            <h6>USA</h6>
                            <small>Year:2017</small>
                        </div>

                </div>


                <div className="second_cert">

                        <div className="boxs" style={{marginBottom:'10px'}}>
                            <h4>Course on Computer Concepts (CCC)</h4>
                            <h6>NIELIT</h6>
                            <small>Year:2018</small>
                        </div>



                        <div className="boxs" style={{marginBottom:'10px'}}>
                            <h4>Uttar Pradesh Teacher Eligibility Test(UPTET)</h4>
                            <h6>PRAYAGRAJ</h6>
                            <small>Year:2020</small>
                        </div>


                        <div className="boxs">
                            <h4>Central Teacher Eligibility Test(CTET)</h4>
                            <h6>Delhi</h6>
                            <small>Year:2021</small>
                        </div>


                </div>

            </div>

            <hr className="cert_hr"></hr>
        </div>
    );
};

export default Certificate;