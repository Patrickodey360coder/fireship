import React from 'react'
import team_1 from '../images/team-3.jpeg'
import team_2 from '../images/team-1.jpeg'

function Team() {
  return (
    <div className="container my-5 py-5" id="team">
      <h1 className="text-center mb-5">Meet the team</h1>
      <div className="row text-center">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 mx-auto">
          <img src={team_1} alt={team_1} className="img-fluid team-img mb-2" />
          <h5>Patrick odey</h5>
          <p>CEO</p>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 mx-auto">
          <img src={team_2} alt={team_2} className="img-fluid team-img mb-2" />
          <h5>Patrick odey</h5>
          <p>CEO</p>
        </div>
      </div>
    </div>
  )
}

export default Team
