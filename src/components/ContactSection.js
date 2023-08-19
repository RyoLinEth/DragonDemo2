import React, { useEffect, useState } from 'react';
import Copy from './Copy'
const ContactForm = ({ onSubmit }) => {
  const [address, setAddress] = useState('');

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(address);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <span style={{ color: '#ECD19A', }}>
        Generate Manual Link
      </span>
      <div className="row">
        <div className="col-sm-4 label-container">
          <label htmlFor="name">Address: </label>
        </div>
        <div className="col-sm-8">
          <input
            type="text"
            name="name"
            id="name"
            required
            value={address}
            onChange={handleAddressChange}
          />
        </div>
      </div>
      {/* Repeat similar rows for other form fields */}
      {/* ... */}
      <div className="row">
        <div className="col-sm-4 button-submit"></div>
        <div className="col-sm-8">
          <button type="submit" className="btn">Submit</button>
        </div>
      </div>
    </form>
  );
};

const ContactSection = ({ defaultAccount }) => {
  const [invitationLink, setInvitationLink] = useState('');
  const [defaultLink, setDefaultLink] = useState(null);

  const setDefaultLinkByAccount = () => {
    const currentURL = window.location.origin;
    const link = `${currentURL}/?inviter=${defaultAccount}`;
    setDefaultLink(link);
  }
  useEffect(() => {
    if (defaultAccount === null) return;
    setDefaultLinkByAccount()
  }, [defaultAccount])

  const handleFormSubmit = (address) => {
    // Generate the invitation link with the address parameter
    const currentURL = window.location.origin;
    const link = `${currentURL}/?inviter=${address}`;
    setInvitationLink(link);
  };

  return (
    <div className="row pattern">
      <section className="contact" id="link">
        <div className="container" style={{ padding: '10px' }}>
          <div className="row">
            <h2>Summon Partners</h2>
            <p className="section-description">
              {/* ... */}
              Generate Your Invitation Link,
              Summon More Dragon Knight Tonight <br />
              Summon Knights to Get 5% Rewards
            </p>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4" style={{ margin: '20px' }}>
              <ContactForm onSubmit={handleFormSubmit} />
            </div>
            <div className="col-md-6 col-lg-offset-1 col-lg-6"
              // id="gmaps"
              style={{
                minHeight: '20vh',
                margin: '30px',
                border: '1px solid rgb(98, 53, 31)',
                wordBreak: 'break-word',
                color: 'darkorange'
              }}>
              <p>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <span style={{ marginRight: '10px' }}>Default Link:</span>
                  <Copy text={defaultLink} />
                </div>
                <span style={{ color: '#ECD19A' }}>
                  {
                    defaultAccount === null
                      ? "Wallet Not Connected"
                      : defaultLink
                  }
                </span>
              </p>
              {invitationLink && (
                <p>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <span style={{ marginRight: '10px' }}>Manual Link:</span>
                    <Copy text={invitationLink} />
                  </div>
                  <span style={{ color: '#ECD19A' }}>{invitationLink}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
