import { SunspotLoader } from "react-awesome-loaders";
import loadercss from "./Loadercss.module.css"


 const SunspotLoaderComponent = () => {
  return (
    <div className={loadercss.loader}>
      <SunspotLoader className=""
        gradientColors={["#96c93d", "#00b09b"]}
        shadowColor={"#3730A3"}
        desktopSize={"128px"}
        mobileSize={"100px"}
        shadowOpacity={"0.01"}
      />
    </div>
  );
};




export default SunspotLoaderComponent;