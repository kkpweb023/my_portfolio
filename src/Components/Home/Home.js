import React from "react";
import "./Home.css";
import ProfileLogo from '../../Images/ProfileLogo.jpg';
import { ReactTyped } from "react-typed";
import { IoMdDownload } from "react-icons/io";

import PDF_FILE from '../../Images/Resume.pdf';

const Home = () => {

  const download_Resume = (url) => {

    const fileName = url.split("/").pop();
    const aTag = document.createElement("a")
    aTag.href = url;
    aTag.setAttribute("download",fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();

  };                            

  return (

    <>
    <div className="Home_div" id="home">

      <div className="home_content">
        <div className="Quates_Content">
          <div className="head">Hello,my name is</div>
          <div className="Quates">Kaushal Kishor Pandey</div>
          <div className="proffesion">
            <span>And I'm a </span>
            <ReactTyped
                strings={["Computer Teacher","Maths Teacher","Coder","Network Engineer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
                style={{color:"red",fontWeight:'bold'}}

            />
          </div>
          <div style={{marginTop:"20px"}} className="message">
          Implementing best pedogogical practises can be yearly impossible.We make it easy.Improved pedagogical practices strengthens the performance of student teachers by a blended learning approach.
          </div>

          {/*------------Social media icons starts------------*/}


          <div className="icons" >
            <button onClick={()=>download_Resume(PDF_FILE)}><IoMdDownload /> DOWNLOAD CV</button>
          </div>
         

        </div>
        
        <img src={ProfileLogo}  alt='study_pic' className='img' />

      </div>
    </div>
    <hr className="home_hr"/>
   
    </>
  );
};
export default Home;
