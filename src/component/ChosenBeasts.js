import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class Chosen extends React.Component {
  handleClose = () => {
    this.props.hideVisibility;
  };
  render() {
    return (
      <>
        <Button variant="primary" onClick={handleClose}>
          Launch demo modal
        </Button>

        <Modal show={this.props.visibility} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.props.image} alt={this.props.title} />
            <p>{this.props.descripition}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {/* <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button> */}
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Chosen;
