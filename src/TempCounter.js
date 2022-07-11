import './App.css';

function Tempcounter(props) {

    return ( 
    <div className = 'tempContainer'>
        <button onClick = { props.tempUp } > Increase Temp </button> 
        <div className = 'tempCounter' > { props.defaltTemp } </div> 
        <button onClick = { props.tempDown } > Decrease Temp </button> 
        <button onClick = { props.submitTemp } > Set Temp </button> 
        </div>
    )
}

export default Tempcounter;