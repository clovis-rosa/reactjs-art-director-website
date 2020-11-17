import image01 from "../images/calicadoo-unsplash.jpg"

function About() {
    return (
        <section className='about'>
            <div className='about-container'>
                <div className='about-me'>
                    <p className='about-me_text'>
                        My production class, he home, for to was the enough
                        everything bored with evaluate to or in boss head
                        parents who blind to let unmolested that my watching
                        myself he simply.
                    </p>
                    <p className='about-me_text'>
                        That and of either missions early what been be our
                        encouraged designers, so clues a he free from is times
                        task.
                    </p>
                    <p className='about-me_text'>
                        Way, clean all with a try even butter him remodelling
                        evaluate it forward desires the in eyes to the if to pay
                        two hiding his that office its to the by and approached
                        of lane. Even weather.
                    </p>
                    <p className='about-me_text'>
                        In to the on a project bored are city even behavioural.
                    </p>
                    <address className='about-contact'>
                        <a href='https://github.com/clovis-rosa'>︎dribbble</a>
                        <a href='https://github.com/clovis-rosa'>︎behance</a>
                        <a href='https://github.com/clovis-rosa'>︎vimeo</a>
                        <a href='https://github.com/clovis-rosa'>︎github</a>
                        <a href='mailto:clovis.souzarosa@gmail.com'>
                            ︎clovis.souzarosa@gmail.com
                        </a>
                        <p>︎+123 4567890</p>
                    </address>
                    <div className='about-work'>
                        <div className='about-work_experience'>
                            <h3>Work experience:</h3>
                            <div>
                                <p>Agency: Onofrio Napolitano</p>
                                <p>Art Director</p>
                                <p>jun 2020</p>
                            </div>
                            <div>
                                <p>Agency: Gonzalo Miranda</p>
                                <p>Designer</p>
                                <p>sep 2019 / may 2020</p>
                            </div>
                        </div>
                        <div className='about-work_education'>
                            <h3>Education:</h3>
                            <p>The London School of Design</p>
                            <p>Bachelor in Design</p>
                            <p>oct 2018</p>
                        </div>
                    </div>
                </div>
                <div className='about-photo'>
                    <img src={image01} alt='Unsplash Images' />
                </div>
            </div>
        </section>
    )
}

export default About
