import React from 'react';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="/about" className="text-white">About Us</a>
              </li>
              <li className="list-inline-item">
                <a href="/products" className="text-white">Products</a>
              </li>
              <li className="list-inline-item">
                <a href="/awards" className="text-white">Awards</a>
              </li>
              <li className="list-inline-item">
                <a href="/help" className="text-white">Help</a>
              </li>
              <li className="list-inline-item">
                <a href="/contact" className="text-white">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="social-icons">
              <Facebook className="mx-2" />
              <Twitter className="mx-2" />
              <Instagram className="mx-2" />
              <LinkedIn className="mx-2" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="mb-0">&copy; 2024 YourWebsite. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
