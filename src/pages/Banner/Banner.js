import Bannercss from "../Banner/Banner.module.css";
import Delimage from "./img/Banner.svg";
import Button from "../../components/appcomponents/button";
import {useHistory} from "react-router-dom"

const Banner = () => {


    const history = useHistory();

    const lg = () => {
        history.push('/login')
    }

    const sg = () => {
         history.push('/signup')
     }

  return (
    <div className={Bannercss.maindiv}>
      <div className={Bannercss.nav}>
        <div className={Bannercss.logo}></div>
              <div className={Bannercss.menulinks}>
                  <a  href="#">HOME</a>
                  <a href="#">PRICING</a>
                  <a href="#">TRACKING</a>
                  <a href="#">ABOUT</a>
                  <a href="#">CONTACT US</a>
                      
                  
                  
        </div>
              <div className={Bannercss.navbuttons}>
                  <Button text="LOGIN" onClick={lg}/>
                  <Button text="SIGNUP" onClick={sg }/>
        </div>
      </div>
      <div className={Bannercss.main}>
        <div className={Bannercss.text_container}>
          <p className={Bannercss.uppertext}>
            Package Delivery for as low at Gh5.00
          </p>
          <p className={Bannercss.downtext}>
            Send parcels door to door for low flat-rates, <br></br>across Kumasi
            and around the Country.
          </p>

          <Button text="GET STARTED" />
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
