// dependencies
import React, {Component} from 'react';

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
            <section className="mainBanner" style={{backgroundImage: `url(${this.props.data.bg})`}}>
                <div className="boxer">
                    <header>
                        <h1 className="title">{this.props.data.title}</h1>

                        <div className="subTitle">{this.props.data.subtitle}</div>
                    </header>

                </div>
            </section>
        )
    }
}

export default MainBanner;
