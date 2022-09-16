import React from 'react'

export default function Index() {
  return (
    <>
    {/* ======= Header ======= */}
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center">
        <div className="logo me-auto">
          <h1>
            <a href="index.html">Trends Auto</a>
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
            <li className="dropdown">
              <a href="#">
                <span>Drop Down</span> <i className="bi bi-chevron-down" />
              </a>
              <ul>
                <li>
                  <a href="#">Drop Down 1</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Drop Down</span>{" "}
                    <i className="bi bi-chevron-right" />
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Drop Down 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Drop Down 2</a>
                </li>
                <li>
                  <a href="#">Drop Down 3</a>
                </li>
                <li>
                  <a href="#">Drop Down 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
        {/* .navbar */}
        <div className="header-social-links d-flex align-items-center">
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
        </div>
      </div>
    </header>
    {/* End Header */}
  </>
  

  )
}
