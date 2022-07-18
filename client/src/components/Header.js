import React from 'react';

import '../styles/style.css';
import '../styles/bat.css'
import speechBubble from '../img/speech-bubble.png'


function Header() {
  return (
    <header className="header"
    style={{
      fontSize: "30px",
      padding: "20px",
    }}
    >
      <h1>SHOP WIZARD</h1>
      <div class="bat" >
{/* <img 
src={speechBubble} alt="speech bubble"
style={{
  width: "5000%",
}}/> */}
      </div>
    </header>
  );
}

export default Header;