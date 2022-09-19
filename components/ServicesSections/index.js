import React from "react";

export default function index() {
  return (
    <section id="service" className="services pt-0">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <span>Our Services</span>
          <h2>Our Services</h2>
        </div>
        <div className="row gy-4">
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="card">
              <div className="card-img">
                <img
                  src="https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <h3>
                <a href="service-details.html" className="stretched-link">
                Car Spraying
                </a>
              </h3>
              <p>
              Rely on us for all your car spraying needs. To give your car
              afresh look.
              </p>
            </div>
          </div>
          {/* End Card Item */}
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="card">
              <div className="card-img">
                <img
                  src="https://images.pexels.com/photos/1409999/pexels-photo-1409999.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <h3>
                <a href="service-details.html" className="stretched-link">
                  Car Serving
                </a>
              </h3>
              <p>
                We will service your car to make it smoothly and efficiently.
              </p>
            </div>
          </div>
          {/* End Card Item */}
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="card">
              <div className="card-img">
                <img
                  src="https://images.pexels.com/photos/4489704/pexels-photo-4489704.jpeg?auto=compress&cs=tinysrgb&w=600
                  alt="
                  className="img-fluid"
                />
              </div>
              <h3>
                <a href="service-details.html" className="stretched-link">
                  Fixing Cars
                </a>
              </h3>
              <p>
                We shall fix your car in all areas to maintain its strength.
              </p>
            </div>
          </div>
          {/* End Card Item */}
         
        </div>
      </div>
    </section>
  );
}
