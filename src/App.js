import Home from './Views/Home';
import { Route, Routes } from 'react-router-dom';
import Person from './Components/Person';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/:id' element={<Person/>} />
      </Routes>
    </div>
  );
}

export default App;