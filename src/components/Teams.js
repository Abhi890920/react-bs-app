import React from 'react'
import {Container,Row,Col } from 'react-bootstrap'
import TeamsList from '../data/Teams.json'

function Teams() {
  return (
    <div className="teamSec">
        <Container>
        <h2 className="text-center mb-5">Our Teams</h2>
        <Row>
            {
                TeamsList.map(
                    team => {
                        return (
                            <Col sm={3} key={team.id}>
                                <div className="our-team">
                                    <img src={team.mage_url}/>
                                    <div className="team-content">
                                        <h3 className="title">{team.name}</h3>
                                        <span className="post">{team.deginasion}</span>
                                    </div>
                                    <ul className="social"> 
                                                
                                         <li><a target="_blanks" href={team.social.fb.url} className="fab fa-facebook"></a></li>
                                         <li><a target="_blanks" href={team.social.tw.url} className="fab fa-twitter"></a></li>
                                         <li><a target="_blanks" href={team.social.in.url} className="fab fa-instagram"></a></li>
    
                                    </ul>
                                    <div className="icon fa fa-plus"></div>
                                </div>
                            </Col>
                        )
                    }
                ) 
                
            }

        </Row>
        </Container>
    </div>

  )
}

export default Teams
