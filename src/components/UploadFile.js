import React, { useState } from "react";
import axios from 'axios';
import { Form, FormControl, Button, Table ,Row,Col} from 'react-bootstrap';
import api from "../models/api";

function UploadFile(props) {
    const [uploadFile, setUploadFile] = useState();
    const [folder, setfolder] = useState(props.name);
    const [opcion, setOpcion] = useState('A');
    const [projects, setprojects] = useState();
    const [ticket, setticket] = useState();


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`http://192.168.0.19:8080/api/projects`)
            .then(res => {
                console.log('awa de uwu');
                console.log(res);
                const datos = res.data.data;
                console.log("awa de uwu", datos);
                setprojects(datos);
                console.log(projects);
            }).catch(err => {
                alert(err);
            });
    }

    //Send files
    const submitForm = (event) => {
        event.preventDefault();
        const dataArray = new FormData();
        if(opcion === 'F') {
            dataArray.append("folder", props.name);
        }
        if(opcion === 'P'){
            dataArray.append("folder", ticket);
        }
        if(opcion === 'A'){
            dataArray.append("folder", '');
        }
        dataArray.append("opcion",opcion);
        dataArray.append("archivo", uploadFile[0]);
        console.log(dataArray);
        //axios.post("http://192.168.100.199:8080/file/uploads"

        axios.post(`${api}file/uploads`, dataArray)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="App">
            <div>
                
                <Form onSubmit={submitForm}>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>
                            Radios
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                                type="radio"
                                label="Carpeta Personal"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                onClick={() => setOpcion('F')}
                            />
                            <Form.Check
                                type="radio"
                                label="Carpeta del proyecto"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                                onClick={() => setOpcion('P')}
                            />
                            <Form.Check
                                type="radio"
                                label="Carpeta General"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios3"
                                onClick={() => setOpcion('A')}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Ticket</Form.Label>
                            <Form.Control type="text" placeholder="Enter ticket" onChange={(e)=>{setticket(e.target.value)}} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>La carpeta personar se elige con el username</Form.Label>
                        </Form.Group>
                    </Form.Row>
                    <Form.Label></Form.Label>
                    <Form.Group controlId="formFileSm" className="mb-3">
                        <Form.Label>Small file input example</Form.Label>
                        <Form.Control type="file" size="sm" onChange={(e) => { setUploadFile(e.target.files) }} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}
export default UploadFile;