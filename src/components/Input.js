function Input(props){
    return(
        <>
            <div className='text-box'>
                <input
                 name={props.name}
                 id={props.id}
                 type={props.type}
                 placeholder={props.placeholder}
                 style={{
                    width: '90%',
                    padding: '15px',
                    border: '1px solid #ffffff',
                    backgroundColor: '#903aff1a',
                 }} />
            </div>
        </>
    )
}

export default Input;