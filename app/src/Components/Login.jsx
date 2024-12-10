import { useState } from "react";
import {Container,Card, Form, Button} from "react-bootstrap"
import { useNavigate } from "react-router";
import Swal from 'sweetalert2'
import axios from "axios"

export const LoginForm = ()=>{
    const [data, setData] = useState({});
    const navigate = useNavigate();

    const onChange = (e) => {
        e.preventDefault();
        const loginData = data;
        loginData[e.target.name] = e.target.value;
        setData(loginData)
    }

    const onSubmit = async ()=>{
        try {
            const res = await axios.post("http://localhost:4000/users/login",data)
            const user = res.data.user;
            console.log(user)
            user.logined = true
            localStorage.user= JSON.stringify(user)
            if(user.rol == "admin"){
                navigate("/admin")
            }else{
                navigate("/user")
            }
            Swal.fire({
                icon: "success",
                title: "iniciaste sesion bro",
                showConfirmButton: false,
                timer: 1500,
                
            });

        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: "error",
                title: "info incorrecta",
                showConfirmButton: false,
                timer: 1500
            });

        }
    }

    return(
        <>
        <Container>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={onChange} type="email" name="email" placeholder="mayate@insano"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control onChange={onChange} type="password" name="password" placeholder="Password"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Button onClick={()=> onSubmit()}><i class="bi bi-file-person"></i>Loguear</Button>
                </Form.Group>
            </Form>
        </Container>
        </>
    )
}