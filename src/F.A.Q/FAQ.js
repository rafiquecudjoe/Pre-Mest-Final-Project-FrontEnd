import FAQcss from "./FAQ.module.css";
import Button from "../components/appcomponents/button";

const FAQ = () => {
  return (
    <div className={FAQcss.main}>
      <div className={FAQcss.title}>
        <h1>FAQS</h1>
      </div>
      <div className={FAQcss.questions}>
        <div className={FAQcss.quest1}>
          <div className={FAQcss.q1}>
            <h3>How do I get a quote?</h3>
            <p>
              Get a free quote in under 30 seconds for any parcel from your
              Express Delivery Dashboard. Simply sign-up for a free Express
              Delivery account and add in your pickup and delivery info, and the
              parcel size and weight.
            </p>
          </div>
          <div className={FAQcss.q2}>
            <h3>Can Express Delivery pick up from me?</h3>
            <p>
              Yes! To arrange a pickup, all you need to do is book online and
              print and attach the label.Express Delivery picks up from over 90% of
              Ghanaian locations – check out the Locations & Coverage guide
              for the full list.
            </p>
          </div>
        </div>
        <div className={FAQcss.quest2}>
          <div className={FAQcss.q3}>
            <h3>Is Express delivery Fast?</h3>
            <p>
              In general, same-city deliveries arrive overnight and deliveries
              to nearby cities within 1-2 days. Since we are very speedy, Express delivery
             guarantees a speedy delivery service
                          </p>
          </div>
          <div className={FAQcss.q4}>
            <h3>What can I send?</h3>
            <p>
              Express Delivery is designed to make delivering all things a breeze. There
              are some items that you can't book with Express Delivery such as dangerous
              goods, and anything that is heavier than 25kg or bigger than 100
              litres in volume.
            </p>
          </div>
        </div>
      </div>
      <div className={FAQcss.footer}>
        <Button text="GET STARTED" />
      </div>
    </div>
  );
};

export default FAQ;
