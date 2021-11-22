import React from 'react';
import copywriting from '../images/copywriting.svg';
import design from '../images/design.svg';
import seo from '../images/seo.svg';
import software from '../images/software.svg';
import website from '../images/website.svg';
import support from '../images/support.svg';


function Services() {
  return (
    <div id="services">
      <div className="container">
      <h1 className="text-center py-5">Services</h1>
      <div className="row text-center">
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 service-card">
          <img src={website} alt={website} className="img-fluid img" />
          <h5 className="mt-2">Web Development</h5>
          <p className="text-muted ">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 service-card">
          <img src={design} alt={design} className="img-fluid img" />
          <h5 className="mt-2">Logo Design</h5>
          <p className="text-muted ">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 service-card">
          <img src={seo} alt={seo} className="img-fluid img" />
          <h5 className="mt-2">SEO</h5>
          <p className="text-muted ">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 service-card">
          <img src={copywriting} alt={copywriting} className="img-fluid img" />
          <h5 className="mt-2">Copywriting</h5>
          <p className="text-muted ">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 service-card">
          <img src={software} alt={software} className="img-fluid img" />
          <h5 className="mt-2">Software Development</h5>
          <p className="text-muted ">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 service-card">
          <img src={support} alt={support} className="img-fluid img" />
          <h5 className="mt-2">Tech Support</h5>
          <p className="text-muted ">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Services
