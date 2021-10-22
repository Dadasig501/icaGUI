import React, { useState } from "react";
import axios from 'axios';
import { Tab, Tabs, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Document, Page } from 'react-pdf';
import c from '../resources/lenguaje_C.pdf';
import ReactPDF from '@intelllex/react-pdf';
import ProjectsTabs from "./ProjectsTabs";

function ShowFiles(props) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const renderCard = () => {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        )
    }
    return (
        <div >
            <Row>
                <Col>
                    <Tabs defaultActiveKey="pdf" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="pdf" title="PDF">
                            <h1>pdf</h1>
                        </Tab>
                        <Tab eventKey="exel" title="EXEL">
                            <h1>Exels</h1>
                        </Tab>
                        <Tab eventKey="ppt" title="PPT">
                            <h1>ppt</h1>
                        </Tab>
                        <Tab eventKey="imgages" title="IMAGES">
                            <h1>{renderCard}</h1>
                            
                        </Tab>
                        <Tab eventKey="music" title="MUSIC">
                            <h1>music</h1>
                            <ProjectsTabs/>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </div>
    );
}
export default ShowFiles;