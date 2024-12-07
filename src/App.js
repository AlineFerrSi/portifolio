import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from 'Paginas/Main/Index';
import Body from 'Paginas/Body/Index';
import Footer from 'Paginas/Footer/Index';
import Curriculum from 'Paginas/Curriculum/Index';



function App() {
  return (
    <BrowserRouter>
    <Main />
    <Routes>
      <Route path='/' element={<Body/>} />
      <Route path='/curriculo' element={<Curriculum />} />
    </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
