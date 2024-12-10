import { useState } from "react";
import {Container,Card, Form, Button} from "react-bootstrap"
import { useNavigate } from "react-router";
import axios from "axios"
import Swal from 'sweetalert2'

export const Regist = () => {

    const [data, setData] = useState({});
    const navigate = useNavigate();

    const onChangeRegister = (e)=>{
        e.preventDefault();
        const nData = data;
        nData[e.target.name] = e.target.value;
        setData(nData);
        console.log(nData)
    }

    const onSubmit = async ()=>{
        try {
            data.rol="client"
            await axios.post("http://localhost:4000/users/regist", data)
            Swal.fire({
                icon: "success",
                title: "Te registraste",
                showConfirmButton: false,
                timer: 1500,
                willClose: ()=> { window.location.reload() }
              });
            navigate("/")
        } catch (error) {
            alert("no se pudo carnalito")
        }
    }


    return(
        <>
        <Container>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control onChange={onChangeRegister} type="name" name="name" placeholder="Usuario"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={onChangeRegister} type="email" name="email" placeholder="mayate@insano"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control onChange={onChangeRegister} type="password" name="password" placeholder="Password"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Button onClick={()=> onSubmit()} ><i class="bi bi-check-circle-fill"></i> Uniendose</Button>
                </Form.Group>
            </Form>
        </Container>
        </>
    )
}