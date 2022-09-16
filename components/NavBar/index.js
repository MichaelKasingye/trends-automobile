import React from 'react'

export default function Index() {
  return (
    <>
  {/* ======= Header ======= */}
  <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
      <a href="index.html" className="logo d-flex align-items-center">
        {/* Uncomment the line below if you also wish to use an image logo */}
        {/* <img src="assets/img/logo.png" alt=""> */}
        <h1 className="d-flex align-items-center">Nova</h1>
      </a>
      <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <a href="index.html" className="active nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="about.html" className='nav-link'>About</a>
          </li>
          <li>
            <a href="services.html" className='nav-link'>Services</a>
          </li>
          <li>
            <a href="portfolio.html"className='nav-link'>Portfolio</a>
          </li>
          <li>
            <a href="team.html"className='nav-link'>Team</a>
          </li>
          <li>
            <a href="blog.html"className='nav-link'>Blog</a>
          </li>
          <li className="dropdown">
            <a href="#"className='nav-link'>
              <span>Dropdown</span>{" "}
              <i className="bi bi-chevron-down dropdown-indicator" />
            </a>
            <ul>
              <li>
                <a href="#"className='nav-link'>Dropdown 1</a>
              </li>
              <li className="dropdown">
                <a href="#"className='nav-link'>
                  <span>Deep Dropdown</span>{" "}
                  <i className="bi bi-chevron-down dropdown-indicator" />
                </a>
                <ul>
                  <li>
                    <a href="#"className='nav-link'>Deep Dropdown 1</a>
                  </li>
                  <li>
                    <a href="#"className='nav-link'>Deep Dropdown 2</a>
                  </li>
                  <li>
                    <a href="#"className='nav-link'>Deep Dropdown 3</a>
                  </li>
                  <li>
                    <a href="#"className='nav-link'>Deep Dropdown 4</a>
                  </li>
                  <li>
                    <a href="#"className='nav-link'>Deep Dropdown 5</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#"className='nav-link'>Dropdown 2</a>
              </li>
              <li>
                <a href="#"className='nav-link'>Dropdown 3</a>
              </li>
              <li>
                <a href="#">Dropdown 4</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="contact.html"className='nav-link'>Contact</a>
          </li>
        </ul>
      </nav>
      {/* .navbar */}
    </div>
  </header>
  {/* End Header */}
</>

  )
}
