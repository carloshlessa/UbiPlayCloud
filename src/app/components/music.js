import React, {Component} from 'react';

class MusicCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listDataFromChild: null
        };
    };

    render() {
        return (
            <div>
                id: {this.props.musicId}

                {this.props.us}
            </div>
        )
    }
}

export default MusicCard;
