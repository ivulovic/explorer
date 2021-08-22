import { useContext } from 'react';
import Icon from 'components/Icon';
import FolderVisibilityContext from 'providers/FolderVisibility/FolderVisibilityContext';
import "./style.scss";

export default function FolderContent({title, content, isOpened, onClose}){
  const {lastOpened, setLastOpened} = useContext(FolderVisibilityContext);
  const isCurrentlyOpened = lastOpened === title;
  const handleSelection = () => {
    if(!isCurrentlyOpened){
      setLastOpened(title);
    }
  }
  return <div onClick={handleSelection} 
              className={`folder file-explorer ui-draggable ui-draggable-handle ${isOpened ? 'active-folder' : ''} ${isCurrentlyOpened ? 'in-focus' : ''}`}>
          <div className="folder-panel">
            <div className="folder-close" onClick={()=>onClose(title)}></div> 
            <div className="folder-title">{title}</div>
          </div>
          <div className="folder-inner">
            {content.map(x => <Icon key={`${title}${x.title}`} {...x} />)}
          </div>
        </div>
}