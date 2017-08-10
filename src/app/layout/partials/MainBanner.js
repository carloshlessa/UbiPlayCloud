import React from 'react';
import bg from './../../../media/mainBanner.jpg';

const MainBanner = () => {
    return (
        <section className="mainBanner" style={{backgroundImage: `url(${bg})`}}>
            <div className="boxer">
                <header>
                    <h1 className="title">Welcome to</h1>

                    <div className="subTitle">
                        a <strong>way</strong> to do it <strong>loud</strong>
                    </div>
                </header>

            </div>
        </section>
    )
};

export default MainBanner;
