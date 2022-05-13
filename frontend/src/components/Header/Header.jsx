import React from 'react'
import {Navbar,Nav,NavDropdown,Container} from "react-bootstrap";
import {NavLink,Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import "./header.css";
import {signOut} from "../../../src/redux/actions/auth,actions"
import { useNavigate } from 'react-router-dom';

const Header=(props)=>{

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () =>{
    dispatch(signOut());
    navigate("/signin")
  }

  const renderLoggedInLinks = () =>{
    return (
      <Nav className="linkButtonGroup">
          <span className="linkButtons" style={{cursor:"pointer"}} onClick={logout}>SignOut</span>
      </Nav>
    )
  }

  const renderNotLoggedInLinks = () =>{
    return (
      <Nav className="linkButtonGroup">
          <NavLink to="/signIn" className="linkButtons">SignIn</NavLink>
          <NavLink to="/signUp" className="linkButtons">SignUp</NavLink>
      </Nav>
    )
  }

  return (
    <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark" style={{zIndex:"1"}}>
        <Container fluid>
        <NavLink to="/" className="NavHome">Date Selector</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {auth.authenticate ? renderLoggedInLinks() : renderNotLoggedInLinks()}
        </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Header