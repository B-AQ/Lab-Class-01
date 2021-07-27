import React from "react";
// import './HornedBeast.css';

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfRate: 0,
    };
  }

  incrementedNumOfRate = () => {
    this.setState({
      numberOfRate: this.state.numberOfRate + 1,
    });
  };

  render() {
    return (
      <section>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Img variant="top" src={this.props.image_url} />
            <Card.Text>{this.props.discription}</Card.Text>
            Rating of the image : {this.state.numberOfRate}
          </Card.Body>
          <Button onClick={this.incrementedNumOfRate} variant="primary">
            Rate
          </Button>{" "}
        </Card>
      </section>
    );
  }
}
export default HornedBeast;
