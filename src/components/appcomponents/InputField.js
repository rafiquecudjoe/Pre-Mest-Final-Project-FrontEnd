



function InputField(props) {
    return (
        <>
            <input
                placeholder={props.placeholder}
                className={props.className}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                name={props.name}
            />
        </>
    )
    
}


export default InputField ;