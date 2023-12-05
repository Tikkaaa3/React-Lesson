
export const User = (props) => {   // Components should start with capital letter!!
    const isGreen = props.age >= 18 ? true : false
    return (
        <div>
        {}
            <h1 className='name' style={{color: isGreen ? 'green' :  'red'}}>{props.name}</h1>
            <h2>{props.age}</h2>
            <h2>{props.email}</h2>
        </div> 
    )
};
