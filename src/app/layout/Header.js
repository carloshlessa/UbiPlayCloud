import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Home from '../components/home';
import Nav from './partials/Nav'
import Brand from '../../media/logo.svg';

class Header extends Component {
    render(){
        return (
            <header className="mainHeader transition">
                <div className="container-fluid">
                    <Router>
                        { /* Brand */ }
                        <div className="logo">
                            <Link to={Home}><img src={Brand} alt="Logo UbiPlayCloud" /></Link>
                        </div>
                    </Router>

                    { /* Nav */ }
                    <div className="">
                        <Nav/>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
