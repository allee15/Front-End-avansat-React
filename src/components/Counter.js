
const Counter = (props) => {
    return <div>
        <button onClick={() => props.setCounter(props.counter+1)}>Increment</button>
        <div>{props.counter}</div>
    </div>
}

export default Counter;