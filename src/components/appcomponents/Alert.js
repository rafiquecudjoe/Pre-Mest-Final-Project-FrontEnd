import { Alert } from "@windmill/react-ui";

const Alerts = (props) => {
    return (
        <Alert
   
        className={props.className}
        type={props.type}
        onClose={props.onClose}
      >
        {props.text}
      </Alert>
        
    )

    
}

export default Alerts