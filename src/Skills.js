import React from "react";
import "./Skills.css";
import sqlpic from "./Photos/mysql-logo-circle.png"
import formik from "./Photos/Formik.png"
import github from "./Photos/github.png"
import vscode from "./Photos/vscode.svg"
import html from "./Photos/html.png"
import expressjslogo from "./Photos/expressjslogo.png"
import Js from "./Photos/Js.png"
import css from "./Photos/css.png"
import mongodb from "./Photos/mongodb.png"
import bootstrap from "./Photos/bootstrap.png"
import react from "./Photos/react.png"
import nodejs from "./Photos/nodejs.png"

function Skills() {


  
  return (
    <div className="bg_two">
      <div className="mainheading ">
        <b>Skills</b>
      </div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div
              className="transparentbg" 
              data-aos="fade-right"
              data-aos-duration="1000"
              // data-aos-easing="ease-in-sine"
            >
              Frontend (HTML, CSS, JavaScript, React)
            </div>
            <br />

            <div
              className="transparentbg " data-aos="fade-right"
              data-aos-duration="1000"
              style={{ animationDuration: "2s" }}
            >
              Backend (Node Js, Express, MangoDB)
            </div>
            <br />

            <div
              className="transparentbg " data-aos="fade-right"
              data-aos-duration="1000"
              style={{ animationDuration: "3s" }}
            >
              Libraries (Bootstrap, formik, axios)
            </div>
            <br />
          </div>
          <div className="col-12 col-md-6">
            <div
              className="transparentbg " data-aos="fade-left"
              data-aos-duration="1000"
              style={{ animationDuration: "2.5s" }}
            >
              Software Testing-Manual and Selenium Automation Tool
            </div>
            <br />
            <div className="transparentbg " data-aos="fade-left"
              data-aos-duration="1000">
              Computer Hardware - Proficient
            </div>
            <br />
            <div className="transparentbg " data-aos="fade-left"
              data-aos-duration="1000">
              Tae Kwon Do player - Senior level
            </div>
            <br />
          </div>

          
        </div>
        
      </div>
      <div className="container-fluid ">
      <div className="row">
        
        <div className="col-12 col-md-6 d-flex justify-content-around">
        
              <img
                src={html}
                className="SkillIcons " data-aos="fade-right"
              data-aos-duration="1000" 
                style={{ animationDuration: "2s" }}
               
              />
           

          
              <img
                src={css}
                className="SkillIcons " data-aos="fade-right"
              data-aos-duration="1000"
                style={{ animationDuration: "3s" }}
              />
            

            
              <img
                src = {Js}
                className="SkillIcons " data-aos="fade-right"
              data-aos-duration="1000"
                style={{ animationDuration: "4s" }}
              />
                        
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-around">        
           
              <img
                src={nodejs}
                className="SkillIcons " data-aos="fade-right"
              data-aos-duration="1000"
                style={{ animationDuration: "5s" }}
              />
           
            
            
              <img
                src={expressjslogo}
                className="SkillIcons " data-aos="fade-right"
              data-aos-duration="1000"
                style={{ animationDuration: "6s" }}
              />
           
            
              <img
                src={mongodb}
                className="SkillIcons " data-aos="fade-right"
              data-aos-duration="1000"
                style={{backgroundColor:"white", borderRadius:"10px", animationDuration: "7s" }}
              />
            
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-around">
        
              <img
                src={react}
                className="SkillIcons " data-aos="fade-left"
              data-aos-duration="1000"
                style={{ animationDuration: "7s" }}
              />
          
            
              <img
                src ={bootstrap}
                className="SkillIcons " data-aos="fade-left"
              data-aos-duration="1000"
                style={{ animationDuration: "6s" }}
              />
           
            
              <img
                src ={formik}
                className="SkillIcons " data-aos="fade-left"
              data-aos-duration="1000"
                style={{ animationDuration: "5s" }}
              />
           
            
          </div>
        <div className=" col-12 col-md-6 d-flex justify-content-around">
                   
           
              <img
                src={vscode}
                className="SkillIcons " data-aos="fade-left"
              data-aos-duration="1000"
                style={{ animationDuration: "4s" }}
              />
           
            
              <img
                src={github}
                className="SkillIcons " data-aos="fade-left"
              data-aos-duration="1000"
                style={{backgroundColor:"white", borderRadius:"50px", animationDuration: "3s" }}
              />
              <div data-aos="zoom-in">

              <img
                src={sqlpic}
                className="SkillIcons " data-aos="fade-left"
              data-aos-duration="1000"
                style={{ animationDuration: "2s" }}
              />
              </div>

            
        </div>
        </div> 
        <br/> 
      </div>
      
    </div>
  );
}

export default Skills;
