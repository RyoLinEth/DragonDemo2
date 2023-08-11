import React from 'react';

const DragonTokenIntroduction = () => {
    const introStyle = {
        fontSize: '18px',
        lineHeight: '1.5',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px'
    };

    const sectionStyle = {
        paddingTop: '40px',
        paddingBottom: '40px'
    };

    const headerStyle = {
        fontSize: '28px',
        fontWeight: 'bold',
        marginBottom: '20px'
    };

    const subheaderStyle = {
        fontSize: '22px',
        fontWeight: 'bold',
        marginBottom: '10px'
    };

    const iconStyle = {
        fontSize: '36px',
        marginRight: '10px',
        verticalAlign: 'middle'
    };

    return (
        <div className="row pattern">
            <section className="dragons" id="dragons">
                <div className="container">
                    <div className="row">
                        <h2>Dragon</h2>
                        <div className="section-description">
                            <div style={sectionStyle}>
                                <div style={introStyle}>
                                    <h1 style={headerStyle}>Introducing Dragon Token: Unleash the Power of Digital Assets</h1>
                                    <p>
                                        The <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>Dragon Token</span> is an innovative digital asset that embodies <span style={{ fontWeight: 'bold' }}>strength</span>, <span style={{ fontWeight: 'bold' }}>wisdom</span>, and <span style={{ fontWeight: 'bold' }}>courage</span>. Inspired by the mythical creature that symbolizes power and transformation, the Dragon Token is poised to revolutionize the world of blockchain and cryptocurrency.
                                    </p>
                                    <br/>
                                    <p>
                                        <span style={subheaderStyle}>Empowerment:</span><br />
                                        Just as the dragon's fiery breath signifies power, the <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>Dragon Token</span> empowers users with a seamless and secure way to transact and exchange value across the digital landscape.
                                    </p>
                                    <br/>
                                    <p>
                                        <span style={subheaderStyle}>Global Reach:</span><br />
                                        With the <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>Dragon Token</span>, borders and boundaries become a thing of the past. Connect with a global community of like-minded individuals who share a passion for technology and finance.
                                    </p>
                                    <br/>
                                    <p>
                                        <span style={subheaderStyle}>Security:</span><br />
                                        Like a dragon guarding its treasure, the <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>Dragon Token</span> employs cutting-edge security measures to ensure your assets remain safe and protected in the digital realm.
                                    </p>
                                    <br/>
                                    <p>
                                        <span style={subheaderStyle}>Adaptability:</span><br />
                                        Dragons adapt and evolve over time, and so does the <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>Dragon Token</span>. With an ecosystem that thrives on innovation, the token's utility and functionality will continue to expand.
                                    </p>
                                    <br/>
                                    <p>
                                        Embark on a new journey in the world of cryptocurrency with <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>Dragon Token</span>, where tradition meets technology and possibilities are endless. Join us as we breathe life into the future of digital finance.
                                    </p>
                                    <br/>
                                    <p>
                                        <span style={iconStyle}>🔥</span><br />
                                        <span style={subheaderStyle}>Ignite Your Potential with Dragon Token!</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default DragonTokenIntroduction;
