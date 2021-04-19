import "./Dashboard.css";
import pic5 from "./img/dashimg5.jpeg"


function Dashboard() {
  return (
    <div className="main_container">
      <div className="left">
              <div className="branddiv">
                  <img className="img"src={pic5} alt="logo"/>
                  <h1 className="logotext">EXPRESS DELIVERY</h1>
              </div>
              <div className="menudiv"></div>
              <div className="signoutdiv"></div>
      </div>
      <div className="right">
        <div className="righttop"></div>
        <div className="rightbottom">
          <div className="cardtop">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
          <div className="cardbottom">
          <div className="card"></div>
          <div className="card"></div>
                      <div className="card"></div>
                      </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
