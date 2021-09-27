import React, { useState } from "react";
import { Form, FormControl, Button, Table } from 'react-bootstrap';
import axios from 'axios';


function AllProjects(props) {
    console.log(props);
    const [data, setdata] = useState([]);

    /*const handleChange = (e) => {
        setticket(e.target.value);
    }*/
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`http://192.168.100.199:8080/api/projects`)
            .then(res => {
                console.log('awa de uwu');
                console.log(res);
                const datos = res.data.data;
                console.log("awa de uwu",datos);
                setdata(datos);
                console.log(data);
            }).catch(err => {
                alert(err);
            });
    }

    return (
        <div className="d-grid gap-2">
            <Form className="d-flex" onSubmit={handleSubmit}>
                <Button variant="success" type="submit" size="lg">Refresh</Button>
            </Form>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#id</th>
                        <th>Ticket</th>
                        <th>Nombre</th>
                        <th>Cliente</th>
                        <th>Comentario</th>
                        <th>Prioridad</th>
                        <th>Avance</th>
                        <th>Asignacion</th>
                        <th>Fecha Inicial</th>
                        <th>Fecha Final</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr> 
                        <td>{data.map(data => <li>{data.id}</li>)}</td>
                        <td>{data.map(data => <li>{data.ticket}</li>)}</td>
                        <td>{data.map(data => <li>{data.nombre}</li>)}</td>
                        <td>{data.map(data => <li>{data.cliente}</li>)}</td>
                        <td>{data.map(data => <li>{data.comentario}</li>)}</td>
                        <td>{data.map(data => <li>{data.prioridad}</li>)}</td>
                        <td>{data.map(data => <li>{data.avance}</li>)}</td>
                        <td>{data.map(data => <li>{data.asignacion}</li>)}</td>
                        <td>{data.map(data => <li>{data.fechaInicial}</li>)}</td>
                        <td>{data.map(data => <li>{data.fechaFin}</li>)}</td>
                        <td>{data.map(data => <li>{data.estado}</li>)}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default AllProjects;