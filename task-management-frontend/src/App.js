import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './routes/Login';
import Register from './routes/Register';
import Ongoing from './routes/Ongoing';
import Completed from './routes/Completed';
import Upcoming from './routes/Upcoming';
import Edit from './routes/Edit';
import Dashboard from './routes/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='ongoing' element={<Ongoing/>}/>
        <Route path='completed' element={<Completed/>}/>
        <Route path='upcoming' element={<Upcoming/>}/>
        <Route path='edit/:id' element={<Edit/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
