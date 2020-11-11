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
                            <Link
                                className='project-link'
                                to={title
                                    .replace(/\s+/g, "-")
                                    .toLocaleLowerCase()}>
                                {title}
                                <span> ︎</span>
                            </Link>
                            <h2 className='project-h2'>{type}</h2>
                            <Link
                                className='project-image'
                                to={title
                                    .replace(/\s+/g, "-")
                                    .toLocaleLowerCase()}>
                                <img
                                    className='js-vhs-filter'
                                    src={`/images/${image}`}
                                    alt={title}
                                />
                            </Link>
                        </div>
                        <svg className='project-svg'>
                            <filter id='r'>
                                <feColorMatrix
                                    type='matrix'
                                    values='1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0 '
                                />
                            </filter>
                            <filter id='g'>
                                <feColorMatrix
                                    type='matrix'
                                    values='0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0 '
                                />
                            </filter>
                            <filter id='b'>
                                <feColorMatrix
                                    type='matrix'
                                    values='0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0 '
                                />
                            </filter>
                        </svg>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Projects
