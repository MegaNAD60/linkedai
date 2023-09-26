function Button(props){
    return(
        <>
            <button
             style={{
                padding: '10px 20px',
                fontSize: '1rem',
                border: 'none',
                color: '#ffffff',
                backgroundImage: 'linear-gradient(to right, #d434ef, #903aff)',
             }}>
                {props.name}
            </button>
        </>
    )
}

export default Button;