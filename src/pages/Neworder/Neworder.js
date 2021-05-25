import Newordercss from "./Neworder.module.css";
import Alertcss from "../../components/pagecomponents/Alerts.module.css";
import corodel from "./corodel.svg";
import Form from "react-bootstrap/Form";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import {useHistory} from "react-router-dom"

const Neworder = () => {
  const [show, setShow] = useState(false);
  const [values, setValues] = useState({});

  const history=useHistory()

  const [calcCost, setCalCost] = useState(0)
  

  const onChange2 = () => {
    setShow(false)
    
    }
    


  const handleClose = () => {
    setShow(false)
    if (calcCost > 1) {
      history.push({
        pathname: '/dashboard/payment', state: { formCityTo: values.cityto,formCost:calcCost,formCityFrom:values.cityfrom
        }
      })
      
    } else {
      alert('Unable to Calculate cost')
      history.push('/dashboard/neworder')

      
    }
    
    
    // history.push('/payment')
  };

  function updatevalues(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const handleShow = (e) => {
    e.preventDefault();

 
  
  
      if ((values.cityfrom === "Ahodwo") && (values.cityto === "Asokwa")) {
        setCalCost(8.00)
            }
            else  if ((values.cityfrom === "Ahodwo") && (values.cityto === "Tech")) {
              setCalCost(7.00)
            }
            else  if ((values.cityfrom === "Ahodwo") && (values.cityto === "Ahodwo")) {
              setCalCost(5.00)
                  } 
            else  if ((values.cityfrom === "Asokwa") && (values.cityto === "Asokwa")) {
              setCalCost(5.00)
            }
            else  if ((values.cityfrom === "Asokwa") && (values.cityto === "Ahodwo")) {
              setCalCost(9.00)
            }
            else  if ((values.cityfrom === "Asokwa") && (values.cityto === "Tech")) {
              setCalCost(10.00)
            }
            else  if ((values.cityfrom === "Tech") && (values.cityto === "Asokwa")) {
              setCalCost(8.00)
            }
            else if ((values.cityfrom === "Tech") && (values.cityto === "Ahodwo")) {
              setCalCost(10.00)
            }
            else if ((values.cityfrom === "Tech") && (values.cityto === "Tech")) {
              setCalCost(5.00)
                  } 
        
  
 
    setShow(true);

  };


 

  return (
    <div className={Newordercss.main}>
      <div className={Newordercss.upperdiv}>Send Parcel</div>
      <div className={Newordercss.lowerdiv}>
        <div className={Newordercss.newform}>
          <Form>
            Where are you Sending from ?
            <Form.Group controlId="formGridCityFrom">
              <Form.Label>Cities</Form.Label>
              <Form.Control
                onChange={updatevalues}
                name="cityfrom"
                as="select"
                defaultValue="Choose..."
              >
                <option>Choose...</option>
                <option>Ahodwo</option>
                <option>Asokwa</option>
                <option>Tech</option>
              </Form.Control>
            </Form.Group>
            <Form.Row>
              What is the size of your parcel
              <Form.Group controlId="formGridWeight">
                <Form.Label>Weight</Form.Label>
                <Form.Control
                  onChange={updatevalues}
                  name="weight"
                  type="text"
                  placeholder="Enter size in KG"
                />
              </Form.Group>
              <Form.Group controlId="formGridPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  onChange={updatevalues}
                  name="description"
                  type="text"
                  placeholder="Enter here"
                />
              </Form.Group>
            </Form.Row>
            Where are you Sending To ?
            <Form.Group controlId="formGridCityTo">
              <Form.Label>Cities</Form.Label>
              <Form.Control
                onChange={updatevalues}
                name="cityto"
                as="select"
                defaultValue="Choose..."
              >
                <option>Choose...</option>
                <option>Ahodwo</option>
                <option>Asokwa</option>
                <option>Tech</option>
              </Form.Control>
            </Form.Group>
            Who are you sending to?
            <Form.Group controlId="formGridName">
              <Form.Label>Contact Name</Form.Label>
              <Form.Control
                onChange={updatevalues}
                name="cname"
                type="text"
                placeholder=""
              />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={updatevalues}
                name="cemail"
                type="email"
                placeholder=""
              />
            </Form.Group>
            <Form.Group controlId="formGridPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                onChange={updatevalues}
                name="cphone"
                type="text"
                placeholder=""
              />
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                onChange={updatevalues}
                name="caddress"
                placeholder="1234 Main St"
              />
            </Form.Group>
            <Form.Row>
              <Form.Group controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>
            <Form.Label>How should we pick up your parcel</Form.Label>
            <Form.Control name="pickup" as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>Pick up my Parcel at my location</option>
              <option>Will drop it off at your Office</option>
            </Form.Control>
            <Button variant="primary" type="submit" onClick={handleShow}>
              Submit
            </Button>
          </Form>
        </div>

        <div className={Newordercss.imagecontainer}>
          <img src={corodel} alt="coro" height="50%" width="100%" />
        </div>
      </div>

      <Modal show={show} onHide={onChange2}>
        <Modal.Header closeButton>
          <Modal.Title>Price Quote</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: "center" }}>
          You are to Pay Ghc{calcCost} as delivery cost from {values.cityfrom} to {values.cityto}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onChange2}>
            Cancel
          </Button>
          <Button style={{fontSize:"15px"}}variant="primary" onClick={handleClose}>
            Proceed with Payment
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Neworder;
