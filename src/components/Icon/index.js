import {useState, useRef} from 'react';
import useOnOutsideClick from 'hooks/useOnOutsideClick';
import './style.scss';

const noop = () => {};

export default function Icon({title, icon, onClick = noop, tooltip}){
  
  const ref = useRef();
  
  const [isActive, setIsActive] = useState(false);
  
  const setInactive = () => setIsActive(false);
  
  useOnOutsideClick(ref, setInactive);

  return <div ref={ref} 
              onClick={()=>setIsActive(true)} 
              onDoubleClick={()=>onClick(title)} 
              className={`icon ${isActive ? 'active' : ''}`} 
              style={{position:'relative'}}>

    <div className="icon-image"><img src={icon} alt="icon"/></div>  
    
    {tooltip && <div className="icon-tooltip right"><div></div>
      <p>{tooltip}</p>
    </div>}

    <div className="icon-title">{title}</div>

    <div className="progres">
      <div style={{width: '0px'}}></div>
    </div>

</div>
}