import React from 'react'

export default function index() {
  return (
    <section id="portfolio" className="portfolio">
       <div className="section-header">
          <span>Gallery</span>
          <h2>Gallery</h2>
        </div>
  <div className="container" data-aos="fade-up">
    <div
      className="portfolio-isotope"
      data-portfolio-filter="*"
      data-portfolio-layout="masonry"
      data-portfolio-sort="original-order"
    >
    
      {/* End Portfolio Filters */}
      <div
        className="row gy-4 portfolio-container"
        data-aos="fade-up"
        data-aos-delay={300}
      >
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <img
            src="https://bidfax.info/uploads/posts/2019-06/04/toyota-land-cruis-2016-jtmcy7aj8g4042148-img1.jpg"
            className="img-fluid"
            alt=""
          />
          <div className="portfolio-info">
            <h4>LandCruise 2010</h4>
            <p>Modified LandCruise look 2010 to 2016</p>
            
          </div>
        </div>
        {/* End Portfolio Item */}
        <div className="col-lg-4 col-md-6 portfolio-item filter-product">
          <img
            src="https://bestcarmagz.net/sites/default/files/91238122009-mercedes-benz-e-class-1.jpg"
            className="img-fluid"
            alt=""
          />
          <div className="portfolio-info">
            <h4>Mercedes e class 2010</h4>
            <p>Refurbished e class 2007 to 2010</p>
          </div>
        </div>
        {/* End Portfolio Item */}
        <div className="col-lg-4 col-md-6 portfolio-item filter-branding">
          <img
            src="https://www.dealerlogin.co/ug/AFFORDABLE-QUALITY-VEHICLES-UGANDA-LTD/image_323_7167408_1.jpeg"
            className="img-fluid"
            alt=""
          />
          <div className="portfolio-info">
            <h4>Premio 2011</h4>
            <p>Refurbished Premio 2010 to 2011</p>
          </div>
        </div>
        {/* End Portfolio Item */}
   
           
      </div>
      {/* End Portfolio Container */}
    </div>
  </div>
</section>

  )
}
