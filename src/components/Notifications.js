import React, { useState } from "react";
import { Button, Offcanvas, Toast, ToastContainer, Col,Row} from 'react-bootstrap';
import CloseButton from 'react-bootstrap/CloseButton';
import logo from "../resources/img/PerfilICA.png";

function Notifications() {
    
        const [showA, setShowA] = useState(true);
        const [showB, setShowB] = useState(true);
      
        const toggleShowA = () => setShowA(!showA);
        const toggleShowB = () => setShowB(!showB);
      
        return (
          <Row>
            <Col xs={6}>
              <Toast show={showA} onClose={toggleShowA}>
                <Toast.Header>
                  <img
                    src={logo}
                    className="rounded mr-2"
                    alt=""
                  />
                  <strong className="mr-auto">Bootstrap</strong>
                  <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
              </Toast>
            </Col>
            <Col xs={6}>
              <Button onClick={toggleShowA}>
                Toggle Toast <strong>with</strong> Animation
              </Button>
            </Col>
            <Col xs={6} className="my-1">
              <Toast onClose={toggleShowB} show={showB} animation={false}>
                <Toast.Header>
                  <img
                    src={logo}
                    className="rounded mr-2"
                    alt=""
                  />
                  <strong className="mr-auto">Bootstrap</strong>
                  <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
              </Toast>
            </Col>
            <Col xs={6}>
              <Button onClick={toggleShowB}>
                Toggle Toast <strong>without</strong> Animation
              </Button>
            </Col>
          </Row>
        );
}

export default Notifications;