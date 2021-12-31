import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" >
                <Container className="justify-content-center">
                {/* <Navbar.Brand>Todo List With REST API Developed By Manusrul Tanvir Team 20</Navbar.Brand> */}
                <h2>Todo List With REST API Developed By Manusrul Tanvir Team 20</h2>

                </Container>
            </Navbar>
        </div>
    )
}

export default Header
