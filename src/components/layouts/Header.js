//React
import React from 'react';
import {} from 'prop-types';
//Component
import { Navbar, Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
//CSS
import '../../assets/stylesheets/header.css';
import SearchField from '../common/SearchField';

const Header = ({ changeArticles, currentPage, searchInput }) => {
    const pages = [ 'Home', 'World', 'U.S.', 'Politics', 'N.Y.', 'More' ];
    return (
        <div>
            <Navbar color='inverse' inverse toggleable>
                <Col xs={{ size: 12, }} sm={{ size: 6, }} md={{ offset: 3, size: 3, }} lg={{ offset: 4, size: 4, }} className='centerDivText'>
                    <h4 className="headerTitle">The Time's</h4>
                </Col>
                <Col xs={{ size: 12, }} sm={{ size: 6, }} md={{ size: 6, }}  lg={{ offset: 1, size: 3, }} className='float-right'>
                    <SearchField onChange={ searchInput } />
                </Col>
            </Navbar>
            <Nav>
                <Container>
                    <Row>
                        { pages.map( page => {
                            return(
                                <Col xs={{size: 4}} sm={{size: 2}}>
                                    <NavItem>
                                        <NavLink href="#"
                                                 onClick={ () => changeArticles({pageName: page}) }
                                                 className={ `navLink ${currentPage === page ? 'activeTab' : ''}` }>
                                            { page }
                                        </NavLink>
                                    </NavItem>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </Nav>
        </div>
    );
};

Header.PropTypes = {};

export default Header