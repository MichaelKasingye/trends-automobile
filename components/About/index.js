import React from 'react'

export default function Index() {
  return (
    <section id="about" className="about ">
  <div className="container" data-aos="fade-up">
    <div className="row gy-4">
      <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
        <img src="assets/img/mechanic.jpg" className="img-fluid" alt="" />
        {/* <span
          className=" play-btn"
        ></span> */}
      </div>
      <div className="col-lg-6 content order-last  order-lg-first">
        <h3>About Us</h3>
        <p>
          We are an automobile general service team. We will ensure your vehicle is at its best.
          with services ranging from maintenance to vehicle upgrading.
        </p>
        <ul>
          <li data-aos="fade-up" data-aos-delay={100}>
            <i className="bi bi-diagram-3" />
            <div>
              <h5>Completion</h5>
              <p>
                We conclude our tasks in one week.
              </p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay={200}>
            <i className="bi bi-fullscreen-exit" />
            <div>
              <h5>Customer service</h5>
              <p>
                We shall understand your need and have it met.
              </p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay={300}>
            <i className="bi bi-broadcast" />
            <div>
              <h5>Expectations</h5>
              <p>
                Enjoy the fact that your expectations have been concluded
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

  )
}
