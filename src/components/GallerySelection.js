import React from 'react';
const GallerySection = () => {
    return (
        <div className="row pattern-dark">
            <section className="gallery" id="home">
                <div className="container">
                    <div className="row">
                        <h2>The Dragon Coin</h2>
                        <p className="section-description">
                            <br />This time, something would be different.
                        </p>
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
                            <a href="#ido" style={{
                                cursor: 'pointer',
                                textDecoration: 'none'
                            }}>
                                <h3>Join IDO</h3>
                            </a>
                        </div>
                        {/* Controls */}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default GallerySection;
