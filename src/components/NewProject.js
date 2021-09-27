import React, { useState } from "react";
import { Form, FormControl, Button, Table, Col, Row } from 'react-bootstrap';
import DateTimePicker from 'react-datetime-picker';
import axios from 'axios';


function NewProject(props) {
    console.log(props);
    const [date, setdate] = useState(new Date());
    const [data, setdata] = useState({});
    
    const changeNombre = (e) => {
        console.log(date);
        
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://192.168.100.199:8080/api/projects`, { date })
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
            <Form className="d-flex" onSubmit={handleSubmit}>
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

        </div>
    );
}

export default NewProject;