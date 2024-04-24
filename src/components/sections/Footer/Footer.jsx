
import { FaFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

import './Footer.css';

function Footer() {
  return (
    <div className="footer d-flex justify-content-around align-items-center">
      <div className="footerIcons fs-3 d-flex justify-content-around align-items-center">
        <FaFacebook className="FIcon me-2"/>
        <FaSquareTwitter className="FIcon me-2"/>
        <FaSquareInstagram className="FIcon me-2"/>
        <FaLinkedin className="FIcon me-2"/>
      </div>
      <div className="FTitle ">
       <h4 className="text-white fw-bolder">Yummy</h4>
      </div>
      <div className="FRight text-white ">
        <p>
        © Copyright 2024.
        </p>
      </div>
    </div>
  )
}

export default Footer
