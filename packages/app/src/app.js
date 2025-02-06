import React, { Suspense } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link 
} from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavItem
} from 'reactstrap';

//CSS
import './app.css';

//MF
const App = () => {
    return(
        <Router>
            <div>
                <Navbar color="light" light expend = "md">
                    <Nav className = "mr-auto" Navbar>
                        <NavItem>
                            <Link to="/">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/contact">Contact</Link>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        </Router>
    )
}