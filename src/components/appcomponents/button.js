import "./Button.css"

function Button(props) {
    return (
        <>
            <button style={props.style}
                
                className={props.className} name={props.name} onClick={props.onClick}>{props.text}</button>
        </>
    )
    
}

export default Button;

