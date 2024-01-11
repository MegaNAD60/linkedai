function Input(props){
    return(

        <div className='text-box'>
            <input
                name={props.name} id={props.id} type={props.type} placeholder={props.placeholder}
                className="w-full p-4 bg-transparent border border-white mt-6"
            />
        </div>

    )
}

export default Input;