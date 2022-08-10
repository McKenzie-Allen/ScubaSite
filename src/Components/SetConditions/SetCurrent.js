import '../../App.css';


const SetCurrent = ({ SetCurrent }) => {
  
    return (
      <form className='currentcotain'>
        <input 
          id='current'
          name='current'
          type='text'
          placeholder='current'
        />
        <button>See Recomend Equipment based on Current</button>
      </form>
    );
}

export default SetCurrent;