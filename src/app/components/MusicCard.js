// dependencies
import React, {Component} from 'react';
import axios from 'axios';
import vars from '../../env';

// partials
import Modal from "../layout/Modal";


class MusicCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            isShowingModal: vars.modalOpened,
            deleted: false
        };
        this.openModal = this.openModal.bind(this);
        //this.handleDelete = this.handleDelete.bind(this);
    }

    // handle musicCard click to open modal
    openModal(event) {
        event.preventDefault();

        // Set the state to re render
        vars.modalOpened = true;
        this.setState({isShowingModal: !this.state.isShowingModal}); // ES6 shortcut
    }

    handleDelete = (id) => {
        axios.delete(`${vars.apiUrl}musics/${id}`, null).then(function (response) {
            console.log(response);
            this.setState({deleted: true});
        })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        // modal gui builder
        let modalBody = (props) => {
            return (
                <div>
                    <h1><i className="fa fa-music">&nbsp;</i> #{props.data.track}</h1>
                    <ul className="list-unstyled list-inline-item text-center trackModalInfo">
                        <li className="list-inline-item"><strong>Id:</strong> {this.state.data.id}</li>
                        <li className="list-inline-item"><strong>Album:</strong> {this.state.data.album}</li>
                        <li className="list-inline-item"><strong>Artist:</strong> {this.state.data.artist}</li>
                    </ul>
                </div>
            )
        };

        return (
            <div key={this.props.data.id} className="musicCard col-md-4 col-ms-12">
                {/* modal renderer*/}
                {vars.modalOpened ? <Modal content={modalBody(this.props)}/> : null}
                <div className="boxer" onClick={this.openModal}>
                    <img className="delayedTransition" src="http://via.placeholder.com/400" alt=""/>
                    <div className="btBoxer delayedTransition">
                        <div className="musicInfo">
                            <i className="fa fa-headphones bigIco transition"> </i>
                            <span className="trackName">{this.state.data.track}</span>
                        </div>
                    </div>
                </div>
                <i className="fa fa-trash-o deleteIt" onClick={() => this.handleDelete(this.state.data.id)}>&nbsp;</i>
            </div>
        )
    }
}

export default MusicCard;
