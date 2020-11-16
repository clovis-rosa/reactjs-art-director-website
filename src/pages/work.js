import Vimeo from "@u-wave/react-vimeo"

import image01 from "../images/lucas-gallone-unsplash.jpg"
import image02 from "../images/jean-philippe-delberghe-unsplash.jpg"
import image03 from "../images/mathilde-decourcelle-unsplash.jpg"
import image04 from "../images/jon-tyson-unsplash.jpg"
import image05 from "../images/dan-farrell-unsplash.jpg"
import image06 from "../images/juan-carlos-trujillo-unsplash.jpg"
import image07 from "../images/romain-morel-unsplash.jpg"
import image08 from "../images/romain-morel-unsplash-02.jpg"
import image09 from "../images/meric-dagli-unsplash.jpg"
import image10 from "../images/zane-lee-unsplash.jpg"

function Work() {
    return (
        <section className='work'>
            <div className='work-container'>
                <div className='work-grid'>
                    <div className='work-grid_title'>
                        <strong>Graffit</strong> / London City
                    </div>
                    <p className='work-grid_description'>
                        Harold Trevino who took the where not world yield five.
                        No its mars up be his so concepts you the issued
                        position. Phase our either frequency spends herself
                        parameters create not an borne those can soon a consider
                        curiously, project they however catch and still tag
                        someone away!
                    </p>
                    <div className='work-grid_client'>
                        <span>Agency: Rosas</span>
                        <span>Year: 2020</span>
                        <span>Client: El Almendro</span>
                    </div>
                </div>
                <div className='work-image'>
                    <img src={image01} alt='Unsplash Images' />
                    <img src={image02} alt='Unsplash Images' />
                    <img src={image03} alt='Unsplash Images' />
                </div>
                <Vimeo video='70852373' autoplay responsive />
                <div className='work-gallery'>
                    <img src={image04} alt='Unsplash Images' />
                    <img src={image05} alt='Unsplash Images' />
                    <img src={image06} alt='Unsplash Images' />
                    <img src={image07} alt='Unsplash Images' />
                </div>
                <div className='work-image'>
                    <img src={image08} alt='Unsplash Images' />
                    <img src={image09} alt='Unsplash Images' />
                    <img src={image10} alt='Unsplash Images' />
                </div>
            </div>
        </section>
    )
}

export default Work