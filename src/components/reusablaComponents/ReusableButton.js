function ReusableButton(props) {
    const buttonStyle = {
        border: 'none',
        borderRadius: '4px',
        fontSize: '8px',
        color: '#fff',
        backgroundColor: '#54a0ff',
        cursor: 'pointer'
    };

    if (props.size === 'lg') {
        buttonStyle.height = "80px";
        buttonStyle.fontSize = "24px";
    }else if (props.size === 'sm') {
        buttonStyle.height = "40px";
        buttonStyle.fontSize = "18px";
    }

    if (props?.variant === "pink") buttonStyle.backgroundColor = 'palevioletred'
    if (props?.variant === "green") buttonStyle.backgroundColor = 'darkslategrey'


    return (
        <button type={props.type} onClick={props?.onClick} style={buttonStyle}>
            {props.children}
        </button>
    );
}

export default ReusableButton;