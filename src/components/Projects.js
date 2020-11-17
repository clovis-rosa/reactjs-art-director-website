import React from "react"
import { Link } from "react-router-dom"
import data from "../data"

const Projects = () => {
    return (
        <section className='project'>
            <div className='project-container'>
                {data.map(({ id, title, type, image }) => (
                    <article className='project-article' key={id}>
                        <div className='project-wrapper'>
                            <Link className='project-link' to='/work'>
                                {title}
                                <span> ︎</span>
                            </Link>
                            <h2 className='project-subtitle'>{type}</h2>
                            <Link className='project-image' to='/work'>
                                <img src={`/images/${image}`} alt={title} />
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Projects
