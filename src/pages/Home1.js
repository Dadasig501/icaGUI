import React, { useState } from "react";
import Calendar from 'react-calendar';
//import DatePicker from "react-datepicker";
import { Tabs, Tab, Toast, Row, Col,CloseButton } from 'react-bootstrap';
import logo from "../resources/img/PerfilICA.png";
import 'react-calendar/dist/Calendar.css';
import '../css/Home.css';
import "react-datepicker/dist/react-datepicker.css";
/*Code:

<div className="Home">
                <h1>Casa de ingeniero</h1>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
            <div className="Home">
                <h1>Hola que tal</h1>
                <h1>uwu</h1>
            </div>
            <div>
                <center>
                    <Calendar onChange={setdate} value={date} />
                </center>
            </div>

*/
function Hom() {
    const [date, setdate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    console.log(date);
    console.log(startDate);
    return (
        <div>
            <Row>
                <Col>
                    <Toast position='top-start'>
                        <Toast.Header>
                            <img src={logo} width="20%" height="auto" className="rounded me-2" alt="" />
                            <strong className="me-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                    </Toast>
                </Col>
                <Col>
                    <center>
                        <Calendar onChange={setdate} value={date} />
                    </center>
                </Col>
            </Row>
        </div>
    );
}
export default Hom;