import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/services' element={<Home/>}></Route>
          <Route path='/blogs' element={<Home/>}></Route>
          <Route path='/About' element={<Home/>}></Route>
          <Route path='/login' element={<Home/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
