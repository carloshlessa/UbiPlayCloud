// dependencies
import React, {Component} from 'react';

// assets
import bg from '../../media/mainBanner.jpg';

class MainBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            subtitle: null
        };
    }
    render() {
        return (
            <section className="mainBanner" style={{backgroundImage: `url(${bg})`}}>
                <div className="boxer">
                    <header>
                        <h1 className="title">{this.props.title}</h1>

                        <div className="subTitle">
                            a <strong>way</strong> to do it <strong>loud</strong>
                        </div>
                    </header>

                </div>
            </section>
        )
    }
}

export default MainBanner;
