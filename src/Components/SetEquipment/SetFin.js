import '../../App.css';


const SetFin = ({fin, setFin, postFin}) => {
  
    return (
      <form className='finContain'>
        <input 
          id='fin'
          name='fin'
          type='text'
          placeholder='fin'
          onChange={(e) => setFin(e.target.value)}
        />
        <button onClick={postFin}>See best conditions for fins</button>
        <div>Current Valid inputs are Split and Blade</div>
      </form>
    );
}

export default SetFin;