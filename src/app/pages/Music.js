// dependencies
import React, {Component} from 'react';
import axios from 'axios';

// assets
import bg from '../../media/banner/music.jpg';
import vars from '../../env';

// partials
import MainBanner from "../layout/MainBanner";
import MusicCard from '../components/MusicCard';
import AddMusic from './../components/AddMusic';

class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {
            music: []
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
        const bannerData = {
            title: "Let's play it",
            subtitle: "Just click on it",
            bg: bg
        };

        return (
            <div>
                { /* Banner */}
                <MainBanner data={bannerData}/>

                { /* Container */}
                <section className="container music">
                    <div className="row">
                        {this.state.music.map(function (groupItem) {
                            return (
                                <MusicCard key={groupItem.id} data={groupItem}/> )
                        })}

                        <AddMusic />
                    </div>
                </section>
            </div>
        )
    }
}

export default Music;
