// WaterFootprintModal.js

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function WaterFootprintModal({ show, onHide, waterFootprint }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Water Footprint Result</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Your water footprint is: {waterFootprint} liters.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default WaterFootprintModal;
