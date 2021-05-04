import Express404css from "./Express404.module.css";
import image from "./15.png";
import Button from "../../components/appcomponents/button";
import logo from "./expresslogo3.png";
import {Link} from "react-router-dom"

const Express404 = () => {



  return (
    <div className={Express404css.main}>
      <div className={Express404css.barner}>
        <div className={Express404css.logo}>
          {" "}
          <img src={logo} alt="logo" height="100%" width="70%" />{" "}
        </div>
        <div className={Express404css.links}>
          <Link style={{color:"black",fontWeight:"bolder",fontSize:"20px"}}>Contact Us</Link>
          <Link style={{color:"black",fontWeight:"bolder",fontSize:"20px"}}>Help</Link>
        </div>
      </div>
      <div className={Express404css.content}>
        <div className={Express404css.leftdiv}>
          <h3
            style={{
              marginBottom: "30px",
              fontWeight: "100px",
              fontSize: "50px",
            }}
          >
            I have bad
            <br /> news for you
          </h3>
          <p>
            The page you are looking for might be
            <br /> removed or is temporily Unavailable
          </p>
                  <Link to="/">
                  <Button  text="Come Home" style={{ height: "40px", width: "120px",onmouseover:"pointer" }} />
                  </Link>
         
        </div>
        <div className={Express404css.rightdiv}>
          <img src={image} alt="image" height="100%" width="100%" />
        </div>
      </div>
    </div>
  );
};

export default Express404;
