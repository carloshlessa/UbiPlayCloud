import React from 'react';
/*import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Home from '../../components/home';
import MusicCard from "../../components/music";*/
import {BrowserRouter as Router, Link} from 'react-router-dom';

const Nav = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul className="transition">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/music">Music</Link></li>
                    </ul>
                </nav>

                {/*<Route exact path="/" component={Home} label="22"/>
                    <Route path="/music/:musicId" component={MusicCard} us="e"/> */}
            </div>
        </Router>
    )
}

export default Nav;

