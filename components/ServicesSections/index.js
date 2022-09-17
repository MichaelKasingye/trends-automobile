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
                Cumque eos in qui numquam. Aut aspernatur perferendis sed atque
                quia voluptas quisquam repellendus temporibus itaqueofficiis
                odit
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
                Asperiores provident dolor accusamus pariatur dolore nam id
                audantium ut et iure incidunt molestiae dolor ipsam ducimus
                occaecati nisi
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
                Dicta quam similique quia architecto eos nisi aut ratione aut
                ipsum reiciendis sit doloremque oluptatem aut et molestiae ut et
                nihil
              </p>
            </div>
          </div>
          {/* End Card Item */}
         
        </div>
      </div>
    </section>
  );
}
