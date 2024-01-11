function Button(props){
    return(
        <>
            <button onClick={props.onClick} id={props.id} className="py-3 px-6 text-white bg-gradient-to-r from-[#d434ef] to-[#903aff]">
                {props.name}
            </button>
        </>
    )
}

export default Button;