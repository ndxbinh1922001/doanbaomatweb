import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import learnItLogo from "../../assets/ToDoApp.svg";
import logoutIcon from "../../assets/logout.svg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext,  } from "react";
import { PostContext } from "../../contexts/PostContext";
const NavbarMenu = () => {
  const {
    authState: {
      user: { username },
    },
    logoutUser,
  } = useContext(AuthContext);
  const {
    keywordSearch,
    setKeywordSearch,
  } = useContext(PostContext)
  const logout = () => logoutUser();

 
  
  const onChangeKeyword = (event) =>
    setKeywordSearch(
      event.target.value,
    );
  return (
    <Navbar
      expand="lg"
      bg="primary"
      variant="dark"
      className="shadow ps-3 pe-3"
    >
      <Navbar.Brand className="font-weight-bolder text-white">
        <img src={learnItLogo} alt="learnItLogo" width="120" className="mr-2" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link
            className="font-weight-bolder text-white"
            to="/dashboard"
            as={Link}
          >
            Dashboard
          </Nav.Link>
          <Nav.Link
            className="font-weight-bolder text-white"
            to="/about"
            as={Link}
          >
            About
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={keywordSearch}
            onChange={onChangeKeyword}
          />
        </Form>
        <Nav>
          <Nav.Link className="font-weight-bolder  text-white" disabled>
            Welcome {username.charAt(0).toUpperCase() + username.slice(1)}
          </Nav.Link>
          <Button
            variant="secondary"
            className="font-weight-bolder text- bg-danger"
            onClick={logout}
          >
            <img
              src={logoutIcon}
              alt="logoutIcon"
              width="32"
              height="32"
              className="mr-2"
            />
            Logout
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarMenu;
