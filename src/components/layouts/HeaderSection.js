//React
import React from 'react';
//Component
import { Col, NavItem, NavLink } from 'reactstrap';
//CSS
import '../../assets/stylesheets/header.css';

const HeaderSection = (props) => {
    const {
        page,
        changeSection,
        currentPage
    } = props

    const clickedLink = () => changeSection({ pageName: page })
    const linkStyle = `navLink ${currentPage === page ? 'activeTab' : ''}`

    return (
        <Col key={page} xs={{ size: 4 }} sm={{ size: 2 }}>
            <NavItem>
                <NavLink href="#"
                    onClick={clickedLink}
                    className={linkStyle}>
                    {page}
                </NavLink>
            </NavItem>
        </Col>
    )
}

export default HeaderSection