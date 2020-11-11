import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { Link } from "react-router-dom"
import disableScroll from "disable-scroll"

import {
    staggerText,
    staggerReveal,
    // fadeInUp,
    handleHover,
    handleHoverExit,
    // handleCityReturn,
    // handleCity,
    staggerRevealClose,
} from "./Animations"

const Hamburger = ({ state }) => {
    // Create varibles of our dom nodes
    let menuLayer = useRef(null)
    let reveal1 = useRef(null)
    let reveal2 = useRef(null)
    let line1 = useRef(null)
    let line2 = useRef(null)
    let line3 = useRef(null)

    useEffect(() => {
        // If the menu is open and we click the menu button to close it.
        if (state.clicked === false) {
            // If menu is closed and we want to open it.

            staggerRevealClose(reveal2, reveal1)
            // Set menu to display none
            gsap.to(menuLayer, { duration: 1, css: { display: "none" } })
            // re-enable scroll
            disableScroll.off()
        } else if (
            state.clicked === true ||
            (state.clicked === true && state.initial === null)
        ) {
            // Set menu to display block
            gsap.to(menuLayer, {
                duration: 0,
                css: { display: "block" },
            })
            //Allow menu to have height of 100%
            gsap.to([reveal1, reveal2], {
                duration: 0,
                opacity: 1,
                height: "100%",
            })
            staggerReveal(reveal1, reveal2)
            // fadeInUp(info)
            staggerText(line1, line2, line3)
            // prevent scrolling
            disableScroll.on()
        }
    }, [state])

    return (
        <div ref={(el) => (menuLayer = el)} className='hamburger'>
            <div
                ref={(el) => (reveal1 = el)}
                className='hamburger-secondary-background-color'></div>
            <div ref={(el) => (reveal2 = el)} className='hamburger-layer'>
                <div className='hamburger-container'>
                    <div className='hamburger-wrapper'>
                        <div className='hamburger-menu'>
                            <nav className='hamburger-nav'>
                                <ul className='hamburger-list'>
                                    <li className='hamburger-item'>
                                        <Link
                                            className='hamburger-link'
                                            onMouseEnter={(e) => handleHover(e)}
                                            onMouseOut={(e) =>
                                                handleHoverExit(e)
                                            }
                                            ref={(el) => (line1 = el)}
                                            to='/work'>
                                            Work
                                        </Link>
                                    </li>
                                    <li className='hamburger-item'>
                                        <Link
                                            className='hamburger-link'
                                            onMouseEnter={(e) => handleHover(e)}
                                            onMouseOut={(e) =>
                                                handleHoverExit(e)
                                            }
                                            ref={(el) => (line2 = el)}
                                            to='/concept'>
                                            Concept
                                        </Link>
                                    </li>
                                    <li className='hamburger-item'>
                                        <Link
                                            className='hamburger-link'
                                            onMouseEnter={(e) => handleHover(e)}
                                            onMouseOut={(e) =>
                                                handleHoverExit(e)
                                            }
                                            ref={(el) => (line3 = el)}
                                            to='/about-me'>
                                            About me
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hamburger
