import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import './modal.css'
const ReactBootstrapModal = ({ showModalRecovery,showModalUnlockUser, toggleModal, text ,textButton}) => {


 
    return (
        <>


            <Modal show={showModalRecovery || showModalUnlockUser} onHide={toggleModal} dialogClassName='modal-dialog-centered'>
                <Modal.Header closeButton>
                    <Modal.Title>{text}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email "
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    
                </Modal.Body>
                <Modal.Footer className='footerClass'>
                    <Button className='button' variant="secondary" onClick={toggleModal}>
                        {textButton}
                    </Button>
                    
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ReactBootstrapModal;
