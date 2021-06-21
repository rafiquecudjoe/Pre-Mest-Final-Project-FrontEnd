import Footercss from "../Footer/Footer.module.css";
import elogo from "../../../ExpressDelivery.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={Footercss.footermain}>
      <div className={Footercss.logo}>
        <img src={elogo} alt="elogos" width="100px" height="100px" />
      </div>
      <div className={Footercss.text}>
        <div className={Footercss.text1}>
          <p>
            Express Delivery is a registered Company and the first 100% carbon neutral
            shipping carrier in Ghana.
            </p>
      
          </div>
        <div className={Footercss.text2}>
          <div className={Footercss.footerlinks2head}>
            <h2>About</h2>
          </div>
          <div className={Footercss.footerlinks2}>
            <ul>
              <li>About Express Delivery</li>
              <li>Guarantees</li>
              <li>Customer Stories</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
        <div className={Footercss.text3}>
          <div className={Footercss.footerlinks3head}>
            <h2>Our Products</h2>
          </div>
          <div className={Footercss.footerlinks3}>
            <ul>
              <li>Plans and Prices</li>
              <li>Get a Quote</li>
              <li>Track a Package</li>
            </ul>
          </div>
        </div>
        <div className={Footercss.text4}>
          <div className={Footercss.footerlinks4head}>
            <h2>Resources</h2>
          </div>
          <div className={Footercss.footerlinks4}>
            <ul>
              <li>Help Center</li>
              <li>Blog</li>
              <li>Parcel Guide</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={Footercss.copy}>
        <div className={Footercss.arr}>
          All Rights Reserserved . © Express Delivery
        </div>
        <div className={Footercss.links}>
          <Link>
            <FaFacebookF />
          </Link>

          <Link>
            <FaLinkedin />
          </Link>
          <Link>
            <FaInstagram />
          </Link>
          <Link>
            <FaTwitter />
          </Link>
          <Link>
            <FaWhatsapp />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
