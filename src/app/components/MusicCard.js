// dependencies
import React, {Component} from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import axios from 'axios';
import vars from '../../env';


class MusicCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            isShowingModal: false
        };
    }

    // post test
    componentDidMount() {
        /*axios.post(`${vars.apiUrl}musics`, {
            album: 'music1',
            artist: 'music1',
            track: 'music1'
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });*/
    }

    // handle clickers -> set state to validate after and open modal
    handleClick = () => this.setState({isShowingModal: true});
    handleClose = () => this.setState({isShowingModal: false});

    render() {
        return (
            <div key={this.props.data.id} className="musicCard col-md-4 col-ms-12">
                <div className="boxer" onClick={this.handleClick}>
                    {
                        this.state.isShowingModal &&
                        <ModalContainer className="ee" onClose={this.handleClose}>
                            <ModalDialog onClose={this.handleClose}>
                                <h1><i className="fa fa-music"> </i> {this.state.data.track}</h1>
                                <ul className="list-unstyled list-inline-item text-center trackModalInfo">
                                    <li className="list-inline-item"><strong>id:</strong> {this.state.data.id}</li>
                                    <li className="list-inline-item"><strong>album:</strong> {this.state.data.album}</li>
                                    <li className="list-inline-item"><strong>album:</strong> {this.state.data.artist}</li>
                                </ul>
                            </ModalDialog>
                        </ModalContainer>
                    }
                    <a>

                        <img className="delayedTransition" src="http://via.placeholder.com/400" alt=""/>
                    </a>
                    <div className="btBoxer delayedTransition">
                        <div className="musicInfo">
                            <i className="fa fa-headphones transition"> </i>
                            <span className="trackName">{this.state.data.track}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MusicCard;
