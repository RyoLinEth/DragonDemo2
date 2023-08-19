import React, { useState } from 'react';
import WalletConnect from './WallectConnector';
const LinkWithSymbol = ({ link, title }) => {
    const [isSymbolVisible, setIsSymbolVisible] = useState(false);

    const handleMouseEnter = () => {
        setIsSymbolVisible(true);
    };

    const handleMouseLeave = () => {
        setIsSymbolVisible(false);
    };

    const containerStyle = {
        display: 'inline-block',
        position: 'relative',
        verticalAlign: 'middle', // Keep the text and symbols aligned vertically
    };

    const textWithSymbolStyle = {
        display: 'inline-block',
    };

    const symbolStyle = {
        position: 'absolute',
        top: '50%', // Position the symbols in the middle of the container
        fontSize: '20px',
        opacity: isSymbolVisible ? 1 : 0,
        transition: 'opacity 0.2s ease-in-out',
    };

    const leftSymbolStyle = {
        ...symbolStyle,
        left: '-25px', // Adjust the position for the left symbol
        transform: 'translateY(-50%)', // Keep the symbol vertically centered
    };

    const rightSymbolStyle = {
        ...symbolStyle,
        right: '-25px', // Adjust the position for the right symbol
        transform: 'translateY(-50%)', // Keep the symbol vertically centered
    };


    return (
        <a
            href={link}
            style={{
                cursor: 'pointer',
                textDecoration: 'none'
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <h3>
                <span style={containerStyle}>
                    <span style={textWithSymbolStyle}>{title}</span>
                    <span style={leftSymbolStyle}>🔥</span>
                    <span style={rightSymbolStyle}>🔥</span>
                </span>
            </h3>
        </a>
    );
};
const GallerySection = ({ defaultAccountChange, defaultChainChange }) => {

    const handleDefaultAccountChange = (value) => {
        defaultAccountChange(value)
    };

    const handleDefaultChainChange = (value) => {
        defaultChainChange(value)
    }

    const linkArray = [
        {
            title: "Join IDO",
            link: "#ido"
        },
        {
            title: "Link",
            link: "#link"
        },
        {
            title: "Introduction",
            link: "#dragons"
        },
        {
            title: "Mechanism",
            link: "#mechanism"
        },
    ]
    return (
        <div className="row pattern-dark">
            <section className="gallery" id="home">
                <div className="container">
                    <div className="row">
                        <h2>The Dragon Map</h2>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: '20px',
                        }}>
                            <button
                                style={{
                                    backgroundColor: 'transparent',
                                    borderRadius: '10px',
                                    border: '1px solid #EDC19A'

                                }}
                            >
                                <WalletConnect
                                    defaultAccountChange={handleDefaultAccountChange}
                                    defaultChainChange={handleDefaultChainChange}
                                />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div id="dragonic-carousel" className="carousel slide" data-ride="carousel" data-interval="false">
                        <div className="modal-corner modal-corner-top-left"></div>
                        <div className="modal-corner modal-corner-top-right"></div>
                        <div className="modal-corner modal-corner-bottom-left"></div>
                        <div className="modal-corner modal-corner-bottom-right"></div>
                        <div className="modal-border modal-border-top"></div>
                        <div className="modal-border modal-border-right"></div>
                        <div className="modal-border modal-border-bottom"></div>
                        <div className="modal-border modal-border-left"></div>

                        {/* Wrapper for slides */}
                        <div className="carousel-inner" role="listbox" style={{
                            display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
                        }}>
                            {linkArray.map((link, index) => (
                                <LinkWithSymbol key={link.title} link={link.link} title={link.title} />
                            ))}
                        </div>
                        {/* Controls */}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default GallerySection;
