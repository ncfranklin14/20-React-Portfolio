import React from 'react';
import github from '../assets/GitHub-Mark.png'
import linkedIn from '../assets/linkedin.png'
import emailIcon from '../assets/email-icon.png'

const Footer = () => (
  <footer className="footer">
    <div className='content has-text-centered'>
                        <span className='icon is-large fas fa-2x'>
                          <div className='contactIcon'>
                            <a href="https://github.com/ncfranklin14" target="blank"><img src={github} alt="Github" id="links"/></a>

                            <a href="https://www.linkedin.com/in/nicole-franklin-8a6001a1/" target="blank"><img src={linkedIn} alt="Linkedin" id="links"/></a>

                            <a href="mailto: ncfranklin14@gmail.com" target="blank"><img src={emailIcon} alt="email" id="links"/></a>
                          </div>
                        </span>
        </div>
  </footer>
);

export default Footer;