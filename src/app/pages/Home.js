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
                        Home
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;
