import React, {Component} from 'react';
import MusicCard from '../../components/MusicCard';
import axios from 'axios';
import vars from '../../../env';

class Music extends Component {
    constructor(props) {
        super(props);

        this.state = {
            music: []
        };
    }

    //
    componentDidMount() {
        axios.get(`${vars.apiUrl}musics`)
            .then(({data}) =>{
                this.setState({ music : data})
            })
    }

    render() {
        return (
            <section className="container music">
                <div className="row">
                {this.state.music.map(function(groupItem){ return (
                    <MusicCard key={groupItem.id} data={groupItem}/> )

                })}
                </div>
            </section>
        )
    }
}

export default Music;
