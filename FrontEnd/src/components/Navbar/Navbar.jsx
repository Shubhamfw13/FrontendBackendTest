import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import Button from "@mui/material/Button";
import Styles from "./Navbar.module.css";

import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <></>
      <>
        <ReactBootStrap.Navbar bg="dark" variant="dark">
          <ReactBootStrap.Container>
            <ReactBootStrap.Navbar.Brand>
              Apartment{" "}
            </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Nav className="me-auto">
              <div className={Styles.headerbtn}>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <Button variant="outlined">Login</Button>
                </Link>
                <Button variant="outlined">Signup</Button>
              </div>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
      </>
    </>
  );
};
