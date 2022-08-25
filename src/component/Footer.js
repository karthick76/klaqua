import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <a
    href="https://wa.me/+919677779824"
    class="whatsapp_float"
    target="_blank"
    rel="noopener noreferrer"
  >
     <img class="img" src="https://seeklogo.com/images/W/whatsapp-icon-logo-BDC0A8063B-seeklogo.com.png" />
  </a>
  <a
    href="tel:+919677779824"
    class="whatsapp1_float"
    target="_blank"
    rel="noopener noreferrer"
  >
     <img class="img1" src="http://www.clker.com/cliparts/p/W/M/F/8/n/phone-green-press-md.png" />
  </a>
    <div className="card text-center bg-dark">
  <div className="card-footer text-muted">
  <a>Follow As</a>
  <div className="container">
  <div className="row">
    <div className="col-sm">
      Contact us 
    </div>
    <div className="col-sm">
       Our Services
    </div>
    <div className="col-sm">
    Privacy Policy
    </div>

    <div className="col-sm">
    Terms & Conditions
    </div>
  </div>
  <br/>
  <div className="col-sm">
  KL AQUATECH 31/10 TRUNK ROAD, ARCH VALAIVU, THIRUVANAIKOVIL, TRICHY, TAMILNADU-620005
  </div>
  <div className="col-sm">
  KL AQUATECH © 2022 - All rights reserved || Developed By: <a target="_blank" href="https://github.com/karthick76">Karthick</a>
  </div>
</div>
  </div>
</div>
</>
  );
};
export default Footer;