import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.footerSection}>
          <h3>Contact Us</h3>
          <p style={styles.contactInfo}>Email: <a href="mailto:TaskRunner@gmail.com" style={styles.link}>TaskRunner@gmail.com</a></p>
          {/* Add more contact information as needed */}
        </div>

        <div style={styles.footerSection}>
          <h3>Follow Us</h3>
          <div style={styles.socialLinks}>
            {/* Add your social media links/icons here */}
            <a href="https://twitter.com/oursite" target="_blank" rel="noopener noreferrer">
              <img src="/images/twitter-icon.png" alt="Twitter" style={styles.socialIcon} />
            </a>
            <a href="https://twitter.com/oursite" target="_blank" rel="noopener noreferrer">
              <img src="/images/instagram-icon.png" alt="Instagram" style={styles.socialIcon} />
            </a>
            <a href="https://twitter.com/oursite" target="_blank" rel="noopener noreferrer">
              <img src="/images/linkedin-icon.png" alt="Linkedin" style={styles.socialIcon} />
            </a>
            {/* Add more social media links/icons as needed */}
          </div>
        </div>

        {/* Add more sections as needed */}
      </div>

      <div style={styles.footerBottom}>
        <p style={styles.footerText}>&copy; 2024 TaskRunner. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#000000',
    padding: '20px 0',
    width: '100%',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  footerSection: {
    flex: '1',
    margin: '0 20px',
    color: '#fff'
  },
  contactInfo: {
    marginBottom: '15px',
  },
  link: {
    color: '#ff4b90',
    textDecoration: 'none',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
  },
  socialIcon: {
    width: '30px',
    height: '30px',
    margin: '0 10px',
  },
  footerBottom: {
    borderTop: '1px solid #ccc',
    marginTop: '20px',
    paddingTop: '10px',
    textAlign: 'center',
  },
  footerText: {
    fontSize: '14px',
    color: '#fff',
  },
};

export default Footer;
