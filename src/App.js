
import './App.css';
import SideBar from './SideBar';
import{Routes,Route} from 'react-router-dom'
import Category1 from './components/Category1'
import Category2 from './components/Category2';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <SideBar/>
     
      <div className="components">
        <Routes>
        <Route path='/' element={<Home/>} /> 
         <Route path='/category1' element={<Category1/>} /> 
         <Route path='/category2' element={<Category2/>} /> 
        </Routes>
       

      </div>
      
    </div>
  );
}

export default App;
