
import './App.css';
import Sidebar from './Components/Sidebar.jsx';
import Feed from './Components/Feed.jsx';
import Widget from './Components/Widget.jsx';
function App() {
  return (
    <>
    <div className="main">

      <div className="main-sidebar">
        <Sidebar/>
        </div>
     <div className="main-feed">
       <Feed/>
       </div>
<div className="main-widget">
  <Widget/>
  </div>

      </div>
    

    </>
  );
}

export default App;
