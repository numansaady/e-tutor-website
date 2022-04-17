import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Services from './Pages/Services/Services';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import ServiceDetail from './Pages/Services/ServiceDetail/ServiceDetail';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import CheckOut from './Pages/CheckOut/CheckOut';

function App() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path="/service/:serviceId" element={<ServiceDetail />}></Route>
          <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        ></Route>
          <Route path='/blogs' element={<Home/>}></Route>
          <Route path='/About' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
