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
                        <a href='mailto:clovis.rosa@outlook.com'>
                            ︎clovis.rosa@outlook.com
                        </a>
                        <a href='https://github.com/clovis-rosa'>︎behance</a>
                        <p>︎+123 4567890</p>
                    </address>
                </div>
            </div>
        </footer>
    )
}

export default Footer
