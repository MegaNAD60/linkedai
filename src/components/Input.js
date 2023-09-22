function Input(props){
    return(
        <>
            <div className='text-box'>
                <input name={props.name} id={props.id} type={props.type} placeholder={props.placeholder} />
            </div>
        </>
    )
}

export default Input;