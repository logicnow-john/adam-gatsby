import React from 'react'
import PropTypes from 'prop-types'
import esp_logo from "../images/esp_logo.png";

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="">
            <span className="">
                <img src={esp_logo} alt=""/>
            </span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Enhanced Sports Performance</h1>
                <p>Strength & Conditioning Coach<br/>Personal Trainer</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:" onClick={() => {
                    props.onOpenArticle('intro')
                }}>About</a></li>
                <li><a href="javascript:" onClick={() => {
                    props.onOpenArticle('work')
                }}>Clients</a></li>
                <li><a href="javascript:" onClick={() => {
                    props.onOpenArticle('about')
                }}>Programme</a></li>
                <li><a href="javascript:" onClick={() => {
                    props.onOpenArticle('contact')
                }}>Contact</a></li>
            </ul>
        </nav>
    </header>
);

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
};

export default Header
