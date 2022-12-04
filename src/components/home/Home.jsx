import React from "react";
import Header from '../Header/Header.jsx'
import './home.scss'


function Home(){
    return <section className='home-sec'>
                    <header className='header-sec'>
                        <div className='logo-sect'>
                            <h4 className="logo">React.</h4>
                        </div>
                        <nav>
                            <ul className="list">
                                <li><a href='#'>Home</a></li>
                            </ul>
                        </nav>
                    </header>
              <div className='home-content'>
                    <div className="title">UNDER <br/> CONSTRUCTION</div>
                    <div className="subtitle">SITE NEARLY READY</div>
                    <div className="progressbar">
                        <div className="inner-div"></div>
                        <div className="lables">
                            <label className="start">0%</label>
                            <label className="end">100%</label>
                        </div>
                    </div>
                    <div className="btn-sect"><button>Notify Me!</button></div>
                    <div className="socialbtn-sect">
                        <div className="socialbtn"><i class="fa-brands fa-facebook"></i></div>
                        <div className="socialbtn"><i class="fa-brands fa-linkedin-in"></i></div>
                        <div className="socialbtn"><i class="fa-brands fa-instagram"></i></div>
                        <div className="socialbtn"><i class="fa-brands fa-twitter"></i></div>
                    </div>
                    <div className="copyright-area">© 2035 by Under Construction. Powered and secured by React</div>
              </div>
          </section>
  }

  export default Home;