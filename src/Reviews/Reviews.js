import Reviewcss from "./Review.module.css";
import jane1 from "./img/jane1.jpg"
import bismark from "./img/bismark1.jpg"

import ema1 from "./img/ema1.jpg"
import esther from "./img/estther1.jpg"


const Reviews = () => {
  return (
    <div className={Reviewcss.main}>
      <div className={Reviewcss.maintext}>
        <h2>
          Customer Stories
          <br />
        </h2>
        <p>Hundreds of Kumasi businesses are using Express Delivery</p>
      </div>
      <div className={Reviewcss.mainreview}>
        <div className={Reviewcss.reviewcard1}>
          <div className={Reviewcss.img1}>
          {/* <img src={jane1} alt="john" height="100%" width="100%"/> */}
          </div>
          <div className={Reviewcss.text1}>
            <em>
              "What works for us is that it's <br />
              simple, it's integrated into our
              <br />
              systems and it's digital, it's
              <br />
              reliable and the value <br />
              proposition stacks up." <br />
            </em>
            <p className="name">Samuel Kwofie</p>
          </div>
        </div>
        <div className={Reviewcss.reviewcard2}>
          <div className={Reviewcss.img2}>
          {/* <img src={ema1} alt="rex" height="100%" width="100%"/> */}
          </div>
          <div className={Reviewcss.text2}>
            <em className="rtext">
              "Express Deliveries shipping rates <br />
              are really competitive, sending
              <br />
              out the huge volumes we do
              <br />
              and it saves us about one
              <br />
              minute per order, which is huge!"
              <br />
            </em>

            <p className="name"> John Mensah</p>
          </div>
        </div>
        <div className={Reviewcss.reviewcard3}>
          <div className={Reviewcss.img3}>
            {/* <img src={bismark} alt="hannah" height="100%" width="100%"/> */}
          </div>
          <div className={Reviewcss.text3}>
            <em>
              "Expess Delivery streamlines the
              <br />
              whole delivery experience.
              <br />
              The dashboard makes <br />
              tracking my deliveries easy,
              <br />
              and in the first few months
              <br />
              I saved over $1000. It has bee
              <br />
              so good for our business!"
              <br />
            </em>
            <p className="name">Felix Kwofie</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
