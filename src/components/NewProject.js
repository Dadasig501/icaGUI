import React, { useState } from "react";
import { Form, FormCheck, FormControl, Button, Table, Col, Row } from 'react-bootstrap';
import DateTimePicker from 'react-datetime-picker';
import axios from 'axios';
import api from '../models/api';

function NewProject(props) {
    console.log(props);
    const [date, setdate] = useState(new Date());
    const [data, setdata] = useState({});
    const [changeFolder, setchangeFolder] = useState(false);
    const [projectFolder, setprojectFolder] = useState();
    const [prioridad, setPrioridad] = useState("Baja");

    const changeNombre = (e) => {
        console.log(date);

    }
    const changeSwitch = () => {
        console.log(prioridad);
        setchangeFolder(!changeFolder);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${api}api/projects`, { date })
            .then(res => {
                console.log('awa de uwu');
                console.log(res);
                const datos = res.data;
                setdata(datos);
                console.log(datos);
            }).catch(err => {
                alert(err);
            });
    }

    return (
        <div>
            <Form>
                <Row>
                    <Col>
                        <Form.Control placeholder="Project Name" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Customer" />
                    </Col>
                </Row><br></br>
                <Row>
                    <Col>
                        <Form.Control placeholder="Comments" />
                    </Col>
                    <Col>
                        <h2>Priority</h2>
                        <Form.Check.Input
                            type="radio"
                            value="Alta"
                            name="formHorizontalRadios"
                            onClick={() => setPrioridad("Alta")}
                        />
                        <Form.Check.Label>
                            Alta
                        </Form.Check.Label>

                        <Form.Check.Input
                            type="radio"
                            value="Normal"
                            name="formHorizontalRadios"
                            onClick={() => setPrioridad("Normal")}
                        />
                        <Form.Check.Label>
                            Normal
                        </Form.Check.Label>

                        <Form.Check.Input
                            type="radio"
                            value="Baja"
                            name="formHorizontalRadios"
                            onClick={() => setPrioridad("Baja")}
                            defaultChecked
                        />
                        <Form.Check.Label>
                            Baja
                        </Form.Check.Label>
                    </Col>
                </Row>
                <Row>
                    <Col>

                    </Col>
                    <Col>

                    </Col>
                </Row>
                <Form.Switch
                    onChange={changeSwitch}
                    id="custom-switch"
                    label="use project folder"
                    checked={changeFolder}

                />
                <DateTimePicker
                    onChange={setdate}
                    value={date}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    timeCaption="time"
                    dateFormat="yyyy-MM-dd HH:mm:ss"
                />
                <Button variant="outline-warning" type="submit">Send</Button>
            </Form>

        </div >
    );
}

export default NewProject;