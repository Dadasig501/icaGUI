import React, { useState } from "react";
import { Form, FormControl, Button, Table } from 'react-bootstrap';
import axios from 'axios';

import api from '../models/api';


function Editing(props) {
    console.log(props);
    const [rend, setrender] = useState(true);
    const [tick, setticket] = useState();
    const [prioridad, setprioridad] = useState();
    const [data, setdata] = useState({});
    const handleChange = (e) => {
        setticket(e.target.value);
        console.log(prioridad);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://192.168.0.19:8080/api/projects`, { tick })
            .then(res => {
                console.log(res);
                const datos = res.data.data;
                setdata(datos);
                setrender(false);
                console.log(datos);
            }).catch(err => {
                alert(err);
            });
    }
    if (rend == true) {
        return (
            <div>
                <Form className="d-flex" onSubmit={handleSubmit}>
                    <FormControl
                        type="number"
                        placeholder="Insert Ticket"
                        className="mr-2"
                        aria-label="Search"
                        onChange={handleChange}
                    />
                    
                    <Button variant="outline-warning" type="submit">Search Ticket</Button>
                </Form>
                
            </div>
        );
    } else {
        return (
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#id</th>
                            <th>Ticket</th>
                            <th>Nombre</th>
                            <th>Prioridad</th>
                            <th>Fecha final</th>
                            <th>Status</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.ticket}</td>
                            <td>{data.nombre}</td>
                            <td>{data.prioridad}</td>
                            <td>{data.fechaFin}</td>
                            <td>{data.estado}</td>
                            <td>{ }</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );

    }

}

export default Editing;