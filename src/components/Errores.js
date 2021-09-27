import React, {useState} from 'react';
import { Alert,Button} from 'react-bootstrap';
import { render } from 'react-dom';


function Errores(props) {
    const [show, setShow] = useState(true);

        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>{props.title}!</Alert.Heading>
                <p>
                    {props.status}
                    {props.errors}
                </p>
                <Button onClick={() => setShow(true)}>Show Alert</Button>;
            </Alert>
        );


}
export default Errores;
