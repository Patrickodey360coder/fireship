import React from 'react'
import about from '../images/about.jpg'

function About() {
  return (
    <div className="container my-5 my-sm-3 py-4" id="goal">
      <div className="row my-5">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 px-3">
          <h1 className="my-3">What we are here for</h1>
          <p className="text-muted">Our group of SEO Services make answers for our customers, yet get our customers front and center the market by giving designated traffic to your necessities. We like to be on top by bringing our customers the consideration that they want.</p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <img src={about} alt={about} className="img-fluid" />
        </div>
      </div>
    </div>
  )
}

export default About
