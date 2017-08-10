import React from 'react';
import bg from './../../../media/footerBg.jpg';


const socialLinker = {
    facebook: '#',
    twitter: '#',
    youtube: '#',
    instagram: '#',
    soundcloud: '#',
    spotify: '#'
};
const Footer = () => {
    return (
        <div>
            <footer style={{backgroundImage: `url(${bg})`}}>
                <div className="boxer">
                    <h3>Follow us</h3>
                    <ul className="social list-unstyled list-inline">
                        {Object.keys(socialLinker).map(function (k,v) {
                            return (
                                <li key={v} className="list-inline-item">
                                    <a href={socialLinker[k]} target="_blank" className="transition">
                                        <i className={'fa fa-' + k}></i>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </footer>
            <div className="copy">
                <div className="fst">
                    © <strong>Francisco Carvalho</strong> 2017
                </div>
                <div className="scnd">
                    Made with <i className="fa fa-heart text-danger"></i> for <a href="http://www.ubiwhere.com" target="_blanj">ubiwhere</a>.
                </div>
            </div>
        </div>
    )
};

export default Footer;
