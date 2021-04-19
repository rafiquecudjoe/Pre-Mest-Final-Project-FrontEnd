import "./Button.css"

function Button(props) {
    return (
        <>
            <button className="btn" name={props.name} onClick={props.onClick}>{props.text }</button>
        </>
    )
    
}

export default Button;