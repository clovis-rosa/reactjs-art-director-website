import { Link } from "react-router-dom"
import data from "../data"

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='footer-content'>
                    <p className='footer-text'>
                        I’m available to work on art direction and graphic
                        design projects. Get in touch if you want to work
                        together!
                    </p>
                    <address className='footer-contact'>
                        <div>
                            <a href='mailto:clovis.souzarosa@gmail.com'>
                                ︎clovis.souzarosa@gmail.com
                            </a>
                            <a href='https://github.com/clovis-rosa'>
                                ︎github
                            </a>
                            <p>︎+123 4567890</p>
                        </div>
                    </address>
                </div>
            </div>
        </footer>
    )
}

export default Footer
