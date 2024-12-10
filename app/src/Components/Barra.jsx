import {Container, Nav,Navbar} from "react-bootstrap"
import { useNavigate } from "react-router"

export const Barra = ()=>{
    return(
        <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="mx-5" >
          <Navbar.Brand href="/"><i></i> Tareas Los Mayates</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}

export const BarraUser = () => {

  const user= JSON.parse(localStorage.user)
  const navigate = useNavigate()

  const logout =()=>{
    localStorage.clear()
    navigate("/")
  }

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container >
          <Navbar.Brand className="mx-5" href="/user"><i></i> Tareas Los Mayates</Navbar.Brand>
          <Nav className="me-auto">
            <Navbar.Text>Otra vez aqui ¯\_(ツ)_/¯,  {user.name}</Navbar.Text>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link onClick={()=>logout()}><i class="bi bi-box-arrow-right"></i> Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export const BarraAdmin = ()=>{
  const user= JSON.parse(localStorage.user)
  const navigate = useNavigate()

  const logout =()=>{
    localStorage.clear()
    navigate("/")
  }
  return(
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="mx-5" >
          <Navbar.Brand href="/user"><i></i> Tareas Los Mayates</Navbar.Brand>
          <Nav className="me-auto">
            <Navbar.Text>Bienvenido Lord (ᵔᴥᵔ), {user.name}</Navbar.Text>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link onClick={()=>logout()}><i class="bi bi-box-arrow-right"></i> Salir</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}


