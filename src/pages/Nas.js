import React, { useState } from "react";
import { Tabs, Tab, Toast, Row, Col } from 'react-bootstrap';
import UploadFile from "../components/UploadFile";
import ShowFiles from "../components/ShowFiles";

function Nas(props) {
    const [proops, setproops] = useState(props.email);

    return (
        <div >
            <Row>
                <Col>
                    <Tabs defaultActiveKey="upload" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="upload" title="Upload Files">
                            <UploadFile name={proops}/>
                        </Tab>
                        <Tab eventKey="show" title="Show Files">
                            <ShowFiles name={proops}/>
                        </Tab>
                        <Tab eventKey="delete" title="Delete Files">
                            <h1>Borrando</h1>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </div>
    );
}
export default Nas;