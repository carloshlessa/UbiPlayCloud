// dependencies
import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

// assets
import '../scss/app.scss';

// partials
import Header from './layout/Header';
import Footer from './layout/Footer';

// components
//import NotFound from "./pages/NotFound";
import Home from './pages/Home';
import Music from './pages/Music';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/music" component={Music}/>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
