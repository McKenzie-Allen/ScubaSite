import '../../App.css';


const SetCurrent = ({current, setCurrent, postCurrent}) => {
  
    return (
      <form className='currentcotain'>
        <input 
          id='current'
          name='current'
          type='text'
          placeholder='Current'
          onChange={(e) => setCurrent(e.target.value)}
        />
        <button onClick={postCurrent}>See Recommended Equipment based on Current</button>
        <div>current valid current values are "none"</div>
      </form>
    );
}

export default SetCurrent;