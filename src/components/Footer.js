import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://twitter.com/pranavmodx" className="icon fa-twitter" target="_blank"><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/pranavmodx" className="icon fa-github" target="_blank"><span className="label">Github</span></a></li>
                        <li><a href="mailto:pranavmodx@gmail.com" className="icon fa-envelope-o" target="_blank"><span className="label">Email</span></a></li>
                        <li><a href="https://medium.freecodecamp.org/@pranavmodx" className="icon fa-medium" target="_blank"><span className="label">Medium</span></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
