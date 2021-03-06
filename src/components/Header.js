import React, { useState, useEffect } from "react"
import { withRouter, Link } from "react-router-dom"
import Hamburger from "./Hamburger"
import { BarsIcon, CloseIcon } from "./SvgIcons"

const Header = ({ history }) => {
    // State of our Menu
    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: <BarsIcon />,
    })
    // State of our button
    const [disabled, setDisabled] = useState(false)

    //Use Effect
    useEffect(() => {
        //Listening for page changes.
        history.listen(() => {
            setState({ clicked: false, menuName: <BarsIcon /> })
        })
    }, [history])

    // Toggle menu
    const handleMenu = () => {
        disableMenu()
        if (state.initial === false) {
            setState({
                initial: null,
                clicked: true,
                menuName: <CloseIcon />,
            })
        } else if (state.clicked === true) {
            setState({
                clicked: !state.clicked,
                menuName: <BarsIcon />,
            })
        } else if (state.clicked === false) {
            setState({
                clicked: !state.clicked,
                menuName: <CloseIcon />,
            })
        }
    }

    //Determine if out menu button should be disabled
    const disableMenu = () => {
        setDisabled(!disabled)
        setTimeout(() => {
            setDisabled(false)
        }, 1200)
    }

    return (
        <header className='header'>
            <div className='header-container'>
                <div className='header-inner'>
                    <div className='header-logo'>
                        <Link to='/'>Clovis Rosa</Link>
                    </div>
                    <div className='header-menu'>
                        <button disabled={disabled} onClick={handleMenu}>
                            {state.menuName}
                        </button>
                    </div>
                </div>
            </div>
            <Hamburger state={state} />
        </header>
    )
}

export default withRouter(Header)
