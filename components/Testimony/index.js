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
              Export tempor illum tamen malis malis eram quae irure esse labore
              quem cillum quid cillum eram malis quorum velit fore eram velit
              sunt aliqua noster fugiat irure amet legam anim culpa.
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
              Enim nisi quem export duis labore cillum quae magna enim sint
              quorum nulla quem veniam duis minim tempor labore quem eram duis
              noster aute amet eram fore quis sint minim.
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
              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos
              export minim fugiat minim velit minim dolor enim duis veniam ipsum
              anim magna sunt elit fore quem dolore labore illum veniam.
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
