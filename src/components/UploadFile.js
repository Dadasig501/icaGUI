import React, { useState } from "react";
import axios from 'axios';
import { Form, FormControl, Button, Table } from 'react-bootstrap';


function UploadFile(props) {
    const [uploadFile, setUploadFile] = useState();
    const [folder, setfolder] = useState(props.name);
    const submitForm = (event) => {
        event.preventDefault();
        const dataArray = new FormData();
        dataArray.append("folder", props.name);
        dataArray.append("archivo", uploadFile[0]);
        console.log(dataArray);
        //axios.post("http://192.168.100.199:8080/file/uploads"

        axios.post("http://192.168.100.199:8080/file/uploads", dataArray)
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
            <div>
                
            </div>
        </div>
    );
}
export default UploadFile;