



import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Add from './component/Add';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Add/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;