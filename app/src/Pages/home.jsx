import React from 'react';
import { useState } from 'react';
import {Container,Card, Button, Modal} from "react-bootstrap"
import { Barra } from '../Components/Barra';
import { LoginForm } from '../Components/Login';
import { Regist } from '../Components/Regist';

const Home = ()=>{
    const [showL, setShowL] = useState(false);
    const handleCloseL = () => setShowL(false);
    const handleShowL = () => setShowL(true);

    const [showR, setShowR] = useState(false);
    const handleCloseR = () => setShowR(false);
    const handleShowR = () => setShowR(true);
  
    return(
        <>
        <Barra />
        <Container className='mt-2'>
            <Card>
                <Card.Body style={{ width: "90rem", margin: "auto" }}>
                    <Card.Title>Pagina para hacer Tareas ʕ•ᴥ•ʔ </Card.Title>
                    <Button size="lg" className='mt-3' variant='primary' onClick={handleShowL}><i class="bi bi-door-open-fill"></i> Iniciar Sesión</Button>
                    <Button  className='mt-3'variant="outline-primary" onClick={handleShowR}><i class="bi bi-person-add"></i> Registrarse ༼ つ ◕_◕ ༽つ</Button>
                </Card.Body>
            </Card>
        </Container>

        <Modal show={showL} onHide={handleCloseL}>
            <Modal.Header closeButton>
                <Modal.Title>Entrando</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <LoginForm/>
            </Modal.Body>
        </Modal>

        <Modal show={showR} onHide={handleCloseR}>
            <Modal.Header closeButton>
                <Modal.Title><i class="bi bi-pencil-square"></i> Unete Chavo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Regist/>
            </Modal.Body>
        </Modal>
        </>
    )
}

export default Home;

