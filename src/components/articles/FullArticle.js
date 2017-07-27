//React
import React from 'react';
import { string, bool, func, } from 'prop-types';
//Component
import { Button, Modal, ModalFooter } from 'reactstrap';
//Css
import '../../assets/stylesheets/modals.css'

const FullArticle = ({ web_url, isOpen, toggle }) => {
    return (
        <Modal isOpen={ isOpen } toggle={ toggle } className="customModalSize" >
            <iframe title='news story' height='100%' width='100%' src={ web_url }/>
            <ModalFooter>
                <Button onClick={ toggle }>Close Article</Button>
            </ModalFooter>
        </Modal>
    );
};

FullArticle.PropTypes = {
    web_url: string.isRequired,
    isOpen: bool.isRequired,
    toggle: func.isRequired,
};

export default FullArticle