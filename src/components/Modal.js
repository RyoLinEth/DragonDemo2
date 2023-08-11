import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, content }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const modalStyle = {
        width: isMobile ? '80vw' : '600px',
        maxHeight: '80vh',
        backgroundColor: '#161616',
        position: 'relative',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #ECD19A', // Added border
    };

    const closeButtonStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        border: 'none',
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: '18px',
        cursor: 'pointer',
    };

    return (
        <>
            {isOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 9999,
                    }}
                >
                    <div style={modalStyle}>
                        <button style={closeButtonStyle} onClick={onClose}>X</button>
                        <h3>
                            {content[0]}
                        </h3>

                        <p style={{
                            color: 'darkorange',
                            padding: '10px'
                        }}>
                            {content[2] !== null &&
                                <a href={content[2]} target="_blank" rel="noopener noreferrer">
                                    {content[1]}
                                </a>
                            }
                            {
                                content[2] === null &&
                                content[1]
                            }
                        </p>
                    </div>
                </div>
            )
            }
        </>
    );
};

export default Modal;
