import React from 'react'
import PropTypes from 'prop-types'

import paul from '../images/paul.jpg'
import sam from '../images/sam.jpg'
import espVid from '../videos/esp.mp4'

class Main extends React.Component {
    render() {

        let close = <div className="close" onClick={() => {
            this.props.onCloseArticle()
        }}/>;

        return (
            <div ref={this.props.setWrapperRef} id="main"
                 style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

                <article id="about"
                         className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
                         style={{display: 'none'}}>
                    <h2 className="major">About</h2>
                    <span className="image main align-center">
                        <video style={{width: '100%', display: 'inline'}} loop muted playsinline controls id="myVideo">
                          <source src={espVid} type="video/mp4"/>
                        </video>
                    </span>
                    <p>Adam Lusby is a Strength &amp; Conditioning coach and Personal Trainer, specialising in a wide
                        variety of
                        sports. He trains some of UK’s top athletes in a variety of fields, including professional
                        footballers
                        Cammy Kerr and Simon Murray, top MMA athlete Scott Malone and
                        elite level boxers Paul Kean, Dean Sutherland, Sean McKiddie, Ryan Gall, Sam Hickey, Charlie
                        Doig
                        and Stephen Donald to name but a few.</p>
                    <p>Adam has been coached and learned from some of the worlds leading S&amp;C coaches from Americas
                        Phil Daru, S&amp;C coach at American Top Team to Sheffields Danny Wilson of Boxing Science. This
                        knowledge he has gathered he can know provide to you for whatever you may need.
                    </p>
                    <p>
                        No more paying for overpriced nonsense that will have you wasting your money and time. At
                        Enhanced Sports Performance Adam will provide you with all you need to achieve your physical and
                        sporting goals.</p>
                    {close}
                </article>

                <article id="clients"
                         className={`${this.props.article === 'clients' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
                         style={{display: 'none'}}>
                    <h2 className="major">Clients</h2>
                    <span className="image main">
                        <img style={{width: '50%', display: 'inline'}} src={paul} alt=""/>
                        <img style={{width: '50%', display: 'inline'}} src={sam} alt=""/>
                    </span>
                    <p>
                        Paul Kean (Professional Boxer) – “Ive been training with Adam for a few years now and I feel
                        amazing, Ive never felt better. He pays attention to the small details and knows what I need to
                        perform at the top level”
                    </p>
                    <p>
                        Sam Hickey (Team Scotland Boxer) – “Adam is a brilliant S&amp;C coach, he has really taken my
                        strength
                        and conditioning to the next level, I feel stronger and more powerful in the ring and feel I can
                        go
                        for
                        hours”
                    </p>
                    {close}
                </article>

                <article id="programme"
                         className={`${this.props.article === 'programme' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
                         style={{display: 'none'}}>
                    <h2 className="major">Programmes</h2>
                    <p style={{border: '1px white', borderStyle: 'solid', padding: '10px' }}>
                        Level 1 Strength &amp; Conditioning
                        <ul>
                            <li>Personalised programme - includes strength and power development, agility, ballistic,
                                plyometrics and conditioning
                            </li>
                            <li>Baseline testing to assess strengths and weaknesses</li>
                            <li>Level 1 Weight Cutting Strategies – Water cutting and rehydration</li>
                        </ul>
                        £120

                    </p>
                    <p style={{border: '1px white', borderStyle: 'solid', padding: '10px' }}>
                        Level 2 Strength &amp; Conditioning

                        <ul>
                            <li>Personalised Programme - includes strength and power development, agility, ballistic,
                                plyometrics and conditioning
                            </li>
                            <li>Baseline testing to assess strengths and weaknesses</li>
                            <li>Weight cutting strategies - Advanced Water loading, water cutting and rehydration
                                protocols
                            </li>
                            <li>Video library of exercises</li>
                            <li>Videos describing the benefits of the training your doing</li>
                        </ul>
                        £220
                    </p>
                    <p style={{border: '1px white', borderStyle: 'solid', padding: '10px' }}>
                        Level 3 Strength &amp; Conditioning
                        <ul>
                            <li>Advanced Personalised programme – includes strength and power development, agility,
                                ballistic, plyometrics and conditioning
                            </li>
                            <li>Baseline testing to assess strengths and weaknesses</li>
                            <li>Personal Whatsapp number for any questions you may have (10 weeks max)</li>
                            <li>Weekly Video Calls upon request (10 Weeks max)</li>
                            <li>Weight cutting strategies – Advanced Water loading, water cutting and rehydration
                                protocols
                            </li>
                            <li>Video library of exercises</li>
                            <li>Videos describing the benefits of the training your doing</li>
                        </ul>
                        £250
                    </p>
                    <p style={{border: '1px white', borderStyle: 'solid', padding: '10px' }}>
                        Personal Training
                        <ul>
                            <li>Personalised programme</li>
                        </ul>
                        £50
                    </p>
                    <p style={{border: '1px white', borderStyle: 'solid', padding: '10px' }}>
                        Personal Training
                        <ul>
                            <li>Personalised programme</li>
                            <li>Personalised diet</li>
                        </ul>
                        £70
                    </p>
                    <p style={{border: '1px white', borderStyle: 'solid', padding: '10px' }}>
                        Monthly Personal Training
                        <ul>
                            <li>Personalised programme – changes ever 8 weeks</li>
                            <li>Personalised diet – with macros calculated</li>
                            <li>Weekly Video calls</li>
                            <li>Personal Whatsapp number</li>
                            <li>Videos of tips and training techniques</li>
                        </ul>
                        £60 p/m Minimum of 3 months
                    </p>
                    {close}
                </article>

                <article id="contact"
                         className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
                         style={{display: 'none'}}>
                    <h2 className="major">Contact</h2>
                    <ul className="icons">
                        <li>
                            <a href="mailto:someone@example.com" target="_top" className="icon fa-envelope"><span
                                className="label">Email</span></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/enhancedsports1" target="_blank"
                               className="icon fa-twitter"><span
                                className="label">Twitter</span></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/enhancedsportsperformance/" target="_blank"
                               className="icon fa-facebook"><span className="label">Facebook</span></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/enhanced_sports_performance" target="_blank"
                               className="icon fa-instagram"><span className="label">Instagram</span></a>
                        </li>
                    </ul>
                    {close}
                </article>

            </div>
        )
    }
}

Main.propTypes = {
    route: PropTypes.object,
    article: PropTypes.string,
    articleTimeout: PropTypes.bool,
    onCloseArticle: PropTypes.func,
    timeout: PropTypes.bool,
    setWrapperRef: PropTypes.func.isRequired,
};

export default Main