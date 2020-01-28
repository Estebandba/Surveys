import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {

    return <nav className="navBar" data-test="navBar-component">
                <div className="nav-wrapper">
                    <div className="container">
                        <Link to='/'  className="brand-logo">SURVEYS</Link>
                        <ul className="right hide-on-med-and-down">
                            <img src={require(`../images/chart-pie-solid.svg`)}style={{minHeight:'40px', minWidth:'40px', paddingTop:'10px'}} alt="icon"/>                            
                        </ul>
                    </div>
                </div>
            </nav>
}

export default Navbar;