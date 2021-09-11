import React from 'react'
import './HeaderStyle.css'

const Header = () => {

    return (
        <div className="content-wrapper">
            <div className="navmenu">
                <nav id="navbar">
                    <div className="left">
                        <span><i class="fas fa-route"></i></span>
                        {/* <span><i class="fa fa-route"></i></span> */}
                        <span className="travel">Travel Guide</span>
                    </div>
                </nav>
                <div className="right">
                    {/* <span className="explore">Explore Weather</span>
                    <form className="forms" action="/search">
                        <input classname="search" name='q' placeholder='Search here...' size='15' type='text' />
                        <input className="btn" type='submit' value='Search'/>
                    </form> */}
                </div>

            </div>
        </div>
    )
}

export default Header
