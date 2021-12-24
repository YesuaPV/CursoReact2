import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Imagen from '../images/git.png';

const Index = ({msg, form, onChange, onSubmit,link1,link2,link3,link4,link5}) => (
    <div className='body-index bg-black'>
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Brand ><span className='black'>Curso</span>React</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#" onClick={link1}>Home</Nav.Link>
                    <NavDropdown title="Actividades" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#" onClick={link2}>Formulario</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={link3}>RFC</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={link4}>Api GitHub</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={link5}>Domicilio</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


        <div className="container2 pt-5">
                <div className="login-box">
                    <h2 className="mb-4 pt-3">Iniciar Sesi&oacute;n</h2>
                    <form onSubmit={onSubmit} className="ps-5 pe-5 pt-5">
                        <div className="user-box pb-3">
                            <input type="text" name="usuario" onChange={onChange} value={form.usuario} id="usuario" required="" autoComplete="off" className="ps-1"></input>
                            <label >Usuario:</label>
                        </div>
                        <div className="user-box pb-2">
                            <input type="password" name="clave" onChange={onChange} value={form.clave} id="clave" required="" autoComplete="off" className="ps-1"></input>
                            <label>Contraseña:</label>
                        </div>
                        <div className="d-flex flex-row-reverse">
                            <p>{msg}</p>
                        </div>
                        <div className="d-flex flex-row-reverse">
                            <button type="submit" className="custom-btn btn-3" ><span>Aceptar</span></button>
                        </div>
                    </form>
            </div>
       
        </div>



        

        <Navbar bg="dark" variant="dark" fixed="bottom">
            <Container>
            <Navbar.Brand href="https://github.com/YesuaPV/cursoReact2">
                <img
                alt=""
                src={Imagen}
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
            <span className='ps-4'>Desarrollado Por </span>Yesua David P&eacute;rez Vidales
            </Navbar.Brand>
            </Container>
        </Navbar>


       
    </div>
);

export default Index;