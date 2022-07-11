import React from "react";
import "./Footer.css";
import Logo from "../Images/logo1.png";

const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="Footer">
                <img src={Logo} alt="" /></div>
               <div className="footertext">
                    <div><p>Term and Privacy Notice Send us feedback Help</p></div>&nbsp;
                    <div> <span> &#169; 1996-2022, Amazon.com,inc,or its affiliates</span></div>
            </div><br />
            <div className="footerline">

            </div>
        </div>

    );


}
export default Footer;