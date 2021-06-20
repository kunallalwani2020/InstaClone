
import './App.css';
import Navbar from"./components/Navbar";
import Context from "./Global/Context";
import Model from"./components/Model";
import Stories from './components/Stories.jsx';
import Create from './components/Create.jsx';
import Post from './components/Post';
import Sidebar from './components/Sidebar.jsx';
function App() {
  return (
    <Context >
    <Navbar/>
    <div className="container">
      <Stories/>
      <Create/>
     <Post/>
     <Sidebar/>
    </div>
    <Model/>
    </Context>
  );
}

export default App;
