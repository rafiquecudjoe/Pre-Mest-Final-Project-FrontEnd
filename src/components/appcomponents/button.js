import "./Button.css"

function Button(props) {
    return (
        <>
            <button style={{background:props.background}}
                
                className="btn" name={props.name} onClick={props.onClick}>{props.text}</button>
        </>
    )
    
}

export default Button;