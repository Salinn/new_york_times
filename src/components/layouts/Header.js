//React
import React from 'react';
import {} from 'prop-types';
//Component
import { Navbar, Col, Nav, NavItem, NavLink } from 'reactstrap';
//CSS
import '../../assets/stylesheets/header.css';
import SearchField from '../common/SearchField';

const Header = ({ changeArticles }) => {
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
                        <NavLink href="#" onClick={ () => changeArticles({ pageName: 'Home'}) }>Home</NavLink>
                    </NavItem>
                </Col>
                <Col xs={{ size: 2 }}>
                    <NavItem>
                        <NavLink href="#" onClick={ () => changeArticles({ pageName: 'World'}) }>World</NavLink>
                    </NavItem>
                </Col>
                <Col xs={{ size: 2 }}>
                    <NavItem>
                        <NavLink href="#" onClick={ () => changeArticles({ pageName: 'U.S.'}) }>U.S.</NavLink>
                    </NavItem>
                </Col>
                <Col xs={{ size: 2 }}>
                    <NavItem>
                        <NavLink href="#" onClick={ () => changeArticles({ pageName: 'Politics'}) }>Politics</NavLink>
                    </NavItem>
                </Col>
                <Col xs={{ size: 2 }}>
                    <NavItem>
                        <NavLink href="#" onClick={ () => changeArticles({ pageName: 'N.Y.'}) }>N.Y.</NavLink>
                    </NavItem>
                </Col>
                <Col xs={{ size: 2 }}>
                    <NavItem>
                        <NavLink href="#" onClick={ () => changeArticles({ pageName: 'Sports'}) }>Sports</NavLink>
                    </NavItem>
                </Col>
            </Nav>
        </div>
    );
};

Header.PropTypes = {};

export default Header