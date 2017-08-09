import React, {Component} from 'react';
import Header from './Header';
import MainBanner from './partials/MainBanner';

class Layout extends Component {
    render(){
        return (
            <div>
                <Header/>
                <MainBanner/>
            </div>
        )
    }
}

export default Layout;
