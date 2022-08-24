import '../../App.css';

const TempCounter = ({ tempUp, defaultTemp, submitTemp, tempDown }) => {

    return ( 
        <div className = 'tempContainer'>
            <button onClick = { tempUp } > Increase Temp </button> 
            <div className = 'tempCounter' > { defaultTemp } </div> 
            <button onClick = { tempDown } > Decrease Temp </button> 
            <button onClick = { submitTemp } > See Recommended Equipment based on Temp </button> 
        </div>
    )
}

export default TempCounter;