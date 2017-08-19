import React, {Component} from 'react';
import MusicCard from './MusicCard';
import axios from 'axios';
import vars from '../../env';
import MainBanner from "../layout/MainBanner";

class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {
            music: [],
            title: 'Welcome to'
        };
    }

    //Welcome to
    componentDidMount() {
        axios.get(`${vars.apiUrl}musics`)
            .then(({data}) => {
                this.setState({music: data})
            })
    }

    render() {
        return (
            <div>
                <MainBanner title={this.state.title}/>
                <section className="container music">
                    <div className="row">
                        {this.state.music.map(function (groupItem) {
                            return (
                                <MusicCard key={groupItem.id} data={groupItem}/> )
                        })}
                    </div>
                </section>
            </div>
        )
    }
}

export default Music;
