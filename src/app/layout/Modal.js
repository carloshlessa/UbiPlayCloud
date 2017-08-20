// dependencies
import React, {Component} from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import vars from '../../env';


class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowingModal: vars.modalOpened
        };
    }

    // handle clickers -> set state to validate after and open modal
    handleClose = () => {
        vars.modalOpened = false;
        this.setState({isShowingModal: vars.modalOpened});
    };

    render(){
        return (
            <div>
                {
                    vars.modalOpened &&
                    <ModalContainer className="ee" onClose={this.handleClose}>
                        <ModalDialog onClose={this.handleClose}>
                            <div>
                                {this.props.content}
                            </div>
                        </ModalDialog>
                    </ModalContainer>
                }
                </div>
        )
    }
}

export default Modal
