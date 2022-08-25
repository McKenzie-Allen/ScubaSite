import '../../App.css';

const SetReg = ({reg, setReg, postReg}) => {

        return (
            <form className='regContain'>
              <input 
                id='reg'
                name='reg'
                type='text'
                placeholder='is your regulator working'
                onChange={(e) => setReg(e.target.value)}
              />
              <div><button onClick={postReg}>See best conditions for Regulator</button></div>
              <div>current valid entries are working or non-working</div>
            </form>
          );
}

export default SetReg