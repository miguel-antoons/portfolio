import React from "react";
import { Modal, Button } from 'react-bootstrap';

const Details = ({onHide, proof, title, description, pictures, show}) => {
    return (
        <Modal
            onHide={onHide}
            show={show}
            size='xl'
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Activity Details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <h4>{title}</h4>
                    <div className="row">
                        <div className="col-4 imageCon">
                            {
                                pictures.map((image) => (<img src={image} alt='' />))
                            }
                        </div>
                        <div className="col-8">
                            {description}
                        </div>
                    </div>
                    <br />
                    <h5>Proof</h5>
                    <div className="row">
                        <div className="col">
                            {
                                proof.map((image) => (<><img className="widthLim" src={image} alt='' /></>))
                            }
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Details;
