



function InputField(props) {
    return (
        <>
            <input style={props.style}
                placeholder={props.placeholder}
                className={props.className}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                name={props.name}
              
            required/>
        </>
    )
    
}


export default InputField ;