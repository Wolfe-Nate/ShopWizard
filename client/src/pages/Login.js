import React from 'react';

 function Login() {
    return (
<div class="rpgui-container framed rpgui-draggable" style={{
       marginLeft: '8rem',
       fontSize: '20px',
       padding: '20px',
       color: 'white',
}}>
            <h1>Inputs</h1>
            <hr />

            <label>Your hero name:</label>
            <input type="text" name="FirstName" value="Bob" placeholder="Hero name"/>
            <br/><br/>

            <label>Your hero last name:</label>
            <input type="text" name="FirstName" value="The Destroyer" placeholder="Hero last name"/>
            <br /><br />

            <label>Your hero bio:</label>
            <textarea rows="3" cols="50">Bob The Destroyer likes to destroy stuff.</textarea>

            <p>Here is a paragraph.</p>
            <label>Golden hr:</label>
            <hr class="golden" />
            <a href="#"> And this is a link.</a>

        </div>
        
);
}
    export default Login