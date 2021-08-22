import { useState,useContext } from 'react';
import Icon from 'components/Icon';
import webpageImg from 'images/webpage7.png';
import folderImg from 'images/folder.png';
import FolderContent from 'components/FolderContent';
import FolderVisibilityContext from 'providers/FolderVisibility/FolderVisibilityContext';
import './styles.scss';
import Browser from 'components/Browser';

const webpages = [
  {title: 'Class Component Lifecycle', url:'https://codesandbox.io/embed/react-grid-layout-react-lifecycle-rhk5y?fontsize=14&hidenavigation=1&theme=light&view=preview&autoresize=1&moduleview=0'},
  {title: 'Keys and List', url:'https://codesandbox.io/embed/react-list-and-keys-f4xzd?fontsize=14&hidenavigation=1&theme=light&view=preview&autoresize=1&moduleview=0'}
]

export default function Desktop(){
  const [page, setPage] = useState({});
  const {setLastOpened} = useContext(FolderVisibilityContext);


  const openLifecycle = (title) => {
    const page = webpages.find(x => x.title === title);
    if(page){
      setLastOpened(page.title)
      setPage(page);
    }
  }

  const folderList = [
    {title: 'React', content: [
        {icon: webpageImg, title: "Class Component Lifecycle", onClick: () => openLifecycle("Class Component Lifecycle")},
        {icon: webpageImg, title: "Keys and List", onClick: () => openLifecycle("Keys and List")},
    ]},
    // {title: 'Music 1', content: [{icon: musicImg, title:"Music 4"}, {icon: alarmImg, title:"Alarm"}]},
    // {title: 'Music 2', content: [{icon: musicImg, title:"Music 5"}, {icon: alarmImg, title:"Alarm"}]},
    // {title: 'Music 3', content: [{icon: musicImg, title:"Music 6"}, {icon: alarmImg, title:"Alarm"}]},
    // {title: 'Music 4', content: [{icon: musicImg, title:"Music 8"}, {icon: alarmImg, title:"Alarm"}]}
  ]
  const [folders, setFolders] = useState(folderList.map(x => ({...x, isOpened: false})));

  const openFolder = (title) => {
    setFolders(folders.map(x => x.title === title ? ({...x, isOpened: true}) : x));
    setLastOpened(title);
  }
  const closeFolder = (title) => {
    setFolders(folders.map(x => x.title === title ? ({...x, isOpened: false}) : x));
    setLastOpened(null);
  }
  const closeBrowser = () => {
    setPage({});
  }
  return <div className="desktop">
          <div className="column-list">
            {folders.map(x=> {
              // const folder = x.find;
              return <div key={x.title} style={{position:'relative'}}>
                      <Icon icon={folderImg} title={x.title} onClick={openFolder}/>
                      <FolderContent title={x.title} content={x.content} isOpened={x.isOpened} onClose={closeFolder} />
                    </div>
            })}
          </div>
          {page.url && <Browser onClose={closeBrowser} title={page.title}>
          <iframe className="iframe"
          src={page.url}></iframe>
          </Browser>}
        </div>
}