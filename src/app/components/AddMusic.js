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
            track: ''
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

    handleSubmit(event) {
        alert(this.state.artist + ' -> ' + this.state.album);

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

        event.preventDefault();
    }




    render() {
        // modal gui builder
        let modalBody = () => {
            return (
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <input
                            placeholder="Artist"
                            className="input"
                            name="artist"
                            value={this.state.artist}
                            onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group">
                        <input
                            placeholder="Album"
                            className="input"
                            name="album"
                            value={this.state.album}
                            onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group">
                        <input
                            placeholder="Album"
                            className="input"
                            name="track"
                            value={this.state.track}
                            onChange={this.handleInputChange}/>
                    </div>

                    <input type="submit" value="Submit"/>
                </form>
            )
        };

        return (
            <div className="musicCard col-md-4 col-ms-12">
                {/* modal renderer */}
                {vars.modalOpened ? <Modal content={modalBody()}/> : null}

                <div className="boxer addIcon" onClick={this.openModal}>
                    <i className="fa fa-plus">&nbsp;</i>
                </div>
            </div>
        )
    }
}

export default AddMusic;
