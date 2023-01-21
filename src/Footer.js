import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./Footerstyle.css";
import { toast } from "react-toastify";
import axios from "axios";

function Footer() {
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: "",
      message: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Name is required"),
      mobile: yup
        .string()
        .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/gm, "Invalid Number")
        .required("Mobile Number is required"),
      email: yup
        .string()
        .email("Invalid email address")
        .required("Email is required"),
      message: yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      console.log(values)
      sendmail(values, null, 2);
    },
  });

  let sendmail = async (val) => {
    try {
      let res = await axios.post(
        "https://modelprinting-server.onrender.com/users/Message",
        val
      );
      toast.success("Mail sent Successfully");
    } catch (error) {
      toast.error("Mail not sent");
      console.log(error);
    }
  };

  return (
    <div className=" footer highlights">
      
      <div className="mainheading mx-auto">
        <b>Contact</b>
      </div>
      <br/>
      <div className="container  ">
        <div
          className="row d-flex flex-row  justify-content-md-center "
          id="contactUs"
        >
          <div
            className="col-12 col-md-6"
            id="contactForm"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-control"
                placeholder="Enter Name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              

              <label htmlFor="name">Mobile</label>
              <input
                id="mobile"
                name="mobile"
                type="mobile"
                className="form-control"
                placeholder="Enter Mobile"
                onChange={formik.handleChange}
                value={formik.values.mobile}
              />
              

              <label htmlFor="name">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                type="text"
                className="form-control"
                placeholder="Enter message"
                onChange={formik.handleChange}
                value={formik.values.message}
                style={{height:"150px"}}
              />
             
             {formik.touched.name && formik.errors.name ? (
                <div style={{ color: "red" }}>{formik.errors.name}</div>
              ) : formik.touched.mobile && formik.errors.mobile ? (
                <div style={{ color: "red" }}>{formik.errors.mobile}</div>
              ) :formik.touched.email && formik.errors.email ? (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              ) :    formik.touched.message && formik.errors.message ? (
                <div style={{ color: "red" }}>{formik.errors.message}</div>
              ) : null}
<br/>
           
<div class="d-grid gap-2 col-6 mx-auto">
              <button type="submit" className="btn btn-primary">
                Send Mail
              </button>
              
              </div>
              
            </form>
            <br/>
          </div>

          <div
            className="col-12 col-md-6"
            id="contactDetails"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <div className="contactinform">
              <p>Name: Rajesh Kumar</p>
              <p>Phone Number: +919551052326</p>
              <p>Address: 111/75 Palla Street,</p>
              <p>Korattur North,</p>
              <p>Tamilnadu, India</p>
              <p>Chennai-600 076</p>
              <p>Email:<a href="mailto:rajeshkumarmurugan1@gmail.com" target="_blank"> rajeshkumarmurugan1@gmail.com</a></p>
            </div>
            <div>
              <a
                href="https://wa.me/919551052326/?text=Hi%20there!%20We%20just%20wanted%20to%20let%20you%20know%20we%20received%20your%20message%20and%20will%20be%20in%20touch.."
                target="_blank"
              >
                <i
                  className="fa-brands fa-whatsapp-square fa-2xl"
                 
                ></i>
              </a> &nbsp;
              <a
                href="https://github.com/Rajeshkumar-Murugan"
                target="_blank"
              >
                <i class="fab fa-github-square fa-2xl"></i>
              </a> &nbsp; &nbsp;
              <a
                href="https://www.linkedin.com/in/rajesh-kumar-murugan-710841208"
                target="_blank"
              >
                <i className="fab fa-linkedin fa-2xl"></i>
              </a> &nbsp;

              <a href="https://twitter.com/Rajesh_Randolph" target="_blank">
                <i className="fa-brands fa-twitter fa-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footerdata ">
        <p className="text-center">Website designed by Rajesh Kumar</p>
      </div>
    </div>
  );
}

export default Footer;
