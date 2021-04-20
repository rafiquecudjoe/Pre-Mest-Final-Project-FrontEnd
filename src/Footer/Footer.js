import Footercss from "../Footer/Footer.module.css";
import elogo from "../ExpressDelivery.png";
import { Link } from "react-router-dom";
import { FaFacebookF,FaInstagram,FaTwitter,FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className={Footercss.footermain}>
      <div className={Footercss.logo}>
        <img src={elogo} alt="elogos" width="100px" height="100px" />
      </div>
      <div className={Footercss.text}>
        <div className={Footercss.text1}></div>
        <div className={Footercss.text2}></div>
        <div className={Footercss.text3}></div>
      </div>
      <div className={Footercss.copy}>
        <div>All Rights Reserserved . © Express Delivery</div>
        <div className={Footercss.links}>
          <Link>
          <FaFacebookF />
          
          </Link>
     
          <Link>
            
            <FaLinkedin/>
          </Link>
          <Link>
            
            <FaInstagram/>
          </Link>
          <Link>
            
            <FaTwitter/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
