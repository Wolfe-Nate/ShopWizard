import React from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Header from '../components/Header';
// import Card from './components/Card';

function Home() {
    const message = '';
    return (
      <div className="rpgui-content">
  <div className="rpgui-container framed rpgui-draggable" style="position:fixed; right:0px; bottom:0px;">
    <card>
    <button className="rpgui-button" type="button" style="width:200%"><p>Sign Up</p></button>
  </card>
  </div>
  <div className="rpgui-container framed rpgui-draggable" style="left:280px">
    <card>
    <button className="rpgui-button" type="button" style="width:200%"><p>Login</p></button>
  </card>
  </div>
</div>
      
    );
  }
  
  export default Home;