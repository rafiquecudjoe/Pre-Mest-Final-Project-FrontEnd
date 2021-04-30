import Newordercss from "./Neworder.module.css";
import InputField from "../../components/appcomponents/InputField";
import Button from "../../components/appcomponents/button";
import corodel from "./corodel.svg"
const Neworder = () => {
  return (
    <div className={Newordercss.main}>
          <div className={Newordercss.upperdiv}>
              Send Parcel
      </div>
      <div className={Newordercss.lowerdiv}>
        <div className={Newordercss.formcontainer}>
          <form className={Newordercss.form}>
            <p>Where Are you Sending from?</p>
            <select>
              <option defaultValue hidden>
                Cities
              </option>
              <option>Ahodwo</option>
              <option>Asokwa</option>
              <option>Tech</option>
              <option>Asafo</option>
              <option>Adum</option>
            </select>
            <p>What is the Size of your Package</p>
            <label>Weight</label>
                      <InputField style={{height:"20%", width:"20%"}}/> Kg
            <p>Description</p>
            <textarea></textarea>
            <p>Where are you Sending to?</p>
            <select>
              <option defaultValue hidden>
                Cities
              </option>
              <option>Ahodwo</option>
              <option>Asokwa</option>
              <option>Tech</option>
              <option>Asafo</option>
              <option>Adum</option>
            </select>
            <p>Who are you Sending to </p>
            Contact name
            <InputField />
              <p>Email  </p>      
            <InputField />
              <p>Phone Number</p>
            <InputField  />
            <p>Address</p>
            <textarea></textarea>
            <p>How can we collect your parcel</p>
            <textarea>Pick Up my parcel </textarea>
            <textarea>I will drop it off</textarea>
            <Button />
          </form>
        </div>
              <div className={Newordercss.imagecontainer}>
                  <img src={corodel} alt="coro" height="100%" width="100%"/>
        </div>
      </div>
    </div>
  );
};

export default Neworder;
