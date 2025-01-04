import React from 'react';
import image from './netlogo1.png'; 

function NavBar() {
  return (
    <div >


      <div className="Nav">

        <img src={image} alt="Netflix" />

        <select className="btn1" >
          <option value="english">English</option>
          <option value="spanish">Telugu</option>
        </select>
        <button className="btn2">Sign In</button>

      </div>
      <div >
        <h1 className='hed1' >Unlimited movies,<br /> TV shows and more</h1>
        <p className='hed2'>Starts at Rs149. Cancel at any time.</p>
        <p className='hed3'>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className='hed4'>
          <input type="text" placeholder='Email address' />
          <button className='btn3'>Get Started</button>
        </div>
      </div>
    </div>

  );
}

export default NavBar;
