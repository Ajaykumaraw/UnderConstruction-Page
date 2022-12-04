import React from "react";
import "../Header/header.scss"


function Header(){
    return <header className='header-sec'>
              <div className='logo-sect'>
                  <h4 className="logo">React.</h4>
              </div>
              <nav>
                  <ul className="list">
                    <li><a href='#'>Home</a></li>
                  </ul>
              </nav>
          </header>
}

export default Header;