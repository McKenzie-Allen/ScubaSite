import '../../App.css';

const SetSurface = ({surface, setSurface, postSurface}) => {

        return (
            <form className='surfaceContain'>
              <input 
                id='surface'
                name='surface'
                type='text'
                placeholder='Surface Condition'
                onChange={(e) => setSurface(e.target.value)}
              />
              <div><button onClick={postSurface}>See Recommended Equipment based on Surface Condition</button></div>
              <div>current valid current values are "calm"</div>
            </form>
          );
}

export default SetSurface