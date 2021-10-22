import React, { useState } from "react";
import { Tabs, Tab,Toast, Row, Col } from 'react-bootstrap';
import Search from "./Project.search";
import AllProjects from "../components/AllProjects";
import NewProject from "../components/NewProject";
import logo from "../resources/img/PerfilICA.png";

function Projects(props) {
    console.log(props);
    return (
        <div>
            <Row>
                <Col>
                    <Tabs defaultActiveKey="search" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="search" title="Search">
                            <Search />
                        </Tab>
                        <Tab eventKey="All Projects" title="All Projects">
                            <AllProjects/>
                        </Tab>
                        <Tab eventKey="Up Projects" title="Up Projects">
                            <NewProject/>
                        </Tab>
                        <Tab eventKey="Task" title="Project Task's">
                            <h1>New Task's</h1>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </div>
    );
}
export default Projects;