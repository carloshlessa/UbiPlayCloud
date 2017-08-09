import React from 'react';
import bg from './../../../media/mainBanner.jpg';

class MainBanner extends React.Component {
    render() {
        return (
            <section className="mainBanner" style={{backgroundImage: `url(${bg})`}}>
                <div className="boxer">
                    <header className="title">
                        <h1>Hello Music</h1>

                        <div className="subTitle">
                            a <strong>way</strong> to do it <strong>loud</strong>!
                        </div>
                    </header>

                </div>
            </section>
        )
    }
}

export default MainBanner;
