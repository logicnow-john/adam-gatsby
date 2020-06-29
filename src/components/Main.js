import React from 'react'
import PropTypes from 'prop-types'

import absa from '../images/absa.jpg'
import spfl from '../images/spfl.png'
import ksw from '../images/kswmma.jpg'
import cage from '../images/cage.jpg'
import boxings from '../images/boxings.jpg'
import mtk from '../images/mtkglobal.jpg'
import kynoch from '../images/kynoch.jpg'
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
                    <p>Adam Lusby is a Strength &amp; Conditioning coach specialising in a wide
                        variety of
                        sports. He trains some of UK’s top athletes in a variety of fields, including professional
                        footballers
                        Cammy Kerr and Simon Murray, top MMA athlete Scott Malone and
                        elite level boxers Paul Kean, Dean Sutherland, Sean McKiddie, Ryan Gall, Sam Hickey, Charlie
                        Doig
                        and Stephen Donald to name but a few.</p>
                    <p>Adam has been coached and learned from some of the worlds leading S&amp;C coaches from America
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
                        <img style={{width: '14%', display: 'inline'}} src={absa} alt=""/>
                        <img style={{width: '14%', display: 'inline', backgroundColor: 'white', marginBottom: '2%'}} src={spfl} alt=""/>
                        <img style={{width: '14%', display: 'inline'}} src={ksw} alt=""/>
                        <img style={{width: '15%', display: 'inline'}} src={cage} alt=""/>
                        <img style={{width: '14%', display: 'inline'}} src={boxings} alt=""/>
                        <img style={{width: '14%', display: 'inline', marginBottom: '2%'}} src={mtk} alt=""/>
                        <img style={{width: '14%', display: 'inline'}} src={kynoch} alt=""/>
                    </span>
                    <p>
                        <span className="athlete-name">Dean Sutherland</span> - <span className="athlete-type">Professional Boxer</span><br/>
                        “The name is so accurate in Enhanced Sports Performance because working with Adam has done just
                        that. I feel I have progressed in every department since starting with Adam and the success so
                        far I’ve had, he has played a huge role in”
                    </p>
                    <p>
                        <span className="athlete-name">Simon Murray</span> - <span className="athlete-type">Professional Footballer</span><br/>
                        “have been training with Adam for 4 months now since I had ACL reconstruction and I’ve seen
                        amazing results. He was patient and planned out every part of my recovery and has gotten me back
                        fully fit”
                    </p>
                    <p>
                        <span className="athlete-name">Paul Kean</span> – <span className="athlete-type">Professional Boxer</span><br/>
                        “Ive been training with Adam for a few years now and I feel
                        amazing, Ive never felt better. He pays attention to the small details and knows what I need to
                        perform at the top level”
                    </p>
                    <p>
                        <span className="athlete-name">Sam Hickey</span> – <span className="athlete-type">Team Scotland Boxer</span><br/>
                        “Adam is a brilliant S&amp;C coach, he has really taken my
                        strength
                        and conditioning to the next level, I feel stronger and more powerful in the ring and feel I can
                        go
                        for
                        hours”
                    </p>
                    <p>
                        <span className="athlete-name">Stormin Norman Parke</span> - <span className="athlete-type">Professional MMA fighter and TUF winner</span>
                    </p>
                    {close}
                </article>

                <article id="programme"
                         className={`${this.props.article === 'programme' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
                         style={{display: 'none'}}>
                    <h2 className="major">Programmes</h2>
                    <p style={{border: '1px white', borderStyle: 'solid', padding: '10px'}}>
                        Boxing S&C Programme - 10 Weeks
                        <br/>
                        <a href={'https://www.facebook.com/enhancedsportsperformance/'} target="_blank">Click here to learn more!</a>
                    </p>
                    <p style={{border: '1px white', borderStyle: 'solid', padding: '10px'}}>
                        MMA S&C Programme - 10 Weeks
                        <br/>
                        <a href={'https://www.facebook.com/enhancedsportsperformance/'} target="_blank">Click here to learn more!</a>
                    </p>
                    <p style={{border: '1px white', borderStyle: 'solid', padding: '10px'}}>
                        BJJ S&C Programme - 10 Weeks
                        <br/>
                        <a href={'https://www.facebook.com/enhancedsportsperformance/'} target="_blank">Click here to learn more!</a>
                    </p>
                    <p style={{border: '1px white', borderStyle: 'solid', padding: '10px'}}>
                        Power and Speed Programme
                        <br/>
                        <a href={'https://www.facebook.com/enhancedsportsperformance/'} target="_blank">Click here to learn more!</a>
                    </p>
                    <p style={{border: '1px white', borderStyle: 'solid', padding: '10px'}}>
                        Conditioning Programme
                        <br/>
                        <a href={'https://www.facebook.com/enhancedsportsperformance/'} target="_blank">Click here to learn more!</a>
                    </p>
                    <p style={{border: '1px white', borderStyle: 'solid', padding: '10px'}}>
                        7 Days To Mindset Mastery
                        <br/>
                        <a href={'https://payhip.com/b/j0su'} target="_blank">Click here to learn more!</a>
                    </p>
                    <p style={{border: '1px white', borderStyle: 'solid', padding: '10px'}}>
                        Full Fight Camp Training Plan
                        <br/>
                        <a href={'https://www.facebook.com/enhancedsportsperformance/'} target="_blank">Click here to learn more!</a>
                    </p>
                    <p style={{border: '1px white', borderStyle: 'solid', padding: '10px'}}>
                        Facebook Group
                        <br/>
                        <a href={'https://www.facebook.com/enhancedsportsperformance/'} target="_blank">Click here to learn more!</a>
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