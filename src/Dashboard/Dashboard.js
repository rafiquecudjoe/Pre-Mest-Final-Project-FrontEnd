import Dashboardcss from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div className={Dashboardcss.main}>
      <div className={Dashboardcss.uppertext}></div>
      <div className={Dashboardcss.maintext}>
        <div className={Dashboardcss.leftmenu}></div>
        <div className={Dashboardcss.inputcontainer}>
          <div className={Dashboardcss.uppertext}>

          </div>
          <div className={Dashboardcss.lowertext}>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
