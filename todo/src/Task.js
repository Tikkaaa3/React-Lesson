export const Task = (props) => {
    return <div key={props.id}>{props.name}<button type='button' onClick={() => props.deleteTodo(props.id)}>x</button></div>
}
