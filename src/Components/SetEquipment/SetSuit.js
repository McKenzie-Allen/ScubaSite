import '../../App.css';


const SetSuit = ({suit, setSuit, postSuit}) => {
  
    return (
      <form className='finContain'>
        <input 
          id='suit'
          name='suit'
          type='text'
          placeholder='WetSuit'
          onChange={(e) => setSuit(e.target.value)}
        />
        <button onClick={postSuit}>See best conditions for WetSuit</button>
        <div>Current Valid inputs are 7mm 5mm 3mm</div>
      </form>
    );
}

export default SetSuit;