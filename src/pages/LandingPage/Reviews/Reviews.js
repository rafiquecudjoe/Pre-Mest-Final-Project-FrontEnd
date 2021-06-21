import Reviewcss from "./Review.module.css";
import Review1 from "../components/appcomponents/Review1";
import Review2 from "../components/appcomponents/Review2";
import Review3 from "../components/appcomponents/Review3";

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
        <Review1 />
        <Review2 />
        <Review3 />
      </div>
    </div>
  );
};

export default Reviews;
