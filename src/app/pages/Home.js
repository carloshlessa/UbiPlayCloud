// dependencies
import React, {Component} from 'react';

// assets
import bg from '../../media/banner/home.jpg';

// partials
import MainBanner from "../layout/MainBanner";

class Home extends Component {
    render() {
        const bannerData = {
            title: "Welcome to",
            subtitle: "a way to do it loud",
            bg: bg,
        };
        return (
            <div>
                { /* Banner */}
                <MainBanner data={bannerData}/>


                { /* Container */}
                <section className="container home">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 text-center">
                        <p>The purpose of this project was to create a web-app, using React.</p>
                        <p className="font-11">Made by Francisco Carvalho for <strong>Ubiwhere</strong></p>
                    </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;
