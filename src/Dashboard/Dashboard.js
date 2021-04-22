import Dashboardcss from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div className={Dashboardcss.main}>
      <div className={Dashboardcss.uppertext}></div>
      <div className={Dashboardcss.maintext}>
        <div className={Dashboardcss.leftmenu}></div>
        <div className={Dashboardcss.inputcontainer}>
          <div className={Dashboardcss.inputtext1}>

          </div>
          <div className={Dashboardcss.inputtext2}>
            <div className={Dashboardcss.text}>


            </div>
            <div className={Dashboardcss.img}>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
