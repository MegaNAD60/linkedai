function Button(props){
    return(
        <>
            <button
             onClick={props.onClick}
             id={props.id}
             style={{
                padding: '10px 20px',
                marginTop: '10px',
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