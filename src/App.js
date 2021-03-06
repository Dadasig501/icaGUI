import React, { Component } from 'react';
import {Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import './App.css';
import Home from './pages/Home';
import Logo from './resources/img/LogoICA.jpg';
import ImgPerfil from './resources/img/PerfilICA.png';
import api from './models/api.json';

class App extends Component {
  state = {
    nombre:"",
    email: "",
    password: "",
    datos: {},
    pagina: false
  }
  nom = {
    
  }
  handleChange = event => {
    this.setState({ email: event.target.value });
  }
  handleChangee = event => {
    this.setState({ password: event.target.value });
  }
  handleSubmit = event => {
    console.log(api);
    event.preventDefault();
    const credentials = {
      email: this.state.email,
      password: this.state.password
    };
    axios.post(`http://192.168.0.19:8080/api/logs`, { credentials })
      .then(res => {
        //console.log(res);
        const datos = res.data;
        console.log(datos);
        this.setState({ datos });
        this.setState({nombre:datos.name});
        console.log(this.state.nombre);
        if(datos.validation == true){
          this.setState({pagina: true});
        }
      }).catch(err => {
        alert(err);
      });
  }
 
  render() {
    if(this.state.pagina == false){
      return (
        <div className='Form' style={{
          backgroundImage: { Logo }
        }}>
          <center>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={ImgPerfil} />
              <Card.Body>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={this.handleChange} />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={this.handleChangee} />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                  <h1>{this.state.datos.name}</h1>
                </Form>
              </Card.Body>
            </Card>
          </center>
        </div>
      );
    }else{
      return(
        <div>
          <Home nombre={this.state.nombre}/>
        </div>
      );
    }
  }
}
export default App;
