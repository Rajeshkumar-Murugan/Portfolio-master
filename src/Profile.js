import React from "react";
import "./Profile.css";
import MyPDF from "./Rajesh_kumar_Resume.pdf";
import ProfilePic from "./Photos/CoverImage.jpg";
function Profile() {
  return (
    <>
      <div className="bg_one">
        <div className="container">
          <div
            className="row d-flex flex-row  justify-content-md-center"
            id="contactUs"
          >
            <div
              className="col-12 col-md-6 in-left"
              id="Profile"
              style={{ animationDuration: "2s" }}
            ></div>
            <div
              className="col-12 col-md-6 in-right"
              id="contactDetails"
              
            >
              <div className="contactinform">
                <h4>Rajesh Kumar . M</h4>

                <p>Computer Science Engineer</p>
                <p>
                  <b>Phone:</b>
                  <br />
                  9551052326
                </p>
                <p>
                  <b>Email:</b>
                  <br />
                  <a
                    href="mailto:rajeshkumarmurugan1@gmail.com"
                    target="_blank"
                  >
                    rajeshkumarmurugan1@gmail.com
                  </a>
                </p>
                <p>
                  <b>Address:</b>
                  <br />
                  No:111/75 Palla Street, Korattur North,
                  <br />
                  Tamilnadu, Chennai-600 076
                </p>
                <p>
                  <b>Date of birth:</b>
                  <br />
                  July 30th, 1996
                </p>
                <b>Resume: </b>
                
                <a href="https://drive.google.com/file/d/1dFkJl5RgvO-2i9wgGqr5WtkIwUNsS3j4/view?usp=sharing" download="Rajesh_kumar_Resume.pdf" target="_blank">
                  Click Here
                </a>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
