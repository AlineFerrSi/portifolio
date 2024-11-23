import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Paginas/Main/Index';


function App() {
  return (
    <BrowserRouter>
    <Main />
    <Routes>
      
      {/* <Route path='/' element={<Main />} /> */}
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
