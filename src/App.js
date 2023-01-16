
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './component/Home';
import Register from './component/Register';
import Login from './component/Login';
function App() {
  return (
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/register' element={<Register/>}/>
   <Route path='/login' element={<Login/>}/>
   </Routes>
  );
}

export default App;
