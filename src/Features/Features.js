import Featurescss from "./Features.module.css";
import pickup from "./img/pickup.svg";
import tools from "./img/tools.svg";
import support from "./img/support.svg";

const Features = () => {
  return (
    <div className={Featurescss.main}>
      <div className={Featurescss.text}>
        <rem className={Featurescss.uppertext}>
          <h1>
            <b>Parcel delivery for small business, but better</b>
          </h1>
        </rem>
        <p className={Featurescss.lowertext}>
          We tap into big business delivery networks and make them available to
          everyone. It's convenient,
          <br />
          affordable, and fully carbon offset. With Express Delivery, you'll
          also get these great features…
        </p>
      </div>
      <div className={Featurescss.features}>
        <div className={Featurescss.feature1}>
          <div className={Featurescss.image1}>
            <img src={pickup} alt="pickup" height="140px" width="140px" />
          </div>
          <div className={Featurescss.text1}>
            <p className={Featurescss.title}>Free pickup</p>
            <p className={Featurescss.ttext}>
              Spend more time on the fun stuff – <br />
              we pick up your parcels and deliver to
              <br /> your customers around Ghana.
            </p>
          </div>
        </div>
        <div className={Featurescss.feature2}>
          <div className={Featurescss.image2}>
            <img src={tools} alt="tools" height="140px" width="140px" />
          </div>
          <div className={Featurescss.text2}>
            <p className={Featurescss.title}>Powerful tools</p>
            <p className={Featurescss.ttext}>
              Everything you need in one place – <br />
              book in seconds, manage deliveries
              <br /> and keep customers in the loop.
            </p>
          </div>
        </div>
        <div className={Featurescss.feature3}>
          <div className={Featurescss.image3}>
            <img src={support} alt="support" height="140px" width="140px" />
          </div>
          <div className={Featurescss.text3}>
            <p className={Featurescss.title}>Amazing support</p>
            <p className={Featurescss.ttext}>
              Get easy access to detailed advice
              <br /> and support, powered by real people <br />
              who are always happy to help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
