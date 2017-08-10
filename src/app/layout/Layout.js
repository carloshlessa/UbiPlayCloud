import React, {Component} from 'react';
import Header from './Header';
import MainBanner from './partials/MainBanner';
import Music from './partials/Music';
import Footer from './partials/Footer';

class Layout extends Component {
    render(){
        return (
            <div>
                <Header/>
                <MainBanner/>
                <Music/>
                <Footer/>
            </div>
        )
    }
}

export default Layout;
