import Desktop from "containers/Desktop";
import FolderVisibilityProvider from "providers/FolderVisibility";

function App() {
  return (
    <FolderVisibilityProvider>
      <Desktop />
    </FolderVisibilityProvider>
  );
}

export default App;
