import React from "react"
import Card from "react-bootstrap/Card"
import MarlonBakerSWE from './marbakerswe.png'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src={MarlonBakerSWE} />
        <Card.Body>
            <Card.Title>Marlon Baker SWE</Card.Title>
            <Card.Text>
            Software Engineer | CSULB
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard