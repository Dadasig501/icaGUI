import React, { useState} from "react";
import { Form, Button, Card } from 'react-bootstrap';
import { Redirect } from "react-router";
import '../css/Form.css';
import Logo from '../resources/img/LogoICA.jpg';
import ImgPerfil from '../resources/img/PerfilICA.png';
import axios from 'axios';
import NavBar from '../components/Navbar';
import api from '../models/api';

function Formulario() {
    const [redirect, setredirect] = useState(false);
    const [email, setemail] = useState(" ");
    const [password, setpassword] = useState(" ");
    const [data, setdata] = useState({});


    const handleChangeEmail = (e) => {
        setemail(e.target.value);
    }
    const handleChangePassword = (e) => {
        setpassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const credentials = {
            email: email,
            password: password
        };

        axios.post(`http://192.168.0.19:8080/api/logs`, { credentials })
            .then(res => {
                //console.log(res);
                const datos = res.data;
                console.log(datos);
                setdata(datos);
                console.log("uwu: ", data);
                console.log("/n");
                console.log(" ");
                if(data.validation){
                    setredirect(true);
                }else{
                    setredirect(false);
                }
            }).catch(err => {
                alert(err);
            });
    }
    if(redirect){
        return(
            <h1>Home</h1>
        );
    }else{
    return (
        <div className='Form' style={{
            backgroundImage: { Logo }
        }}>
            <center>
                <NavBar/>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={ImgPerfil} />
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={handleChangeEmail} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={handleChangePassword} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            <h1>Nombre: {data.name}</h1>
                            <h2>Last Name: {data.lastName}</h2>
                            <h3>Validation: {data.validation}</h3>
                        </Form>
                    </Card.Body>
                </Card>
            </center>
        </div>
    );
    }
}

export default Formulario;