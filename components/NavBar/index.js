import React from 'react'
import SliderMenu from "./SliderMenu"
export default function Index() {
  return (
    <>
    {/* ======= Header ======= */}
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center">
        <div className="logo me-auto">
          <h1>
            <a className='fs-4' href="index.html">Trends Auto</a>
          </h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
        </div>
        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="nav-link scrollto " href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#testimonials">
                Testimonials
              </a>
            </li>
            
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Get Quote
              </a>
            </li>
          </ul>
          <SliderMenu/>
          {/* <i className="bi bi-list mobile-nav-toggle" /> */}
        </nav>
        {/* .navbar */}
        {/* <div className="header-social-links d-flex align-items-center">
          <a href="#" className="twitter">
            <i className="bi bi-twitter" />
          </a>
          <a href="#" className="facebook">
            <i className="bi bi-facebook" />
          </a>
          <a href="#" className="instagram">
            <i className="bi bi-instagram" />
          </a>
          <a href="#" className="linkedin">
            <i className="bi bi-linkedin" />
          </a>
        </div> */}
      </div>
    </header>
    {/* End Header */}
  </>
  

  )
}
