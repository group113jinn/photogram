import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/img/home_logo.png"

export function Home() {
  return (
    <section className="main-home">
      <section className="home-photo-signin">
      <article className="home-logo">
      <img src={Logo} alt="logo" /> 
      </article>

      
    
      <article className="signin-container">
        <h1>
          Photogram
        </h1>
        <div>
          <input type="text" placeholder="Username" />
        </div>
        <div>
          <input type="text" placeholder="Password" />
        </div>
        <div>
          <button className="login-button">Login</button>
        </div>
        <div>
          <Link to="/feed" ><button className="guest-button">Guest Mode</button></Link>
        </div>

      </article>
      </section>
    </section>
  )
}