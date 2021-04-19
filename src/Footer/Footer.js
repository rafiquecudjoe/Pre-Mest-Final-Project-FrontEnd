import Footercss from "../Footer/Footer.module.css";

const Footer = () => {
  return (
    <div className={Footercss.footermain}>
      <div className={Footercss.footerlogo}></div>
      <div className={Footercss.footeritems}>
        {/* <div className={Footercss.footer1}></div>
        <div className={Footercss.footer2}></div> */}
        {/* <div className={Footercss.footer3}></div> */}
      </div>
      <div className={Footercss.footerbottom}></div>
    </div>
  );
};

export default Footer;
