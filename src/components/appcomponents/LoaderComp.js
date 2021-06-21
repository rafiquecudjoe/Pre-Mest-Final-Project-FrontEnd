import Loader from "react-loader-spinner";

const LoaderComp = (props) => {
      
    return(
        <Loader
        type={props.type}
        color={props.color}
        height={props.height}
        width={props.width}
            timeout={props.timeout}
            className={props.className}
        />
          
    );
}
export default LoaderComp;