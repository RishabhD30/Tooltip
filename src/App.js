import './App.css';
import Tooltip from './Tooltip';
import {useState} from 'react' 

function App(){
  let [position , setPos] = useState('Top')

  let [hovering , setHovering] = useState(false);

  return (
    <>
      <div id="btn-position">
        <div className='grp-name'>
          Select button to hover as per the choice:
        </div>
        <button className= {position==='top' ? "btn active" :"btn" } onClick={()=>{setPos('top')}}>Top</button>    
        <button className= {position==='left' ? "btn active" :"btn" } onClick={()=>{setPos('left')}}>Left</button>    
        <button className= {position==='bottom' ? "btn active" :"btn" } onClick={()=>{setPos('bottom')}}>Bottom</button>    
        <button className= {position==='right' ? "btn active" :"btn" } onClick={()=>{setPos('right')}}>Right</button>    
      </div>

      <div id="button-container">
          <button className='btn hover-btn' onMouseOver={()=>{setHovering(true)}} onMouseOut={()=>{setHovering(false)}}>Hover Over Me!!</button>
          {hovering && <Tooltip position={position} />}
      </div>
    </>
  );
}

export default App;
