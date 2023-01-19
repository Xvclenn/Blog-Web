import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/NavBarSection.css";

export function NavBarSection() {
    return (
        <>
            <Navbar bg="warning" variant="light">
                <Container>
                    <Nav>
                        <Nav.Link href="#profile">PROFILE</Nav.Link>
                        <Nav.Link href="#gallery">GALLERY</Nav.Link>
                        <Nav.Link href="#video">VIDEO</Nav.Link>
                    </Nav>
                    <Navbar.Brand className="m-0" href="#home">
                        <h1 className="m-0">TWICE</h1>
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#originalPage">ORIGINAL PAGE</Nav.Link>
                        <Nav.Link href="#discography">DISCOGRAPHY</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
