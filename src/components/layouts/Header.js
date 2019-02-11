//React
import React from 'react';
import { func, string } from 'prop-types';
//Component
import { Navbar, Container, Row, Col, Nav, } from 'reactstrap';
//CSS
import '../../assets/stylesheets/header.css';
import SearchField from '../common/SearchField';
import HeaderSection from './HeaderSection'

const Header = (props) => {
    const { 
        changeSection,
        searchInput,
        currentPage,
        pages
    } = props

    return (
        <div>
            <Navbar color='inverse' inverse toggleable>
                <Col 
                    xs={{ size: 12, }}
                    sm={{ size: 6, }}
                    md={{ offset: 3, size: 3, }}
                    lg={{ offset: 4, size: 4, }}
                    className='centerDivText'>
                    <h4 className="headerTitle">The Time's</h4>
                </Col>
                <Col 
                    xs={{ size: 12, }}
                    sm={{ size: 6, }}
                    md={{ size: 6, }}
                    lg={{ offset: 1, size: 3, }} 
                    className='float-right'>
                    <SearchField onChange={ searchInput } />
                </Col>
            </Navbar>
            <Nav>
                <Container>
                    <Row>
                        { pages.map( page => {
                            return (
                                <HeaderSection
                                    key={page}
                                    page={page}
                                    currentPage={currentPage}
                                    changeSection={changeSection} 
                                />
                            )
                        })}
                    </Row>
                </Container>
            </Nav>
        </div>
    );
};

Header.PropTypes = {
    changeArticles: func.isRequired,
    currentPage: string.isRequired,
    searchInput: func.isRequired,
};

export default Header