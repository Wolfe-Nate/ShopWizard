import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from '../src/pages/Home';
// import Signup from './pages/Signup';
import "./styles/style.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="rpgui-content h1">
      <Header></Header>
      <Home></Home>
      <Login></Login>
      <Footer></Footer>
    </div>
  );
}

export default App;