import React, { useState } from "react";
import axios from 'axios';
import { Form, FormControl, Button, Table } from 'react-bootstrap';


function Nas() {
    const [uploadFile, setUploadFile] = useState();

    const subir = (e) => {
        console.log(e.target.files);
        setUploadFile(e.target.files);
    }
    
    const submitForm = (event) => {
        event.preventDefault();
        let configu = { headers: {
            'Content-Type': 'multipart/form-data'
        }}
        const dataArray = new FormData();
        dataArray.append("archivo", uploadFile[0]);
        console.log(dataArray);
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
            <form onSubmit={submitForm}>
                <br />
                <input type="file" onChange={subir} />
                <br />
                <input type="submit" />
            </form>
            <hr />
            
        </div>
    );
}
export default Nas;