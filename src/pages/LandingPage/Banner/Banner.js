import Bannercss from "../Banner/Banner.module.css";
import Button from "../../../components/appcomponents/button";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom"
import NavbarCom from "../Navbar";
import lazy from "react"

const Banner = () => {


  
  const history = useHistory();


  const sg = () => {
    history.push("/signup");
  };

  return (
    <div className={Bannercss.maindiv}>
      <div className={Bannercss.nav}>
        <NavbarCom/>
        {/* <div className={Bannercss.logo}>
          <img src={expresslogo} alt="logo" height="100%" width="100%"/>
        </div> */}
        {/* <div className={Bannercss.menulinks}>
          <Link to="/">HOME</Link>
          <Link to="/">PRICING</Link>
          <Link to="/">TRACKING</Link>
          <Link to="/">ABOUT</Link>
          <Link to="/"> CONTACT US</Link>
        </div> */}
        {/* <div className={Bannercss.navbuttons}>
          <Button style={{
            width: "45%",
            height: "50px"
          }} className="btn" text="LOGIN" onClick={lg} />
          <Button
            style={{
              width: "45%",
              height: "50px"
            }} className="btn" text="SIGNUP" onClick={sg} />
        </div> */}
      </div>
      <div className={Bannercss.main}>
        <div className={Bannercss.text_container}>
          <p className={Bannercss.uppertext}>
            Package Delivery for as low at Ghc5.00
          </p>
          <p className={Bannercss.downtext}>
            Send parcels door to door for low flat-rates, <br></br>across Kumasi
            and around the Country.
          </p>

          <Button style={{
            width: "30%",
            height: "50px"
          }} 
            className="btn" text="GET STARTED" onClick={sg} />
        </div>

        <div className={Bannercss.image_container}>
          <div className={Bannercss.img}>
            {/* <img classname={Bannercss.img} src={Delimage} alt="Bannersvg"/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
