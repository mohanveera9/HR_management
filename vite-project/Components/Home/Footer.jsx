import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                <div>
                    <h3>Links</h3>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li><a href="https://www.apna.co/app" style={{ color: '#fff' }}>Download Apna App</a></li>
                        <li><a href="https://www.apna.co/free-job-alerts" style={{ color: '#fff' }}>Free Job Alerts</a></li>
                        <li><a href="https://www.apna.co/careers" style={{ color: '#fff' }}>Careers</a></li>
                        <li><a href="https://www.apna.co/contact-us" style={{ color: '#fff' }}>Contact Us</a></li>
                        <li><a href="https://www.apna.co/vulnerability-disclosure-policy" style={{ color: '#fff' }}>Vulnerability Disclosure Policy</a></li>
                        <li><a href="https://www.apna.co/international-jobs" style={{ color: '#fff' }}>International Jobs</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Legal</h3>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li><a href="https://www.apna.co/privacy-policy" style={{ color: '#fff' }}>Privacy Policy</a></li>
                        <li><a href="https://www.apna.co/user-terms-conditions" style={{ color: '#fff' }}>User Terms & Conditions</a></li>
                        <li><a href="https://www.apna.co/employer-terms-service" style={{ color: '#fff' }}>Employer Terms of Service</a></li>
                        <li><a href="https://www.apna.co/employer-faqs" style={{ color: '#fff' }}>Employer FAQs</a></li>
                        <li><a href="https://www.apna.co/community-guidelines" style={{ color: '#fff' }}>Community Guidelines</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Resources</h3>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li><a href="https://www.apna.co/blog" style={{ color: '#fff' }}>Blog</a></li>
                        <li><a href="https://www.apna.co/sitemap" style={{ color: '#fff' }}>Sitemap</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Follow us on social media</h3>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <a href="https://www.facebook.com/apna" style={{ color: '#fff' }}><FaFacebookF /></a>
                        <a href="https://www.linkedin.com/company/apna" style={{ color: '#fff' }}><FaLinkedinIn /></a>
                        <a href="https://twitter.com/apna" style={{ color: '#fff' }}><FaTwitter /></a>
                        <a href="https://www.instagram.com/apna" style={{ color: '#fff' }}><FaInstagram /></a>
                        <a href="https://www.youtube.com/apna" style={{ color: '#fff' }}><FaYoutube /></a>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <p>© 2024 Apna | All rights reserved</p>
                <p><a href="https://www.apna.co/privacy-policy" style={{ color: '#fff' }}>Privacy Policy</a> | <a href="https://www.apna.co/terms-conditions" style={{ color: '#fff' }}>Terms & Conditions</a></p>
            </div>
        </footer>
    );
};

export default Footer;
