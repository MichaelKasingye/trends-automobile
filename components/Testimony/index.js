import React from 'react'

export default function index() {
  return (
    <section id="testimonials" className="testimonials section-bg">
  <div className="container">
  <div className="section-header">
          <span>Testimonials</span>
          <h2>Testimonials</h2>
        </div>
    <div
      className="testimonials-slider swiper"
      data-aos="fade-up"
      data-aos-delay={100}
    >
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="testimonial-item">
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left" />
              My Prado Tx 2008 was getting old and rusty. Am happy Trends Auto mobile gave it
              a fresh look.
              <i className="bx bxs-quote-alt-right quote-icon-right" />
            </p>
            <img
              src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="testimonial-img"
              alt=""
            />
            <h3>Sara Wilsson</h3>
            <h4>Designer</h4>
          </div>
        </div>
        {/* End testimonial item */}
        <div className="swiper-slide">
          <div className="testimonial-item">
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left" />
              I always have my car serviced from Trends AutoMobile. The team there 
              know what they are doing.
              <i className="bx bxs-quote-alt-right quote-icon-right" />
            </p>
            <img
              src="https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="testimonial-img"
              alt=""
            />
            <h3>Jena Karlis</h3>
            <h4>Store Owner</h4>
          </div>
        </div>
        {/* End testimonial item */}
        <div className="swiper-slide">
          <div className="testimonial-item">
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left" />
              Am Happy with Trends AutoMobile otherwise I would be in trouble 
              with my E class Benz 2010 computer issues.
              <i className="bx bxs-quote-alt-right quote-icon-right" />
            </p>
            <img
              src="https://images.pexels.com/photos/1170261/pexels-photo-1170261.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="testimonial-img"
              alt=""
            />
            <h3>Matt Brandon</h3>
            <h4>Freelancer</h4>
          </div>
        </div>
        {/* End testimonial item */}
       
      </div>
      <div className="swiper-pagination" />
    </div>
  </div>
</section>

  )
}
