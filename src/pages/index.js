import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };
    }

    render() {
        const siteTitle = "Pranav's Website"
        const siteDescription = "Pranav's Portfolio"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Hi there!<br />
                            </h2>
                        </header>
                        <p>Welcome to my website. I am a passionate coder, cuber and a chess player currently pursuing BTech. in Computer Science at Govt. Model Engineering College, Thrikkakara. I love Python and JavaScript. I like to tinker around with these two languages building projects along the way. </p>
                    </section>

                    <section id="two">
                        <h2>Interests</h2>
                            <ul>
                                <li>Full Stack Development</li>
                                <li>Quantum Computing</li>
                                <li>Computational Physics</li>
                            </ul>
                        <h2>Skills</h2>
                            <ul>
                                <li>Languages : Python, JavaScript</li>
                                <li>Web Technologies : HTML, CSS, Bootstrap, JQuery</li>
                                <li>Frameworks : Django, Flask, React, Electron</li>
                                <li>Other Technologies : Gatsby</li>
                            </ul>
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>I am active in Twitter and Instagram. Feel free to contact me there.</p>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex
