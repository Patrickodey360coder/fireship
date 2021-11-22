import React from 'react'
import team_1 from '../images/team-3.jpeg'
import team_2 from '../images/team-1.jpeg'

function Team() {
  return (
    <div className="container my-5 py-5" id="team">
      <h1 className="text-center mb-5">Meet the team</h1>
      <div className="row text-center mx-auto">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
          <img src={team_1} alt={team_1} className="img-fluid team-img mb-2" />
          <h5>Munish Rana</h5>
          <p className="text-muted font-italic">Chief Executive Officer</p>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
          <img src={team_2} alt={team_2} className="img-fluid team-img mb-2" />
          <h5>Olang A.O. Daniel</h5>
          <p className="text-muted font-italic">Full Stack Developer</p>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
          <img src={team_2} alt={team_2} className="img-fluid team-img mb-2" />
          <h5>Patrick Odey</h5>
          <p className="text-muted font-italic">Frontend Developer</p>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
          <img src={team_2} alt={team_2} className="img-fluid team-img mb-2" />
          <h5>Ankush Bhatia</h5>
          <p className="text-muted font-italic">Social Media Expert</p>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
          <img src={team_2} alt={team_2} className="img-fluid team-img mb-2" />
          <h5>Andor E. Ofre</h5>
          <p className="text-muted font-italic">Backend Developer</p>
        </div>
      </div>
    </div>
  )
}

export default Team
