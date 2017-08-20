// dependencies
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// assets
import Brand from '../../media/logo.svg';

// partials
import Nav from './Nav';

class Header extends Component {
    render() {
        return (
            <header className="mainHeader transition">
                <div className="container-fluid">
                    <div className="logo">
                        <Link to="/"><img src={Brand} alt="Logo UbiPlayCloud"/></Link>
                    </div>
                    <Nav/>
                </div>
            </header>
        )
    }
}

export default Header;
