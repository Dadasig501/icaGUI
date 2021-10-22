import React, { useState } from "react";
import Calendar from 'react-calendar';
//import DatePicker from "react-datepicker";
import { Toast, Row, Col } from 'react-bootstrap';
import logo from "../resources/img/PerfilICA.png";
import 'react-calendar/dist/Calendar.css';
import '../css/Home.css';
import "react-datepicker/dist/react-datepicker.css";
import Notifications from "../components/Notifications";

function Hom() {
    const [date, setdate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    console.log(date);
    console.log(startDate);
    /*
    
    */
    return (
        <div>
            <Row>
                <Col>
                    <Notifications></Notifications>
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