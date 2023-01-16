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
              className="transparentbg in-left"
              style={{ animationDuration: "1s" }}
            >
              Fronend (HTML, CSS, JavaScript, React)
            </div>
            <br />

            <div
              className="transparentbg in-left"
              style={{ animationDuration: "2s" }}
            >
              Backend (Node Js, Express, MangoDB)
            </div>
            <br />

            <div
              className="transparentbg in-left"
              style={{ animationDuration: "3s" }}
            >
              Libraries (Bootstrap, formik, axios)
            </div>
            <br />
          </div>
          <div className="col-12 col-md-6">
            <div
              className="transparentbg in-right"
              style={{ animationDuration: "2.5s" }}
            >
              Software Testing-Manual and Selenium Automation Tool
            </div>
            <br />
            <div className="transparentbg in-right">
              Computer Hardware - Proficient
            </div>
            <br />
            <div className="transparentbg in-right">
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
                className="SkillIcons in-left" 
                style={{ animationDuration: "2s" }}
               
              />
           

          
              <img
                src={css}
                className="SkillIcons in-left"
                style={{ animationDuration: "3s" }}
              />
            

            
              <img
                src = {Js}
                className="SkillIcons in-left"
                style={{ animationDuration: "4s" }}
              />
                        
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-around">        
           
              <img
                src={nodejs}
                className="SkillIcons in-left"
                style={{ animationDuration: "5s" }}
              />
           
            
            
              <img
                src={expressjslogo}
                className="SkillIcons in-left"
                style={{ animationDuration: "6s" }}
              />
           
            
              <img
                src={mongodb}
                className="SkillIcons in-left"
                style={{backgroundColor:"white", borderRadius:"10px", animationDuration: "7s" }}
              />
            
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-around">
        
              <img
                src={react}
                className="SkillIcons in-right"
                style={{ animationDuration: "7s" }}
              />
          
            
              <img
                src ={bootstrap}
                className="SkillIcons in-right"
                style={{ animationDuration: "6s" }}
              />
           
            
              <img
                src ={formik}
                className="SkillIcons in-right"
                style={{ animationDuration: "5s" }}
              />
           
            
          </div>
        <div className=" col-12 col-md-6 d-flex justify-content-around">
                   
           
              <img
                src={vscode}
                className="SkillIcons in-right"
                style={{ animationDuration: "4s" }}
              />
           
            
              <img
                src={github}
                className="SkillIcons in-right"
                style={{backgroundColor:"white", borderRadius:"50px", animationDuration: "3s" }}
              />
              <div data-aos="zoom-in">

              <img
                src={sqlpic}
                className="SkillIcons in-right"
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
