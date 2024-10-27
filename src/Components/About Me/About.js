import React from "react";
import './About.css';
import aboutPic from '../../Images/About_img.jpg';

const About = () =>{

    return(

        <div className="about_div">

            <img src={aboutPic}  alt='study_pic' className='img_about' />

            <div className="profile_div">

                <h2>About Me</h2>
                <div className="profile_sub">Computer <span style={{color:'red'}}>& Maths Teacher</span></div>

                <p className="about_profile">
                    Hello world! I am Kaushal Kishor Pandey, a computer and math teacher based in Uttar Pradesh. I have been teaching math and computer science privately and in the state sector for many years, with plenty of experience working with students who find the subject challenging. I offer both residential and online tutorials to students, and I very much enjoy working with students and seeing their confidence in the subject improve over time.
                </p>
                
            </div>

            <hr className="about_hr"></hr>
        </div>
    );
};

export default About;