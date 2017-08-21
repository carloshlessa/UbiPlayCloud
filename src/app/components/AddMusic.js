// dependencies
import React, {Component} from 'react';
import axios from 'axios';
import vars from '../../env';

// partials
import Modal from "./../layout/Modal";

class AddMusic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowingModal: vars.modalOpened,
            artist: '',
            album: '',
            track: '',
            filled: false
        };
        this.openModal = this.openModal.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handle musicCard click to open modal
    openModal(event) {
        event.preventDefault();

        // Set the state to re render
        vars.modalOpened = true;
        this.setState({isShowingModal: !this.state.isShowingModal}); // ES6 shortcut
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    validateForm = () => {
        if (this.state.album.length > 0 && this.state.artist.length > 0 && this.state.track.length > 0) return true
    };

    handleSubmit(event) {
        if (this.validateForm()) {

            this.setState({filled: true}); // set filled flag
            // post it
            axios.post(`${vars.apiUrl}musics`, {
                album: this.state.album,
                artist: this.state.artist,
                track: this.state.track
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            this.setState({filled: false});
        }

        event.preventDefault();
    }

    // modal gui builder
    formGui = () => {
        return (
            <div className="addMusic">
                <h1>Let's add some new music</h1>
                <p>Please fill the form to insert a new record</p>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Artist"
                            className="input"
                            name="artist"
                            value={this.state.artist}
                            onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Album"
                            className="input"
                            name="album"
                            value={this.state.album}
                            onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Track"
                            className="input"
                            name="track"
                            value={this.state.track}
                            onChange={this.handleInputChange}/>
                    </div>

                    <input type="submit" value="Add it" className="addMusicBt"/>
                </form>
            </div>
        )
    };

    modalMessage = () => {
        return (
            <div>
                <h1>Hey, you!</h1>
                <p>
                    {
                        this.state.filled ? 'The song was added successfully.' : 'Whoops. Please fill the form'
                    }
                </p>
            </div>
        )
    };

    render() {
        return (
            <div className="musicCard col-md-4 col-ms-12">
                {/* modal renderer */}
                {vars.modalOpened ? <Modal content={this.formGui()}/> : null}

                {this.state.filled ? <Modal content={this.modalMessage()} /> : null}

                <div className="boxer addIcon" onClick={this.openModal}>
                    <i className="fa fa-plus">&nbsp;</i>
                </div>
            </div>
        )
    }
}

export default AddMusic;
