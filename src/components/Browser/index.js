import { useContext } from "react";
import FolderVisibilityContext from "providers/FolderVisibility/FolderVisibilityContext";
import "./style.scss";

export default function Browser({children, onClose, title, contentHeight}){
  const {lastOpened, setLastOpened} = useContext(FolderVisibilityContext);
  const isCurrentlyOpened = lastOpened === title;
  const handleSelection = () => {
    if(!isCurrentlyOpened){
      setLastOpened(title);
    }
  }
  return <div onClick={handleSelection}  className={`browser-wrap ${isCurrentlyOpened ? 'in-focus' : ''}`} style={{
    transform: `translate(-50%, -${contentHeight}px)`,
  }}>
    <div className="browser ui-droppable" style={{display:'block'}}>
      <div className="browser-panel">
        <div className="browser-close" onClick={()=>onClose()}></div> 
        <div className="browser-title">{title}</div>
      </div>
      <div className="website">
        <div className="website-menu">
          <div className="website-inner">
            {children}
          </div>
        </div>
      </div>
    </div>
  </div>
}