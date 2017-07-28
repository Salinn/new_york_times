//React
import React from 'react';
import {} from 'prop-types';
//Component
import { Navbar, Col, Nav, NavItem, NavLink } from 'reactstrap';
//CSS
import '../../assets/stylesheets/header.css';
import SearchField from '../common/SearchField';

const Header = ({ isOpen, toggle }) => {
    return (
        <div>
            <Navbar color='inverse' inverse toggleable>
                <Col xs={{ offset: 3, size: 6, }}>
                    <h4 className="headerTitle">New York Time's Articles</h4>
                </Col>
                <Col xs={{ size: 3, }}>
                    <SearchField />
                </Col>
            </Navbar>
            <Nav>
                <Col xs={{ size: 2 }}>
                    <NavItem>
                        <NavLink href="#">Home</NavLink>
                    </NavItem>
                </Col>
                <Col xs={{ size: 2 }}>
                    <NavItem>
                        <NavLink href="#">World</NavLink>
                    </NavItem>
                </Col>
                <Col xs={{ size: 2 }}>
                    <NavItem>
                        <NavLink href="#">U.S.</NavLink>
                    </NavItem>
                </Col>
                <Col xs={{ size: 2 }}>
                    <NavItem>
                        <NavLink href="#">Politics</NavLink>
                    </NavItem>
                </Col>
                <Col xs={{ size: 2 }}>
                    <NavItem>
                        <NavLink href="#">N.Y.</NavLink>
                    </NavItem>
                </Col>
                <Col xs={{ size: 2 }}>
                    <NavItem>
                        <NavLink href="#">More</NavLink>
                    </NavItem>
                </Col>
            </Nav>
        </div>
    );
};

Header.PropTypes = {};

export default Header