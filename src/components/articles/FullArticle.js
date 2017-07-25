//React
import React from 'react';
import {} from 'prop-types';
//Component
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
//Css
import '../../assets/stylesheets/modals.css'

const FullArticle = ({ web_url, isOpen, toggle }) => {
    return (
        <Modal isOpen={ isOpen } toggle={ toggle } className="customModalSize" >
            <iframe height='100%' width='100%' src={ web_url }/>
            <ModalFooter>
                <Button onClick={ toggle }>Close Article</Button>
            </ModalFooter>
        </Modal>
    );
};

FullArticle.PropTypes = {};

export default FullArticle