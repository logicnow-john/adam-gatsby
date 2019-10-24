import React from 'react'
import PropTypes from 'prop-types'
import esp_logo from "../images/esp_logo.png";

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="">
            <span className="logo">
                <img src={esp_logo} alt=""/>
            </span>
        </div>
        <div className="content">
            <div className="inner">
                <h2>Adam Lusby</h2>
                <h1 style={{color: "#97989C"}}>Strength & Conditioning Coach<br/>Personal Trainer</h1>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:" onClick={() => {
                    props.onOpenArticle('about')
                }}>About</a></li>
                <li><a href="javascript:" onClick={() => {
                    props.onOpenArticle('clients')
                }}>Clients</a></li>
                <li><a href="javascript:" onClick={() => {
                    props.onOpenArticle('programme')
                }}>Programmes</a></li>
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
