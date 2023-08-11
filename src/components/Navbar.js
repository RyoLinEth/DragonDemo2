import React, { useState } from 'react';
import WalletConnect from './WallectConnector';

const Navbar = ({ defaultAccountChange }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleMenu = () => {
        setIsExpanded(!isExpanded);
    };

    const closeMenu = () => {
        setIsExpanded(false);
    };

    const handleDefaultAccountChange = (value) => {
        defaultAccountChange(value)
    };

    return (
        <nav className="navbar navbar-inverse navbar-custom navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <a className="navbar-brand navbar-logo" href="#home" style={{
                            color: 'transparent'
                        }}>Home</a>
                        <button
                            type="button"
                            className="search-button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <span className="ion-search"></span>
                        </button>
                        <div style={{ marginLeft: '24vw' }}>
                            <WalletConnect
                                defaultAccountChange={handleDefaultAccountChange}
                            />
                        </div>
                    </div>
                    <div className="dropdown-menu dropdown-search-box animated fadeIn">
                        <span className="ion-android-arrow-dropup searchbox-caret animated fadeIn"></span>
                        <form method="get" action="#">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="search-box"
                                required
                            />
                        </form>
                    </div>
                    <button
                        type="button"
                        className={`navbar-toggle custom-toggle-btn ${isExpanded ? 'collapsed' : ''
                            }`}
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div
                    className={`collapse navbar-collapse ${isExpanded ? 'in' : ''
                        }`}
                    id="main-nav"
                >
                    <ul className="nav navbar-nav navbar-right" style={{ opacity: '0.9' }}>
                        <li className="plain-link">
                            <a href="#home" onClick={closeMenu}>
                                Home
                            </a>
                        </li>
                        <li className="plain-link">
                            <a href="#ido" onClick={closeMenu}>
                                IDO</a>
                        </li>
                        <li className="plain-link">
                            <a href="#dragons" onClick={closeMenu}>
                                About
                            </a>
                        </li>
                        <li className="plain-link">
                            <a href="#mechanism" onClick={closeMenu}>
                                Mechanism
                            </a>
                        </li>
                        <li className="plain-link">
                            <a href="#contact" onClick={closeMenu}>
                                Social
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
