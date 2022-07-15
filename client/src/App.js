import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from '../src/pages/Home';
import Signup from './pages/Signup';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="rpgui-content h1">
      <Header></Header>
      <BrowserRouter>
      <Routes>
<Route
path='/home' element={<Home/>}
/>
<Route
path='/login' element={<Login/>}
/>
<Route
path='/signup' element={<Signup/>}
/>
      </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;